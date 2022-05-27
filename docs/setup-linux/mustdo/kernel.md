---
title: 内核问题
sidebar_position: 16
---

如果发行版的自带内核对硬件支持有问题，请注意本文，否则略过。毛病不限于：

- 新内核无法启动，导致黑屏死机
- 笔记本合上盖子挂起导致崩溃

:::info 常用链接

长期支持版：
[https://www.kernel.org/category/releases.html](https://www.kernel.org/category/releases.html#:~:text=Longterm%20release%20kernels)

Linux 内核源码 by 清华镜像站：https://mirrors.tuna.tsinghua.edu.cn/kernel/

Ubuntu 预编辑内核包：https://github.com/pimlie/ubuntu-mainline-kernel.sh

:::

## 高级启动菜单

发行版安装后，会提供一些备用的启动模式：备用版内核、修复模式、Shell 模式、自动工具箱等

这在硬件故障、数据恢复、系统修复等场景非常适用

## Ubuntu 预编译内核

下载地址：https://kernel.ubuntu.com/~kernel-ppa/mainline/

:::note 源码校验

```shell
gpg2 --locate-keys torvalds@kernel.org gregkh@kernel.org
xz -cd linux-*.tar.xz | gpg2 --verify linux-*.tar.sign -
```

说明文档：https://www.kernel.org/signature.html

:::

## Fedora

死机后关闭电源重启出现内核选择菜单，尝试过往可成功启动的内核启动。成功启动后，更换可用的内核：

```shell
# 内核列表
ls /boot/vmlinuz-*

sudo grubby --set-default <kernel_path>
```

[详见这里](https://ask.fedoraproject.org/t/fedora-new-kernel-not-working-after-dnf-upgrade-refresh/2222/3)

```shell
# 列出历史版本
dnf --showduplicates list kernel

# 阻止更新
sudo dnf in 'dnf-command(versionlock)'
sudo dnf versionlock add kernel-5.14.10-300.fc35
# add 为锁定模式，exclude 为排除模式，delete 解除锁定
```
