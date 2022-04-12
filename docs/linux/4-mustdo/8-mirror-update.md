---
title: 从镜像源更新
---

:::caution 更新过程中保持网络畅通

安装过程中应避免其他操作、安装后尽快重启

:::

## Debian

使用 HTTPS 可以避免流量劫持、优化体验（ Debian 10 及以上版本内置的 `apt-transport-https` 模块支持 ）

```shell
sudo cp /etc/apt/sources.list /etc/apt/sources.list.old # 备份

# 使用腾讯云 Debian 镜像源:
sudo sed -i -E "s#http://(deb|security|ftp).debian.org#https://mirrors.cloud.tencent.com#g" /etc/apt/sources.list
# 不需要检索源码包
sudo sed -i "/deb-src/ s/^/#/" /etc/apt/sources.list

sudo apt update     # 更新源
sudo apt upgrade -y # 更新系统
```

## Ubuntu

<details className="let-details-to-gray">
<summary>方法一：图形化更新器</summary>

1. 打开 “软件和更新” ( 搜索关键词 `sof` )，选择合适的下载源

   Ubuntu 下载 -> 下载自 ( 默认“中国的服务器”指的是 cn.archive.ubuntu.com )

2. 打开 “软件更新器” ( 搜索关键词 `upd` ) 更新系统

</details>

方法二：与 Debian 同理

```shell
sudo cp /etc/apt/sources.list /etc/apt/sources.list.old # 备份

# 使用腾讯云 Ubuntu 镜像源:
sudo sed -i -E "s#http://((cn.)?archive|security).ubuntu.com#https://mirrors.cloud.tencent.com#g" /etc/apt/sources.list

sudo apt update     # 更新源
sudo apt upgrade -y # 更新系统
```

## Fedora

让系统自动选择镜像源

```shell
sudo dnf config-manager --save --setopt=fastestmirror=True
sudo dnf upgrade -y # 更新系统
```

注：若镜像站发生故障，导致下载中断，可修改 `/etc/hosts` 将相关域名映射为 `127.0.0.1` 以屏蔽

<details className="let-details-to-gray">
  <summary>
如果不需要内置的大体积应用，更新过程会更快：
</summary>

删除开源版 Office:

    sudo dnf remove libreoffice*

计划使用 <a href="/docs/software/browser/edge-for-linux" target="_blank" >Edge</a> 来代替 Firefox

    sudo dnf remove firefox

</details>

<!-- todo:? send notify after update -->

## Arch

使用清华镜像站

```shell
sudo mv /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.bak
echo 'Server = https://mirrors.tuna.tsinghua.edu.cn/archlinux/$repo/os/$arch' | sudo tee /etc/pacman.d/mirrorlist

sudo pacman -Syy # 更新数据
sudo pacman -Syu # 更新系统
```
