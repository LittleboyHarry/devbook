---
title: 配置
---

### 高分辨率屏幕

缩放界面尺寸，请 Edit Custom VM Options 并重启程序:

    -Dide.ui.scale=1.5

### VSCode 集成

安装插件，执行：

    code --install-extension generalov.open-in-editor-vscode

依赖 `scoop install nircmd` 且 `idea` 命令可用（[ToolBox 配置方法](https://www.jetbrains.com/help/idea/working-with-the-ide-features-from-command-line.html#toolbox)），配置 VSCode `settings.json`:

```json
{
    "alt-editor.binary": "cmd",
    "alt-editor.args": "/c \"idea --line {line} --column {column} {filename} && nircmdc win activate class SunAwtFrame || nircmdc win max class SunAwtFrame || exit 0\""
}
```

IDEA 打开 `External Tools` 设置，新建项 `code.cmd` 或 `code` 为程序 `-g $FilePath$:$LineNumber$:$ColumnNumber$` 为参数、关闭其他高级选项，确定后在 `Keymap` 中绑定快捷键 `Alt + Shift + E`

这样按下快捷键就能快速切换编辑器

## 配置

……
