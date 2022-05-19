---
title: 完成安装
---

重新启动机器，进入 Arch 系统

:::note 打开终端的方法

点击左上角 “活动” 按钮，输入 “terminal” 打开

:::

## 自动配置脚本

```shell
yes | pacman -S git lsb-release packagekit
git clone https://gitcode.net/littleboyharry/deploy-workenv
cd deploy-workenv/script
```

## 基本配置

- 程序坞的固定程序可自定
- todo: 暗色终端

import Content1 from '../_common/startde.md';

<Content1 />

<p>额外推荐：<strong><a href="/docs/devenv/zsh" target="_blank" >Zsh 与 deploy-my-dotfiles</a></strong></p>

## 推荐优化

import Content2 from '../_common/gnome-mustdo.md';

<Content2 />

## KDE 软件推荐

```shell
sudo pacman -S breeze-icons adwaita-qt5 yakuake dolphin
dconf write /org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/custom0/command 'yakuake'
```

import {
PreferXde,
ForGnome,
ForKde
} from '@theme/PreferXde';
import GetPkg from '@theme/GetPkg';
