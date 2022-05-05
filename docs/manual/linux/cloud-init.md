---
title: 云镜像与虚拟机
tags: [cloud-init,libvirt]
---

环境配置：采用 KVM 集成的 [libvirt](/docs/dev/virtual/libvirt) 平台

大多数发行版的支持 [cloud-init](https://cloudinit.readthedocs.io/en/latest/index.html) 云技术，
根据配置文件即可快速生成可 SSH 直连的虚拟机。

## 相关链接

[B站中文讲解视频](https://www.bilibili.com/video/BV1Cf4y1U7pQ)

云镜像 cloudimage 下载：

- [Debian 云镜像](https://mirrorz.org/list/debian-cdimage):
  例如 https://cloud.debian.org/images/cloud/bullseye/latest/debian-11-genericcloud-amd64.qcow2
- [Ubuntu 云镜像](https://mirrorz.org/list/ubuntu-cloud-images):
  例如 https://mirrors.tuna.tsinghua.edu.cn/ubuntu-cloud-images/jammy/current/jammy-server-cloudimg-amd64-disk-kvm.img
- [Arch 云镜像](https://mirrorz.org/list/archlinux):
  例如 https://mirrors.tuna.tsinghua.edu.cn/archlinux/images/latest/Arch-Linux-x86_64-cloudimg.qcow2

## 制作工具

<GetPkg name="cloud-image-utils cloud-init" apt pacman/>

本文以 debian11 安装为例

## 配置虚拟机

:::note 支持的系统型号

    osinfo-query os | less

:::

配置虚拟机参数：

```shell
cat << END > ./vmcfg
VM_OS=debian11
VM_NAME=debian-master
IMG_BASE=debian-11-genericcloud-amd64.qcow2
IMG_SIZE=64G
END
```

默认的网络拓扑：（ netplan 格式 ）

```shell
cat << END > ./netcfg
version: 2
ethernets:
    enp1s0:
        dhcp4: true
        dhcp6: true
    enp2s0:
        dhcp4: true
END
```

编辑 `user-data` 文件[^about_user-data]，按需修改示例代码：

[^about_user-data]: [DigitalOcean 帮助](https://www.digitalocean.com/community/tutorials/how-to-use-cloud-config-for-your-initial-server-setup)

```xml
#cloud-config
hostname: <your_vmname>
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
```

镜像加速与更新：

把 <a href="/docs/linux/mustdo/mirror-update" target="_blank">这些脚本</a> 按 yaml 数组格式
添加到 `user-data` 的 `runcmd:` 内，系统初始化时会自动执行


:::note 校验代码正确性

    cloud-init devel schema -c user-data --annotate

:::

### 生成虚拟机

```shell
source ./vmcfg

# 生成自配置虚拟光盘
cloud-localds -N netcfg user-data.img user-data

# 生成增量虚拟硬盘
qemu-img create -F qcow2 -b `readlink -e "$IMG_BASE"` -f qcow2 "$VM_NAME.qcow2" "$IMG_SIZE"

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

**🎉 配置完成！登陆在虚拟控制台或 SSH 登陆试试～ ✨**

> 登陆界面中或执行 `hostname -I` 或 `ip a` 显示虚拟机 IP

试用完成后，我们关闭虚拟机。输入指令生成备份快照：

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

## X11 图形界面转发

见 [ArchWiki](https://wiki.archlinux.org/title/OpenSSH#X11_forwarding)

import GetPkg from '@theme/GetPkg';
import { LinkButton } from '@theme/links';
