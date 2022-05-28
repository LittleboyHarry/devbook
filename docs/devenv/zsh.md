---
title: Zsh
sidebar_position: 6
---

## 安装

import GetPkg from '@theme/GetPkg';

<GetPkg name="zsh" dnf apt pacman/>

## 调优

:::info 一键安装并配置

推荐使用作者编写的 `deployworkenv`, 见前文：含 ohmyzsh

    zsh/setup

    # gitee 镜像安装：
    cn/setup-zsh

:::

:::note

- 更改 GNOME/KDE 终端默认命令为 `/bin/zsh`，
  并选择自己喜欢的背景透明度、主题色调

-     echo "set-option -g default-shell /bin/zsh" >> ~/.tmux.conf

:::
