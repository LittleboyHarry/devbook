---
title: 优化 Arch
---

## 使用 Neovim

见<a href="/docs/devenv/neovim" target="_blank">文章</a>

## 卸载国内用不上的应用

    sudo pacman -Rns gnome-weather gnome-maps

## 安装火狐浏览器

    ./arch/getfirefox.sh

 <PreferXde gnome kde hideSelector>
<ForGnome>

## 启用 GNOME 扩展支持

    ./arch/aur-gnome-webext

## GNOME 推荐扩展

```shell
sudo pacman -S gnome-shell-extension-appindicator
```

重启生效

## GNOME 优化

- 打开设置，激活自动登录

</ForGnome>
</PreferXde>

## Qt 主题修改器

    ./arch/qtingnome.sh

重新登录后生效

## AUR 软件推荐

- Debian 包安装器，[使用方法](https://www.jianshu.com/p/900dc8a0ecff)

      paru debtap

- 系统备份助手

      paru timeshift

- VSCode 微软版

      paru visual-studio-code-bin

import {
PreferXde,
ForGnome,
ForKde
} from '@theme/PreferXde';
import GetPkg from '@theme/GetPkg';
