---
title: Edge for Linux
tags:
  - linux
---

## 下载安装

安装后意味着你同意微软的软件许可条款 `edge://terms`，
[附：历史版本](https://packages.microsoft.com/yumrepos/edge/)

import {
  PreferPkgMgr,
  ForApt,
  ForDnf,
} from '@theme/PreferPkgMgr'

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

## 设为默认浏览器

**GNOME:**

    gnome-control-center default-apps

**KDE:** 搜索关键词 `compon` 进入设置

## 启动参数

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

    nano +m ~/.local/bin/msedge

格式：不同的参数间以空格分开、可以 ` \` 换行、注意 bash 的解析格式

### GPU 视频加速

提高性能、可避免 CPU 解码大量耗电

    --enable-features=VaapiVideoDecoder,VaapiVideoEncoder

### 是否使用 wayland？

:::note 不使用 wayland

优点：可放大界面缩放比例，启动参数

    --force-device-scale-factor=1.15

缺点：暂时不支持笔记本触摸板手势动作

:::

:::note 使用 wayland

配置方法：

    --enable-features=UseOzonePlatform --ozone-platform=wayland --gtk-version=4

优点：支持笔记本触摸板手势动作

缺点：

- 输入法可用但兼容性有待改进：
  1. GNOME 依赖安装扩展 [kimpanel](https://extensions.gnome.org/extension/261/kimpanel/)
  2. 只能在其他窗口内切换输入法
  3. 若仍无反应，切换或关闭所有浏览器窗口重试
- 界面缩放比率仅为整数，只能通过 “设置 > 外观 > 页面缩放” 补救调整

:::

### 作用于 PWA 应用启动器

也可以添加为自启动脚本，免去每次手动执行命令：

    for f in ~/.local/share/applications/msedge-*.desktop; do sed -i "/Exec/ s#/opt/microsoft/msedge/microsoft-edge#msedge#" "$f" ; done

### 自定义专用启动器

建议了解并使用多配置机制。作者喜欢使用两个配置身份，一个用于日常匿名浏览，另一个用于个人登陆

    cd ~/.local/share/applications/

我们 cp 复制一份 `microsoft-edge.desktop` 并编辑

1. `Name` 为应用名称
2. 为 `Exec=` 添加启动参数，绑定浏览器默认的启动配置名：`Default` `Profile 1` ...

   ```
   --profile-directory="Default"
   ```

3. `Actions=...` 以及下方 `[Desktop Action *]` 描述了动作菜单信息，无需可删


## GPU 图形处理加速

Win Mac 默认已经激活优化特性，但 Linux 需要手动开启：

```
about:flags/#enable-zero-copy
```

重启浏览器完成，详细信息见 `about:gpu`

## 验证

下方命令执行后，如果没有显示，需重新登录：

    echo $PATH | grep --color /.local/bin

随后打开浏览器，我们看看“命令行”里的启动参数是否存在：

    about:vesion

:::tip 总结

本篇教大家如何配置好 Chromium，完成后我们得到了可日常使用的浏览器。

:::
