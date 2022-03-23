---
title: 配置
---

`Ctrl + Shift + P` 输入 `setjs` 可以打开配置页面

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
    "-workbench.action.terminal.openNativeConsole"
],
// 自动代码格式化
"files.insertFinalNewline": true,
"files.trimFinalNewlines": true,
"files.trimTrailingWhitespace": true,
"editor.formatOnSaveMode": "modificationsIfAvailable",
"editor.formatOnSave": true,
```

<details>
    <summary>如果你在 Linux 中修改过键盘映射</summary>

    "keyboard.dispatch": "keyCode",

</details>

## 修改默认 Shell

`Ctrl + Shift + P` 输入关键词 `terspro` 选择

## 推荐热键

`Ctrl + Shift + P` 输入 `keysjson` 打开组合键可配置页

`Ctrl + W` 选择词块：

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

## Windows

命令行 Ctrl + C 自动应答，
[技术说明](https://code.visualstudio.com/updates/v1_64#_automatic-replies)

```json
"terminal.integrated.autoReplies": {
    "终止批处理操作吗(Y/N)?": "Y\r"
},
```
