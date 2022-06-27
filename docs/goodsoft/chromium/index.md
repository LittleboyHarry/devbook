---
sidebar_position: 3
tags:
  - linux
---

# 下载安装

## 原版 Chromium

优点：

- 纯净无内置广告服务
- 功能简洁、标准意上手
- 软件更新频率快
- 电量与性能优于火狐的 Gecko
- 更契合前端开发工程师
- 支持安装第三方插件

问题：

- 不支持 h264 B站视频编码
- 不支持谷歌同步服务

<GetPkg name="chromium" pacman dnf />

Windows (PowerShell):

```powershell
Set-ExecutionPolicy RemoteSigned -Scope Process
iwr https://gitcode.net/lbh/ohmycrx/-/raw/master/install-chromium.ps1 | iex
```

## 设为默认浏览器

**Windows:** 打开浏览器后见提示

**GNOME:**

    gnome-control-center default-apps

**KDE:** 搜索关键词 `compon` 进入设置

## 高级配置

:::note 开启标签页鼠标悬浮浏览

```
about:flags/#tab-hover-card-images
```

:::

## 微软浏览器

安装后意味着你同意微软的软件许可条款 `edge://terms`，
[附：历史版本](https://packages.microsoft.com/yumrepos/edge/)

 <PreferPkgMgr dnf apt>
<ForApt>

```shell
## Setup
sudo apt install curl -y
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
sudo install -o root -g root -m 644 microsoft.gpg /usr/share/keyrings/
sudo sh -c 'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft.gpg] https://packages.microsoft.com/repos/edge stable main" > /etc/apt/sources.list.d/microsoft-edge-stable.list'
sudo rm microsoft.gpg

## Install
sudo apt update
sudo apt install -y microsoft-edge-stable
sudo rm /etc/apt/sources.list.d/microsoft-edge.list
```

</ForApt>
<ForDnf>

```shell
cd $(xdg-user-dir DOWNLOAD)
wget -c --content-disposition "https://go.microsoft.com/fwlink/?linkid=2149137"
sudo dnf in -y microsoft-edge-stable-*.rpm
cd -
```

</ForDnf>
</PreferPkgMgr>

:::note 设置启动参数

强化功能注入：

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

说明：
`msedge` 为具有启动参数的程序缩写名，可在 Shell 中执行 ( 原程序名为 `microsoft-edge` )

使用：启动参数修改方法，即编辑可执行文件

    nano -m ~/.local/bin/msedge

格式：不同的参数间以空格分开、可以 ` \` 换行、注意 bash 的解析格式

作用于 PWA 应用启动器：
（可以添加为自启动脚本，免去每次手动执行命令）

    for f in ~/.local/share/applications/msedge-*.desktop; do sed -i "/Exec/ s#/opt/microsoft/msedge/microsoft-edge#msedge#" "$f" ; done

:::

:::note 标签休眠机制

优化性能体验，简介：https://www.cnbeta.com/articles/tech/1033165.htm

:::

import GetPkg from '@theme/GetPkg';
import {
PreferPkgMgr,
ForApt,
ForDnf,
} from '@theme/PreferPkgMgr'
