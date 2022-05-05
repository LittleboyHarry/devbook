---
title: VirtualBox
---

## 下载

<span>清华镜像站：</span>
<LinkButton outline href="https://mirrors.tuna.tsinghua.edu.cn/virtualbox/virtualbox-Win-latest.exe" name="Windows 版" />
<LinkButton outline href="https://mirrors.tuna.tsinghua.edu.cn/virtualbox/virtualbox-osx-latest.dmg" name="OSX 版" />

[其他镜像站](https://mirrorz.org/list/virtualbox)、[官网下载](https://www.virtualbox.org/wiki/Downloads)

## 配置

注册 VBoxManage.exe 到 PATH 中以便自动化：

    shim "C:\Program Files\Oracle\VirtualBox\VBoxManage.exe"
    # require: scoop install shim

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

[使用云镜像快速创建虚拟机](/docs/manual/win/vboximg)

:::
