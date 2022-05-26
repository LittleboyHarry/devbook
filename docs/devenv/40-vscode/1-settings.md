---
title: VSC 配置
---

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

编辑方法：`Ctrl + K` `Ctrl + S` 点击右上角图标跳转到 JSON 文件

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
