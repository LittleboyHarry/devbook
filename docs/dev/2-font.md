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

### JetBrains Mono

介绍 <https://www.jetbrains.com/zh-cn/lp/mono/> 安装：

import GetPkg from '@theme/GetPkg';

<GetPkg name="goldendict" dnf="jetbrains-mono-fonts" scoop="JetBrains-Mono" />

VSCode 的 `Font Family` 赋值：`JetBrains Mono`

### CascadiaCode NerdFont

微软出品，适用于终端

Nerd Font 支持版下载: https://github.com/ryanoasis/nerd-fonts/releases/latest/download/CascadiaCode.zip

Windows:

    scoop install CascadiaCode-NF

参见关于图标字体 Nerd Font 的[官方介绍](https://www.nerdfonts.com/)

VSCode `settings.json` 设置：

- Linux

      "terminal.integrated.fontFamily": "CaskaydiaCove Nerd Font"

- Windows

      "terminal.integrated.fontFamily": "CaskaydiaCove NF"

Windows Terminal: `settings.json` `.profiles.defaults.fontFace` = `"CaskaydiaCove NF"`

### 等距更纱

优点：中英等宽、可选连体、窄字

```shell
sudo dnf config-manager --add-repo https://download.opensuse.org/repositories/M17N:fonts/openSUSE_Tumbleweed/M17N:fonts.repo
dnf download sarasa-gothic-fonts
sudo dnf config-manager --set-disabled M17N_fonts
sudo dnf in -y sarasa-gothic-fonts-*.rpm
```

Windows:

    winget install 7zip.7zip
    scoop install SarasaGothic-SC

清华镜像：https://mirrors.tuna.tsinghua.edu.cn/github-release/be5invis/Sarasa-Gothic/LatestRelease/ 选**不带** unhinted 的 ttc 版安装

为 VSCode `settings.json` 配置：

```json
"editor.fontFamily": "Sarasa Term SC",
"editor.fontLigatures": true,
```
