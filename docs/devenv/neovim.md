---
sidebar_position: 31
---

# Neovim

## 安装

import GetPkg from '@theme/unique/GetPkg';

<GetPkg name="neovim" dnf apt scoop pacman />

## 配置

作为首选文本编辑器

```shell
echo "export EDITOR='nvim'" | tee -a ~/.zshrc ~/.bashrc > /dev/null
git config --global core.editor nvim
# echo export SYSTEMD_EDITOR=nvim | tee -a ~/.bashrc ~/.zshrc > /dev/null
```

## 推荐的配置文件

import CodeType from '@theme/unique/CodeType'

<CodeType win cmd>

在 Windows 中编辑配置文件

</CodeType>

    powershell notepad \"$(mkdir -f $env:LOCALAPPDATA\nvim)\init.vim\"

<CodeType cmd>

Linux 对应所在目录：

</CodeType>

```shell
mkdir -p ~/.config/nvim
[ -x "$(command -v xdg-open)" ] && xdg-open . || echo "复制下载链接，使用 wget 下载"
```

import CodeBlock from '@theme/CodeBlock';
import ConfigCode from '!!raw-loader!./init.vim';

<CodeBlock language="vim" title="nvim/init.vim">{ConfigCode}</CodeBlock>
