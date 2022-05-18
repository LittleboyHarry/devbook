---
title: Zsh
---

## 安装

import GetPkg from '@theme/GetPkg';

<GetPkg name="zsh" dnf apt pacman/>

## 初始化配置

:::note 方案一：采用作者的配置

    touch ~/.zshrc && nano -m ~/.zshrc

粘贴一下内容

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

:::note 方案二

    zsh # 配置引导

:::

## 默认 Shell

Level 1:
更改 GNOME/KDE 终端默认命令为 `/bin/zsh`，
并选择自己喜欢的背景透明度、主题色调

Level 2: 为应用设置

```shell
# tmux:
echo "set-option -g default-shell /bin/zsh" >> ~/.tmux.conf
```

Level 3: 设置为登录 Shell，这会适用于 tty

    chsh -s $(which zsh)

## 调优

:::info 一键调优

推荐使用作者编写的 deploy-my-dotfiles, 见后文

:::

 <details className="let-details-to-gray">
<summary>手动调优</summary>

```shell
# 忽略注释
echo 'setopt interactivecomments' >> ~/.zshrc
```

</details>

:::caution 重启程序以生效

    exec zsh

:::
