---
title: JetBrains 配置
sidebar_position: 1
---

<details className="let-details-to-gray">
  <summary>高分辨率屏幕，界面太小？</summary>

缩放界面尺寸，编辑后重启应用生效：

    -Dide.ui.scale=1.5

<img
src={require('./figures/conf-0.png').default}
alt="Edit Custom VM Options"
/>

</details>

import ClickToOpenImage from '@theme/ClickToOpenImage';

 <ClickToOpenImage>

<img
src={require('./figures/conf-1.png').default}
alt="config entrypoint"
/>

<img
src={require('./figures/conf-2.png').default}
alt="mouse wheel"
/>

<img
src={require('./figures/conf-3.png').default}
alt="trail"
/>

<!--
<img
src={require('./figures/conf-4.png').default}
alt="widescreen"
/>
-->

<img
src={require('./figures/conf-5.png').default}
alt="git stage"
/>

</ClickToOpenImage>

<br/>

以及 HTTP Proxy，如需的话

<details className="let-details-to-gray">
  <summary>与 VSCode 集成</summary>

依赖：

- idea 已添加到 PATH 环境变量
  （[ToolBox 配置方法](https://www.jetbrains.com/help/idea/working-with-the-ide-features-from-command-line.html#toolbox)）
- nircmd (Windows)

      scoop install nircmd

- <GetVscExt id="generalov.open-in-editor-vscode" msOnly/>

VSCode `settings.json` (Windows):

```json
"alt-editor.binary": "cmd",
"alt-editor.args": "/c \"idea --line {line} --column {column} {filename} && nircmdc win activate class SunAwtFrame || nircmdc win max class SunAwtFrame || exit 0\"",
```

Linux 可用 wmctrl 或 xdotool

<img
src={require('./figures/vscode-cfg.png').default}
alt="config entrypoint"
/>

参数：

    -g $FilePath$:$LineNumber$:$ColumnNumber$

在 `Keymap` 中绑定快捷键 `Alt + Shift + E`，这样按下快捷键就能快速切换编辑器

</details>

import GetVscExt from '@theme/GetVscExt';
