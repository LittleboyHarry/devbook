---
sidebar_position: 4
---

# VSCode vi 编辑模式

## 配置

```json
"vim.startInInsertMode": true,
"vim.useSystemClipboard": true,
// 组合键冲突：https://github.com/VSCodeVim/Vim/issues/1437
"vim.handleKeys": {
  "<C-e>": false,
  "<C-a>": false,
  "<C-d>": false,
  "<C-x>": false,
  "<C-f>": false,
  "<C-g>": false,
  "<C-h>": false,
  "<C-c>": false,
  "<C-v>": false,
  "<C-l>": false,
  "<C-k>": false
},
```

:::note 与 neovim 集成

```json
"vim.enableNeovim": true,
"vim.neovimPath": "nvim",
```

:::

## 安装

<p><PreferVscode oneline children={<GetVscodeExtension id="vscodevim.Vim" />} /></p>

:::info 临时禁用的方法

`Ctrl + Shift + P` 输入 `vimt` 回车

:::

:::note [普通模式内自动切换输入法](https://github.com/daipeihust/im-select)
:::

import { LinkButton } from '@theme/links';
import GetVscodeExtension, { PreferVscode } from '@theme/GetVscodeExtension';
