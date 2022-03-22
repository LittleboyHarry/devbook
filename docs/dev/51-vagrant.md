---
title: Vagrant
---

请参见前文，选择 VirtualBox, libvirt 中的任意一款安装并作虚拟化支持技术

## 安装

import GetPkg from '@theme/GetPkg';

<GetPkg name="vagrant" dnf winget />

方法二：官方安装包 https://releases.hashicorp.com/vagrant

## 第一步：添加下载 box

安装

    vagrant box add --provider libvirt generic/debian11

## 问题

:::caution Q1

> Call to virDomainCreateWithFlags failed: …… bridge `virbr0': No such device

:::

A1:

    sudo systemctl restart virtnetworkd
    sudo systemctl enable virtnetworkd

:::caution Q2

> Call to virConnectOpenReadOnly failed: Failed to connect socket to '/var/run/libvirt/virtqemud-sock-ro': No such file or directory (Libvirt::ConnectionError)

:::

A2:

```shell
sudo systemctl enable libvirtd
sudo systemctl start libvirtd
```

:::caution Q3

在 Windows 采用 VirtualBox 作后端且激活了 HyperV
( 如：使用了 WSL、专业版沙盒、docker 桌面版等技术

:::

A3:

1. 应该使用 `bcdedit` 关闭 HyperV 重启
2. 或者手动设置 VirtualBox 虚拟硬件加速的半虚拟化接口为最少
3. 打开 VirtualBox 界面，随时监控虚拟机的状态

请注意上述设置，以避免虚拟机产生难以预料的故障
