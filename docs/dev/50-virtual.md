---
title: 虚拟化
tags: [Fedora]
---

## libvirt

安装

    sudo dnf in -y @virtualization

## VirtualBox

依赖：

    sudo dnf in -y kernel-devel

下载：https://www.virtualbox.org/wiki/Linux_Downloads

:::note 清华镜像下载

https://mirrors.tuna.tsinghua.edu.cn/virtualbox/

https://mirrors.tuna.tsinghua.edu.cn/virtualbox/virtualbox-Win-latest.exe

:::

安装后，需要编译内核模块以启动：

安装

    sudo vboxconfig
