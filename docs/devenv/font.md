---
title: 字体
sidebar_position: 7
---

本文精选字体来自于：主流技术企业的设计作品、开源社区高认可项目。逼站科普：

<BPlayer id="BV19r4y1W74d" />

### [JetBrains Mono](https://www.jetbrains.com/zh-cn/lp/mono/)

用途：编程

<GetPkg
apt="fonts-jetbrains-mono"
dnf="jetbrains-mono-fonts"
scoop="JetBrains-Mono"
choco="jetbrainsmono"
pacman="ttf-jetbrains-mono"
/>

为 VSCode `settings.json` 配置：

```json
"editor.fontFamily": "JetBrains Mono",
"editor.fontLigatures": true,
```

> 注：对 apt 包管理器而言，
> [Debian 11](https://packages.debian.org/bullseye/source/fonts-jetbrains-mono)
> 和
> [Ubuntu 21.04](https://launchpad.net/ubuntu/+source/fonts-jetbrains-mono)
> 以上版本的系统，仓库源才开始提供

<br/>

### CascadiaCode

用途：终端命令行、编程

微软出品的 Windows 终端内置默认字体，Linux 安装：

<GetPkg apt="fonts-cascadia-code" dnf="cascadia-code-fonts" pacman="ttf-cascadia-code" />

VSCode `settings.json` 设置：

```json
"terminal.integrated.fontFamily": "Cascadia Mono",
"editor.fontFamily": "Cascadia Code",
"editor.fontLigatures": true,
```

 <details className="let-details-to-gray" role="alert">
<summary>Nerd Font 版</summary>

支持更多 Nerd Font 符号的字体版本，
见[官方介绍](https://www.nerdfonts.com/)

```powershell
# Scoop 依赖：
scoop bucket add nerd-fonts
```

<GetPkg scoop="CascadiaCode-NF" choco="cascadia-code-nerd-font" />

[或手动下载](https://github.com/ryanoasis/nerd-fonts/releases/latest/download/CascadiaCode.zip)

VSCode `settings.json` 设置：

```json
// Linux:
"terminal.integrated.fontFamily": "CaskaydiaCove Nerd Font"
// Windows:
"terminal.integrated.fontFamily": "CaskaydiaCove NF"
```

Windows Terminal: `settings.json` > `.profiles.defaults.fontFace`

</details>

<br/>

### 等距更纱

用途：中英文排版、编程

优点：中英等宽、可选连体、窄字

下载：https://mirrorz.org/font/SarasaGothic 推荐选择 ttc 版本

<GetPkg pacman="ttf-sarasa-gothic" />

为 VSCode `settings.json` 配置：

```json
"editor.fontFamily": "Sarasa Term SC",
"editor.fontLigatures": true,
```

import GetPkg from '@theme/GetPkg';
import BPlayer from '@theme/BPlayer';