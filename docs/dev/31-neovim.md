---
title: neovim
---

## 安装

import GetPkg from '@theme/GetPkg';

<GetPkg name="neovim" dnf apt scoop/>

## 配置

作为首选文本编辑器

```shell
git config --global core.editor nvim
echo export SYSTEMD_EDITOR=nvim | tee -a .bashrc .zshrc
```

:::info 作者的推荐配置

介绍说明留意前文 `deploy-my-dotfiles`

    (cd ~/deploy-my-dotfiles;./deploy modules/neovim/)

:::
