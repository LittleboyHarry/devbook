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
echo "export EDITOR='nvim'" | tee -a ~/.zshrc ~/.bashrc > /dev/null
git config --global core.editor nvim
# echo export SYSTEMD_EDITOR=nvim | tee -a ~/.bashrc ~/.zshrc > /dev/null
```

## 推荐配置

Windows 对应所在目录:

```powershell
explorer (mkdir -f $env:LOCALAPPDATA/nvim)
```

Linux 对应所在目录：

```shell
mkdir -p ~/.config/nvim
cd ~/.config/nvim

[ -x "$(command -v xdg-open)" ] && xdg-open . || echo "复制下载链接，使用 wget 下载"
```

下载该配置：<FileItem button name="init.vim" path="/config/neovim/init.vim" icon={<ScriptIcon />} />

import { ScriptIcon } from '@theme/fai';
import FileItem from '@theme/FileItem'
