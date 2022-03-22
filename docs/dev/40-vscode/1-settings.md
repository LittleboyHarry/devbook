---
title: 配置
---

`Ctrl + Shift + P` 输入 `setjs` 可以打开配置页面

<details>
    <summary>如果你在 Linux 中修改过键盘映射</summary>

    "keyboard.dispatch": "keyCode",

</details>

关闭遥测

    "telemetry.telemetryLevel": "off",

Ctrl + 鼠标滚轮缩放字体

    "editor.mouseWheelZoom": true,

Git 优化

    "git.rebaseWhenSync": true,

终端快捷键冲突缓解

```json
"terminal.integrated.commandsToSkipShell": [
    "-workbench.action.quickOpen",
    "-workbench.action.terminal.openNativeConsole"
],
```

自动代码格式化

```json
"files.insertFinalNewline": true,
"files.trimFinalNewlines": true,
"files.trimTrailingWhitespace": true,
"editor.formatOnSaveMode": "modificationsIfAvailable",
"editor.formatOnSave": true,
```

## `keybindings.json` 推荐键位

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

`Ctrl + C` 自动条件响答，[技术说明](https://code.visualstudio.com/updates/v1_64#_automatic-replies)

```json
"terminal.integrated.autoReplies": {
    "终止批处理操作吗(Y/N)?": "Y\r"
},
```
