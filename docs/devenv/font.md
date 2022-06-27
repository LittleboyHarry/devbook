---
sidebar_position: 7
---

# 字体

本文精选字体来自于：主流技术企业的设计作品、开源社区高认可项目。逼站科普：

<BPlayer id="BV19r4y1W74d" />

## 出版字体

### Noto Sans CJK SC

推荐使用思源宋体，Windows 下载链接:（ 又名 Noto Font, 来自清华镜像站 ）

- [通用字体集](https://mirrors.tuna.tsinghua.edu.cn/github-release/googlefonts/noto-cjk/LatestRelease/03_NotoSansCJK-OTC.zip)
- [等宽版](https://mirrors.tuna.tsinghua.edu.cn/github-release/googlefonts/noto-cjk/LatestRelease/13_NotoSansMonoCJKsc.zip)

## 编程字体

### Cascadia Code

<GetPkg apt="fonts-cascadia-code" dnf="cascadia-code-fonts" pacman="ttf-cascadia-code" />

用途：终端命令行、编程

微软出品的 Windows 终端内置默认字体，Linux 安装：

 <details>
<summary>Nerd Font 版</summary>

<GetPkg scoop="CascadiaCode-NF" choco="cascadia-code-nerd-font" />

支持更多 Nerd Font 符号的字体版本，
见[官方介绍](https://www.nerdfonts.com/)

```powershell
# Scoop 依赖：
scoop bucket add nerd-fonts
```

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

### [JetBrains Mono](https://www.jetbrains.com/zh-cn/lp/mono/)

<GetPkg
apt="fonts-jetbrains-mono"
dnf="jetbrains-mono-fonts"
scoop="JetBrains-Mono"
choco="jetbrainsmono"
pacman="ttf-jetbrains-mono"
/>

用途：编程

> 注：对 apt 包管理器而言，
> [Debian 11](https://packages.debian.org/bullseye/source/fonts-jetbrains-mono)
> 和
> [Ubuntu 21.04](https://launchpad.net/ubuntu/+source/fonts-jetbrains-mono)
> 以上版本的系统，仓库源才开始提供

<br/>

### 等距更纱

<GetPkg pacman="ttf-sarasa-gothic" />

用途：中英文排版、编程

优点：中英等宽、可选连体、窄字

国内镜像站下载：https://mirrorz.org/font/SarasaGothic 推荐选择 ttc 版本

## VSCode 设置

综合设置：

```json
"terminal.integrated.fontFamily": "'Cascadia Mono','Noto Sans CJK SC'",
"editor.fontFamily": "'Cascadia Code','Noto Sans CJK SC'",
"editor.fontLigatures": true,
```

等距更纱：

```json
"editor.fontFamily": "Sarasa Term SC",
```

import GetPkg from '@theme/GetPkg';
import BPlayer from '@theme/BPlayer';
