---
title: WSL 开发容器
sidebar_position: 4
---

推荐使用 `podman`: 不依赖 systemd 的无 root 容器技术

## 安装

[在 Debian 11 仓库](https://packages.debian.org/stable/podman)
中的版本太旧，不支持新版 podman-compose.

因此推荐使用 OpenSUSE 容器技术团队的实验版：

```shell
sudo apt install -y curl gpg
echo 'deb https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/Debian_11/ /' | sudo tee /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list
curl -fsSL https://download.opensuse.org/repositories/devel:kubic:libcontainers:stable/Debian_11/Release.key | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/devel_kubic_libcontainers_stable.gpg > /dev/null
sudo apt update
sudo apt install -y podman
```

_[下载速度过慢？更改下载源](https://mirrorcache.opensuse.org/download/repositories/devel:/kubic:/libcontainers:/stable/Debian_11/Packages.mirrorlist)_

## 问题修复

:::note BUG

    exit status 2: iptables v1.8.7 (nf_tables): Couldn't load match `comment':No such file or directory

[解决方法](https://github.com/microsoft/WSL/issues/7948#issuecomment-1043467915):

```shell
sudo update-alternatives --set iptables /usr/sbin/iptables-legacy
sudo update-alternatives --set ip6tables /usr/sbin/ip6tables-legacy
```

:::

## 更多配置

<a href="/docs/devenv/podman" target="_blank">见开发环境内容</a>
