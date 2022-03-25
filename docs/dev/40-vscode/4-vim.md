---
title: Vim 模式
---

## 配置

```json
// 顾名思义:
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

## 安装

`Ctrl + P` 粘贴执行:

    ext install vscodevim.Vim

## 临时禁用

`Ctrl + Shift + P` 输入 `vimt` 回车

## 普通模式内自动切换输入法

https://github.com/daipeihust/im-select

## VSCodeVim 集成配置

```json
"vim.enableNeovim": true,
"vim.neovimPath": "nvim",
```
