---
title: neovim
---

## 安装

import GetPkg from '@theme/GetPkg';

<GetPkg name="neovim" dnf apt scoop/>

## 配置

作为 git 首选文本编辑器

    git config --global core.editor nvim

:::info 作者的推荐配置

介绍说明留意前文 `deploy-my-dotfiles`

    (cd ~/deploy-my-dotfiles;./deploy modules/neovim/)

:::
