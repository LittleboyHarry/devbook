---
title: 进阶配置
---

import GetPkg from '@theme/GetPkg';

## AppImage 集成

[rpm 下载](https://github.com/TheAssassin/AppImageLauncher/releases/latest#:~:text=x86_64.rpm)
|
[deb 下载](https://github.com/TheAssassin/AppImageLauncher/releases/latest#:~:text=bionic_amd64.deb)

## 外界显示器亮度

    sudo dnf in -y ddcutil

技术原理：DDC/CI 协议。市面多数显示器均支持该协议，其中部分显示器需要打开 OSD 调节菜单激活该协议。

配置免 root 权限：https://github.com/daitj/gnome-display-brightness-ddcutil#setup-ddcutil

GNOME 扩展：https://extensions.gnome.org/extension/2645/brightness-control-using-ddcutil/

```shell
# 获取亮度，代号 10
ddcutil getvcp 10
# 设置亮度，0 ～ 100
ddcutil setvcp 10 0

# 设置对比度
ddcutil setvcp 12 100
```

## D-Bus 信号调试

静态分析：

<GetPkg name="d-feet" apt dnf />

动态分析：

<GetPkg name="bustle" apt dnf />
