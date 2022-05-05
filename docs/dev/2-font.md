---
title: 字体
---

本文精选字体来自于：主流技术企业的设计作品、开源社区高认可项目

```powershell
# Windows Scoop 依赖：
scoop bucket add nerd-fonts
```

 <details className="let-details-to-gray">
<summary>KDE wayland 字体查看器问题修复：</summary>

修复：

```
cd ~/.local/share/applications/
cp /usr/share/applications/org.kde.kfontview.desktop .
sed -i "/Exec/ s/=/=env QT_QPA_PLATFORM=xcb /" org.kde.kfontview.desktop
cd -
```

Bug 报告：[链接](https://bugs.kde.org/show_bug.cgi?id=439470)

</details>

### [JetBrains Mono](https://www.jetbrains.com/zh-cn/lp/mono/)

import GetPkg from '@theme/GetPkg';

<GetPkg apt="fonts-jetbrains-mono" dnf="jetbrains-mono-fonts" scoop="JetBrains-Mono" choco="jetbrainsmono" />

VSCode 的 `Font Family` 赋值：`JetBrains Mono`

> 注：对 apt 包管理器而言，
> [Debian 11](https://packages.debian.org/bullseye/source/fonts-jetbrains-mono)
> 和
> [Ubuntu 21.04](https://launchpad.net/ubuntu/+source/fonts-jetbrains-mono)
> 以上版本的系统才有提供

### CascadiaCode

微软出品，适用于终端

VSCode `settings.json` 设置：

```json
"terminal.integrated.fontFamily": "Cascadia Mono",
"editor.fontFamily": "Cascadia Code",
```

 <details className="let-details-to-gray" role="alert">
<summary>Nerd Font 版</summary>

支持更多 Nerd Font 符号的字体版本，
见[官方介绍](https://www.nerdfonts.com/)

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

### 等距更纱

优点：中英等宽、可选连体、窄字

https://mirrorz.org/font/SarasaGothic

为 VSCode `settings.json` 配置：

```json
"editor.fontFamily": "Sarasa Term SC",
"editor.fontLigatures": true,
```
