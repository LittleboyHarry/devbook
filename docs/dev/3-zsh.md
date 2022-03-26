---
title: Zsh
---

## 安装

import GetPkg from '@theme/GetPkg';

<GetPkg name="zsh" dnf apt pacman/>

初始化配置，运行

    zsh

:::note 作者的配置

    touch ~/.zshrc && xdg-open ~/.zshrc

```bash
# Lines configured by zsh-newuser-install
HISTFILE=~/.histfile
HISTSIZE=1000000
SAVEHIST=1000000
setopt autocd beep nomatch notify
unsetopt extendedglob
bindkey -e
## End of lines configured by zsh-newuser-install
## The following lines were added by compinstall
autoload -Uz compinit
compinit
## End of lines added by compinstall
```

:::

:::note 更改 GNOME/KDE 终端默认命令

还可以选择自己喜欢的背景透明度、主题色调

    /bin/zsh

:::

<!--
chsh -s $(which zsh)
 -->

## 调优

推荐阅读并使用后文的 `deploy-my-dotfiles` 方案，调优涵盖内容不限于

忽略注释:

    echo 'setopt interactivecomments' >> ~/.zshrc

:::note 重启程序以生效

    exec zsh

:::

## 设置为 tmux 默认终端

    echo "set-option -g default-shell /bin/zsh" >> ~/.tmux.conf
