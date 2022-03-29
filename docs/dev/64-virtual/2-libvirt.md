---
title: libvirt
tags: [libvirt,cloud-init]
---

## 安装

import {
  PreferPkgMgrScope,
  PkgMgrSelector,
  ForApt,
  ForDnf,
} from '@theme/PreferPkgMgr'

 <PreferPkgMgrScope dnf apt>
<PkgMgrSelector />

 <ForDnf>

    sudo dnf in -y @virtualization

 </ForDnf>

 <ForApt>

    sudo apt install -y virt-manager gnome-boxes

 </ForApt>

</PreferPkgMgrScope>

解锁虚拟机 XML 编辑器：

    dconf write /org/virt-manager/virt-manager/xmleditor-enabled true

## 使用 cloud-init 自动化

通过支持大多数发行版的 [cloud-init](https://cloudinit.readthedocs.io/en/latest/index.html) 技术，
产生可 ssh 直连 qemu/kvm 虚拟机。

### 下载安装

:::note 相关链接

中文讲解视频：https://www.bilibili.com/video/BV1Cf4y1U7pQ

Ubuntu 云镜像：https://cloud-images.ubuntu.com/

Archlinux 云镜像：（清华源）https://mirrors.tuna.tsinghua.edu.cn/archlinux/images/latest/

Fedora 35 云镜像下载：https://download.fedoraproject.org/pub/fedora/linux/releases/35/Cloud/x86_64/images/Fedora-Cloud-Base-35-1.2.x86_64.qcow2

:::

依赖

    suto apt install -y cloud-image-utils cloud-init

本文以 `LTS 22.04 (jammy)` 版安装为例：下载镜像

```shell
mkdir -p cloudimgs/ubuntu22 && cd cloudimgs/ubuntu22
wget https://cloud-images.ubuntu.com/jammy/current/jammy-server-cloudimg-amd64-disk-kvm.img
```

### 调整配置

编辑 `user-data` 文件，按需修改
（ 详情参考 [DigitalOcean 帮助](https://www.digitalocean.com/community/tutorials/how-to-use-cloud-config-for-your-initial-server-setup) )

适用于本例的推荐配置：

```xml
#cloud-config
chpasswd:
  expire: False
  list: |
    <your_user>:<your_pass>
users:
  - name: <your_name>
    ssh-authorized-keys:
      - <your_key>
    sudo: ['ALL=(ALL) NOPASSWD:ALL']
    groups: sudo
    shell: /bin/bash
    sudo: ['ALL=(ALL) NOPASSWD:ALL']
    groups: sudo
    shell: /bin/bash
```

镜像站配置[见下](#镜像加速)

:::note 校验代码正确性

    cloud-init devel schema -c user-data --annotate

:::

默认的网络拓扑：（ netplan 格式 ）

```shell
cat << END > ./netcfg
version: 2
ethernets:
    enp1s0:
        dhcp4: true
    enp2s0: # 连通 ssh 的桥接网卡
        dhcp4: true
END
```

虚拟机配置参数：

```shell
cat << END > ./vmcfg
VM_NAME=ubuntu-instance
VM_OS=ubuntu20.04
IMG_BASE=jammy-server-cloudimg-amd64-disk-kvm.img
IMG_SIZE=64G
END
```

VM_OS 查询方法：

    osinfo-query os | less

### 生成虚拟机

```shell
source ./vmcfg

# 生成自配置虚拟光盘
cloud-localds -N netcfg user-data.img user-data
# 生成增量虚拟硬盘
qemu-img create -b `readlink -e "$IMG_BASE"` -f qcow2 "$VM_NAME.qcow2" "$IMG_SIZE"
# 生成虚拟机
virt-install --connect qemu:///session \
  -n "$VM_NAME" --osinfo=$VM_OS \
  --import --disk "$VM_NAME.qcow2" \
  --import --disk user-data.img,format=raw,readonly=on \
  -w user -w bridge=virbr0 \
  --graphics none # 注：Arch 不支持
```

提高性能的控制参数：可后期修改

- `--vcpu` 配置 CPU 核心数
- `--memory` 内存大小 (MB)


 <details className="let-details-to-yellow">
<summary>

当出现 `Cloud-init v. ... finished` 字样或 `cloud-init status` 执行结果为 `status: done`

  </summary>

**🎉 配置完成！登陆在虚拟控制台或 ssh 登陆试试～ ✨**

> 登陆界面中或执行 `hostname -I` 或 `ip a` 显示虚拟机 IP

试用完成后，我们关闭虚拟机。打个初始备份快照：

```shell
source ./vmcfg

virsh --connect=qemu:///session detach-disk "$VM_NAME" vdb --persistent # 移除没用的自配置虚拟光盘：
virsh --connect=qemu:///session snapshot-create-as "$VM_NAME" --name init --atomic
```

</details>

## 连接终端

    virsh --connect=qemu:///session console "$VM_NAME"

## 克隆

请在原虚拟机关闭下执行：

```shell
NEW_VMNAME=clonedvm

source ./vmcfg
qemu-img create -b `readlink -e "$VM_NAME.qcow2"` -f qcow2 "$NEW_VMNAME.qcow2"
virt-clone --connect=qemu:///session -o "$VM_NAME" --auto-clone -n "$NEW_VMNAME" --preserve-data -f "$NEW_VMNAME.qcow2"
```

## 镜像加速

也可以把这些脚本添加到 `user-data` `runcmd:` 中，( 按 yaml 数组格式书写 )
这样每次初始化都会自动执行

RPM:

```shell
echo "fastestmirror=1" | sudo tee -a /etc/dnf/dnf.conf
sudo dnf update --refresh --assumeno || echo
# 下载并更新所有包：
# sudo dnf update -y
```

Arch:

```shell
sudo mv /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.bak
echo 'Server = https://mirrors.tuna.tsinghua.edu.cn/archlinux/$repo/os/$arch' | sudo tee /etc/pacman.d/mirrorlist
sudo pacman -Syy
# 下载并更新所有包：
# sudo pacman -Syu
```

## X11 图形化界面转发

见 [ArchWiki](https://wiki.archlinux.org/title/OpenSSH#X11_forwarding)
