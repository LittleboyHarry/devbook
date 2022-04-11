---
title: Zsh
---

## 安装

import GetPkg from '@theme/GetPkg';

<GetPkg name="zsh" dnf apt pacman/>

更改 GNOME/KDE 终端默认命令为 `/bin/zsh`：
还可以选择自己喜欢的背景透明度、主题色调

设置为登录 Shell:

    chsh -s $(which zsh)

设置为 tmux 默认终端：

    echo "set-option -g default-shell /bin/zsh" >> ~/.tmux.conf

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

## 调优

:::info 推荐的自动配置

使用[后文的方案](deploy-my-dotfiles)，包含下文配置：

:::

忽略注释:

    echo 'setopt interactivecomments' >> ~/.zshrc

:::caution 重启程序以生效

    exec zsh

:::
