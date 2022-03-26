---
title: VirtualBox
---

## Windows 安装

<p><a className="button button--primary" href="https://mirrors.tuna.tsinghua.edu.cn/virtualbox/virtualbox-Win-latest.exe" target="_blank" download>安装器下载 by 清华镜像站</a></p>

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

## 自动化命令

Windows PATH 添加：

    shim "C:\Program Files\Oracle\VirtualBox\VBoxManage.exe"

列出虚拟机名称和 uuid

    vboxmanage list vms

### 快照

照相

    vboxmanage snapshot <uuid|vmname> take <snapshot-name>
    vboxmanage snapshot <uuid|vmname> take <snapshot-name> [--live]

恢复

    vboxmanage snapshot <uuid|vmname> restorecurrent