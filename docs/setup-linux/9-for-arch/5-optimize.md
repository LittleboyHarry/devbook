---
title: 优化 Arch
---

## 使用 Neovim

见<a href="/docs/devenv/neovim" target="_blank">文章</a>

## 卸载国内用不上的应用

    sudo pacman -Rns gnome-weather gnome-maps

## 安装火狐浏览器

```shell
sudo pacman -S firefox
# 推荐插件：
sudo pacman -S firefox-dark-reader firefox-decentraleyes firefox-ublock-origin
```

 <PreferXde gnome kde hideSelector>
<ForGnome>

## 启用 GNOME 扩展

```shell
git clone https://aur.archlinux.org/chrome-gnome-shell.git
cd chrome-gnome-shell
makepkg -si
```

## GNOME 推荐扩展

```shell
sudo pacman -S gnome-shell-extension-appindicator
```

## GNOME 优化

- 打开设置，激活自动登录

</ForGnome>
</PreferXde>

## AUR 软件推荐

- Debian 包安装器，[使用方法](https://www.jianshu.com/p/900dc8a0ecff)

      paru debtap

- 系统备份助手

      paru timeshift

- VSCode 微软版

      paru visual-studio-code-bin

## 网络问题

```shell
paru v2raya-bin
sudo systemctl enable v2raya --now
sudo pacman -S v2ray v2ray-domain-list-community v2ray-geoip
```

import {
PreferXde,
ForGnome,
ForKde
} from '@theme/PreferXde';
import GetPkg from '@theme/GetPkg';
