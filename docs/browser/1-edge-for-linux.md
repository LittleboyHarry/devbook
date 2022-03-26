---
title: 在 Linux 中的 Edge
tags:
  - linux
---

Linux 环境推荐浏览器

## 安装

安装后意味着你同意微软的软件许可条款 `edge://terms`

Debian:

```shell
## Setup
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
sudo install -o root -g root -m 644 microsoft.gpg /usr/share/keyrings/
sudo sh -c 'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft.gpg] https://packages.microsoft.com/repos/edge stable main" > /etc/apt/sources.list.d/microsoft-edge-stable.list'
sudo rm microsoft.gpg
## Install
sudo apt update
sudo apt install microsoft-edge-stable
sudo rm /etc/apt/sources.list.d/microsoft-edge-stable.list
```

RPM:

```shell
cd $(xdg-user-dir DOWNLOAD)
wget -c --content-disposition "https://go.microsoft.com/fwlink/?linkid=2149137"
sudo dnf in -y microsoft-edge-stable-*.rpm
cd -
```

附：[更多历史版本 ...](https://packages.microsoft.com/yumrepos/edge/)

## 设为默认浏览器

GNOME:

    gnome-control-center default-apps

KDE: 搜索关键词 `compon` 进入设置

## 初始化

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

`msedge` 为程序的缩写名，在 Shell 中输入以启动。原程序名为 `microsoft-edge`。
若要添加默认的启动参数：

    xdg-open ~/.local/bin/msedge

不同的参数间以空格分开、可以 ` \` 换行、注意 bash 的解析格式

:::caution 可能要重新登录

    echo $PATH | grep --color /.local/bin

如果没有显示，请重新登录

:::

### GPU 视频加速

提高性能、可避免 CPU 解码大量耗电

    --enable-features=VaapiVideoDecoder,VaapiVideoEncoder

输入: `about:gpu` 看到 `Video Decode: Hardware accelerated` 字样，说明配置成功

<details className="let-details-to-gray">
  <summary>高分辨率屏，界面太小？</summary>

添加启动参数：

    --force-device-scale-factor=1.15

</details>

### GPU 图形加速

Win Mac 默认已经激活优化特性，但 Linux 需要手动开启：

```
about:flags/#enable-gpu-rasterization
```

```
about:flags/#enable-zero-copy
```

重启浏览器完成，详细信息见 `about:gpu`

## 多用户配置

建议添加多一个配置，用于个人日常网站登陆，另一个用于匿名浏览

## 其它

使启动参数作用于 PWA 程序：有需要还可以添加为自启动脚本

    for f in ~/.local/share/applications/msedge-*.desktop; do sed -i "/Exec/ s#/opt/microsoft/msedge/microsoft-edge#msedge#" "$f" ; done

:::info 自定义专用启动器

cd ` ~/.local/share/applications/` 中，
复制一份 `microsoft-edge.desktop` 并编辑

- `Name` 为应用名称
- 为 `Exec=` 添加启动参数 `--profile-directory="Default"` 或 `Profile n`
  以绑定浏览器默认的启动配置
- `[Desktop Action *]` 条目记录了子菜单信息，无需可删

:::

<!--
互斥 bug: https://bugs.chromium.org/p/chromium/issues/detail?id=910797
enable-features=UseOzonePlatform --ozone-platform=wayland
-->
