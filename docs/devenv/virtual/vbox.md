---
sidebar_position: 1
description: 通用的虚拟机管理器
---

# VirtualBox

## Linux 安装

:::info 代替品推荐

Linux 环境下，libvirt 虚拟化平台技术体验更佳。详情见后文

:::

依赖：

    sudo dnf in -y kernel-devel

下载：https://www.virtualbox.org/wiki/Linux_Downloads

清华镜像站：https://mirrors.tuna.tsinghua.edu.cn/virtualbox/

安装后，需要编译内核模块以启动：

安装

    sudo vboxconfig

:::note 参考文档

[使用云镜像快速创建虚拟机](/docs/setup-mswin/dev/varch)

:::
