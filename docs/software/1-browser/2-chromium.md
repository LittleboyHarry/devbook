---
title: 安装 Chromium
---

## 特点

优点：

- 0 捆绑 0 后台
- 功能简洁、标准意上手
- 软件更新频率快
- 电量与性能优于火狐的 Gecko
- 更契合前端开发工程师
- 支持安装第三方插件

问题：

- 不支持谷歌同步服务

## 安装

<GetPkg name="chromium" pacman dnf />

## 设为默认浏览器

**GNOME:**

    gnome-control-center default-apps

**KDE:** 搜索关键词 `compon` 进入设置

## 启动参数

编辑：

    ~/.config/chromium-flags.conf

<!--
强化功能注入：

```shell
mkdir -p ~/.local/share/applications && cd ~/.local/share/applications
cp /usr/share/applications/chromium.desktop .
sed -i "/Exec=/ s#/usr/bin/microsoft-edge-stable#msedge#" chromium.desktop
mkdir -p ~/.local/bin
cd -
cd ~/.local/bin
echo -e '#!/bin/bash\n\n/usr/bin/microsoft-edge-stable "$@"' > msedge
chmod +x msedge
cd -
```
-->

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

    --enable-features=UseOzonePlatform
    --ozone-platform=wayland
    --gtk-version=4

优点：支持笔记本触摸板手势动作

缺点：

- 输入法可用但兼容性有待改进：
  1. GNOME 依赖安装扩展 [kimpanel](https://extensions.gnome.org/extension/261/kimpanel/)
  2. 只能在其他窗口内切换输入法
  3. 若仍无反应，切换或关闭所有浏览器窗口重试
- 界面缩放比率仅为整数，只能通过 “设置 > 外观 > 页面缩放” 补救调整

:::

### 自定义专用启动器

建议了解并使用多配置机制。作者喜欢使用两个配置身份，一个用于日常匿名浏览，另一个用于个人登陆

```
printf "new chromium desktop file name: " && read filename
cp /usr/share/applications/chromium.desktop ~/.local/share/applications/$filename.desktop
xdg-open ~/.local/share/applications/$filename.desktop
```

编辑方法：

1. `Name` 为自定义应用名称
2. 为 `Exec=` 添加启动参数，绑定浏览器默认的启动配置名：`Default` `Profile 1` ...

   ```
   --profile-directory="Default"
   ```

3. `Actions=...` 以及下方 `[Desktop Action *]` 描述了动作菜单信息，无需可删


## GPU 图形处理加速

Win Mac 默认已经激活优化特性，但 Linux 需要手动开启：

```
about:flags/#enable-gpu-rasterization
```

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

本篇教大家如何解锁浏览器的常用功能。通过上述配置后，我们得到了与 Win/Mac 体验相当的 Edge 浏览器。

:::
