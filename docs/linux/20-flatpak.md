## 安装

import GetPkg from '@theme/GetPkg';

<GetPkg name="flatpak" apt dnf pacman />

## 添加源

    flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

## 推荐软件

对依赖复杂、无需频繁更新的软件，可以选择 Flatpak 来安装。

### 视频播放

VLC

    flatpak install flathub org.videolan.VLC

### 图像编辑

GIMP

    flatpak install flathub org.gimp.GIMP

### 视频剪辑

Kdenlive

    flatpak install flathub org.kde.kdenlive
