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

Archlinux 云镜像：（清华源）https://mirrors.tuna.tsinghua.edu.cn/archlinux/images/

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
write_files:
  - path: /etc/netplan/50-cloud-init.yaml
    permissions: '0644'
    content: |
      network:
        version: 2
        ethernets:
            enp1s0:
                dhcp4: true
            enp2s0: # 连通 ssh 的桥接网卡
                dhcp4: true
runcmd:
  - command -V netplan && ( netplan generate ; netplan apply )
```

:::note 校验代码正确性

    cloud-init devel schema -c user-data --annotate

:::

配置参数：

```shell
cat << END > ./vmcfg

VM_NAME=ubuntu-instance

VM_OS=ubuntu20.04
# 查询方法：osinfo-query os | less

IMG_BASE=Fedora-Cloud-Base-35-1.2.x86_64.qcow2

IMG_SIZE=64G

END
```

### 生成虚拟机

```shell
source ./vmcfg

# 生成自配置虚拟光盘
cloud-localds user-data.img user-data
# 生成增量虚拟硬盘
qemu-img create \
         -b `readlink -e "$IMG_BASE"` \
         -f qcow2 "$VM_NAME.qcow2" "$IMG_SIZE"
# 生成虚拟机
virt-install --connect qemu:///session \
  -n "$VM_NAME" --osinfo=$VM_OS \
  --import --disk "$VM_NAME.qcow2" \
  --import --disk user-data.img,format=raw,readonly=on \
  -w user -w bridge=virbr0 \
  --graphics none
```

**🎉 配置完成！登陆在虚拟控制台或 ssh 登陆试试～ ✨**

> 登陆界面中或执行 `hostname -I` 显示虚拟机 IP

试用完成后，我们关闭虚拟机。打个初始备份快照

    # 移除没用的自配置虚拟光盘：
    virsh --connect=qemu:///session detach-disk "$VM_NAME" vdb --persistent
    virsh --connect=qemu:///session snapshot-create-as "$VM_NAME" --name init --atomic

## 连接终端

    virsh --connect=qemu:///session console "$VM_NAME"

## 克隆

    virt-clone --connect=qemu:///session -o "$VM_NAME" --auto-clone [-n new_vmname]
