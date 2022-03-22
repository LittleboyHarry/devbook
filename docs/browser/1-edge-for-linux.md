---
title: 用于 Linux 的 Edge
tags:
  - linux
---

Linux 环境推荐浏览器

## 安装

```shell
cd $(xdg-user-dir DOWNLOAD)
wget -c --content-disposition "https://go.microsoft.com/fwlink/?linkid=2149137"
sudo dnf in -y microsoft-edge-stable-*.rpm
cd -
```

安装后的同时代表你同意微软的软件许可条款: edge://terms/

其他版本: https://packages.microsoft.com/yumrepos/edge/

## 设置默认浏览器

GNOME:

    gnome-control-center default-apps

KDE: 搜索关键词 `compon` 进入设置

## 基本配置

```shell
mkdir -p ~/.local/share/applications
cd ~/.local/share/applications
cp /usr/share/applications/microsoft-edge.desktop .
sed -i "/Exec=/ s#/usr/bin/microsoft-edge-stable#msedge#" microsoft-edge.desktop
mkdir -p ~/.local/bin
cd -
cd ~/.local/bin
echo -e '#!/bin/bash\n\n/usr/bin/microsoft-edge-stable "$@"' > msedge
chmod +x msedge
cd -
```

作用：
- `msedge` 为程序的缩写名，在 Shell 中输入以启动。原程序名为 `microsoft-edge`
- 修改 `~/.local/bin/msedge` 来添加默认的启动参数。
  不同的参数间以空格分开、可以 ` \` 换行、注意 bash 的解析格式

### 激活 GPU 视频加速

提高性能、可避免 CPU 解码大量耗电

    --enable-features=VaapiVideoDecoder,VaapiVideoEncoder

输入: `about:gpu` 看到 `Video Decode: Hardware accelerated` 字样，说明配置成功

### 界面缩放

为高分辨率屏设置缩放比例，开始菜单内右键应用编辑、添加启动参数：

    --force-device-scale-factor=1.15

### 应用上述配置于 PWA 程序

    for f in ~/.local/share/applications/msedge-*.desktop; do sed -i "/Exec/ s#/opt/microsoft/msedge/microsoft-edge#msedge#" "$f" ; done

<!--
互斥 bug: https://bugs.chromium.org/p/chromium/issues/detail?id=910797
enable-features=UseOzonePlatform --ozone-platform=wayland
-->
