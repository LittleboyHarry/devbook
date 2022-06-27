---
sidebar_position: 3
tags:
  - linux
---

# Chromium for Linux

## GPU 视频加速

提高性能、可避免 CPU 解码大量耗电

    --enable-features=VaapiVideoDecoder,VaapiVideoEncoder

## 是否使用 wayland？

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

## GPU 图形处理加速

Win Mac 默认已经激活优化特性，但 Linux 需要手动开启：

    about:flags/#enable-zero-copy

&nbsp;

    about:flags/#enable-gpu-rasterization

重启浏览器完成，详细信息见 `about:gpu`

## 自定义专用启动器

建议了解并使用多配置机制。作者喜欢使用两个配置身份，一个用于日常匿名浏览，另一个用于个人登陆

    cd ~/.local/share/applications/

我们 cp 复制一份 `chromium.desktop` 或 `microsoft-edge.desktop` 并编辑

1. `Name` 为应用名称
2. 为 `Exec=` 添加启动参数，绑定浏览器默认的启动配置名：`Default` `Profile 1` ...

   ```
   --profile-directory="Default"
   ```

3. `Actions=...` 以及下方 `[Desktop Action *]` 描述了动作菜单信息，无需可删

## 验证

下方命令执行后，如果没有显示，需重新登录：

    echo $PATH | grep --color /.local/bin

随后打开浏览器，我们看看“命令行”里的启动参数是否存在：

    about:vesion

:::tip 总结

本篇教大家如何配置好 Chromium，完成后我们得到了可日常使用的浏览器。

:::

import GetPkg from '@theme/GetPkg';
import {
PreferPkgMgr,
ForApt,
ForDnf,
} from '@theme/PreferPkgMgr'
