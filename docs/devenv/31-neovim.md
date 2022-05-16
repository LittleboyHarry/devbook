---
title: neovim
---

## 安装

import GetPkg from '@theme/GetPkg';

<GetPkg name="neovim" dnf apt scoop pacman />

## 配置

作为首选文本编辑器

```shell
git config --global core.editor nvim
echo export SYSTEMD_EDITOR=nvim | tee -a ~/.bashrc ~/.zshrc
```

## 自动配置

使用作者的自动脚本：[`deploy-my-dotfiles`](/docs/devenv/deploy-my-dotfiles)

    (cd ~/deploy-my-dotfiles;./deploy modules/neovim/)
