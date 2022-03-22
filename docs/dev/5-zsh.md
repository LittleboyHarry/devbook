---
title: ZSH
---

为 GNOME 终端默认 Shell 命令设置为 `/bin/zsh`

## 安装

import GetPkg from '@theme/GetPkg';

<GetPkg name="zsh" dnf apt pacman/>

初始化配置，运行

    zsh

也可以用我的常用的配置，`vi ~/.zshrc`:

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

## 调优

推荐阅读并使用后文的 `create-my-dotfiles` 方案，调优涵盖内容不限于：

### 忽略注释

    echo 'setopt interactivecomments' >> ~/.zshrc

## powerlevel10k 主题

:::info BUG: 调整窗口大小造成排版错乱

[官方解决方法](https://github.com/romkatv/powerlevel10k/blob/master/README.md#the-anatomy-of-the-problem)：
禁止自动重排版

Konsole 选项在 “编辑配置方案”>“滚动” 内。

<details>
    <summary>其他主题推荐：ohmyzsh 的 steeef</summary>

`create-my-dotfiles` 支持的 `~/.zshrc` 配置：

    source ~/.create-my-dotfiles/zsh-plugins/ohmyzsh/lib/git.zsh
    source ~/.create-my-dotfiles/zsh-plugins/ohmyzsh/themes/steeef.zsh-theme

</details>

<!-- todo: ys or zsh 重编译
https://www.zsh.org/mla/workers//2019/msg00561.html
-->

:::

需要先安装好 Nerd Font 字体，[参见](./font#cascadiacode-nerdfont)

安装：

```shell
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k
# 国内:
# git clone --depth=1 https://gitee.com/romkatv/powerlevel10k.git ~/powerlevel10k

echo 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >>~/.zshrc
# 开始配置
exec zsh
```

选调：隐藏系统图标

    sed -i "/# os identifier/ s/^/#&/" ~/.p10k.zsh
    exec zsh

## 设置为 tmux 默认终端

    echo "set-option -g default-shell /bin/zsh" >> ~/.tmux.conf
