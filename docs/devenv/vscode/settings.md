---
sidebar_position: 1
---

# VSCode 配置

import { LinkButton } from '@theme/unique/links';

## 修改默认 Shell

`Ctrl + Shift + P` 输入关键词 `terspro` 选择

## 配置文件

编辑方法：`Ctrl + ,` 点击右上角图标跳转到 JSON 文件

```json
// 关闭遥测
"telemetry.telemetryLevel": "off",
// Ctrl + 鼠标滚轮缩放字体
"editor.mouseWheelZoom": true,
// Git 优化
"git.rebaseWhenSync": true,
// 终端快捷键冲突缓解
"terminal.integrated.commandsToSkipShell": [
    "-workbench.action.quickOpen",
    "-workbench.action.terminal.openNativeConsole",
    "-workbench.action.quickOpenView"
],
// 自动代码格式化
"files.insertFinalNewline": true,
"files.trimFinalNewlines": true,
"files.trimTrailingWhitespace": true,
"editor.formatOnSaveMode": "modificationsIfAvailable",
"editor.formatOnSave": true,
// 自动换行
"editor.wordWrap": "bounded",
// 样式
"terminal.integrated.fontSize": 16,
```


### Vi 编辑模式

需要安装支持扩展

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

import GetVscodeExtension, { PreferVscode } from '@theme/unique/GetVscodeExtension';

<p><PreferVscode oneline children={<GetVscodeExtension id="vscodevim.Vim" />} /></p>

:::info 临时禁用的方法

`Ctrl + Shift + P` 输入 `vimt` 回车

:::

<p><LinkButton outline href="https://github.com/daipeihust/im-select" name="设置自动切换输入法" /></p>

### 推荐字体

<LinkButton newTab href="../font" name="见前文" />

### 终端配色

<LinkButton hint='选择一款喜欢的固定终端配色，不会随编辑器主题切换而变化' href="https://glitchbone.github.io/vscode-base16-term/" name="挑选主题" />

### 其它

:::note 如果你在 Linux 中修改过键盘映射

    "keyboard.dispatch": "keyCode",

:::

:::note 自动应答

Windows 环境下，命令行 Ctrl + C 自动应答。
[1.64 版或以上可用](https://code.visualstudio.com/updates/v1_64#_automatic-replies)

```json
"terminal.integrated.autoReplies": {
    "终止批处理操作吗(Y/N)?": "Y\r"
},
```

:::

## 推荐快捷键

:::info 编辑方法：

`Ctrl + K` `Ctrl + S` 点击右上角图标跳转到 JSON 文件

:::

仿 JetBrains IDE，绑定 `Ctrl + W` 键的选择词块

```json
{
  "key": "ctrl+w",
  "command": "editor.action.smartSelect.expand",
  "when": "editorTextFocus"
},
{
  "key": "ctrl+shift+w",
  "command": "editor.action.smartSelect.shrink",
  "when": "editorTextFocus"
},
{
  "key": "ctrl+f4",
  "command": "workbench.action.closeActiveEditor"
}
```
