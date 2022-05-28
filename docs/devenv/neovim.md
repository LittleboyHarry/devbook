---
title: Neovim
sidebar_position: 31
---

## 安装

import GetPkg from '@theme/GetPkg';

<GetPkg name="neovim" dnf apt scoop pacman />

## 配置

作为首选文本编辑器

```shell
echo "export EDITOR='nvim'" | tee -a ~/.zshrc ~/.bashrc
git config --global core.editor nvim
# echo export SYSTEMD_EDITOR=nvim | tee -a ~/.bashrc ~/.zshrc
```

## 自动配置

使用作者的自动脚本：[`deployworkenv`](/docs/devenv/deployworkenv)

    nvim/cfg