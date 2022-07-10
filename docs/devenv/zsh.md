---
sidebar_position: 6
---

# Zsh

## 安装

import GetPkg from '@theme/unique/GetPkg';

<GetPkg name="zsh" dnf apt pacman/>

## 调优

import Require from '/docs/\_common/deployworkenv.md'

<Require />

:::info 一键安装并配置

    zsh/setup

    # gitee 镜像安装：
    cn/setup-zsh

:::

:::note

- 更改 GNOME/KDE 终端默认命令为 `/bin/zsh`，
  并选择自己喜欢的背景透明度、主题色调

-     echo "set-option -g default-shell /bin/zsh" >> ~/.tmux.conf

:::
