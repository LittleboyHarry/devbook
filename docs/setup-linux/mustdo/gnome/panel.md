---
sidebar_position: 11
---

# GNOME 顶栏

## 活动热区

鼠标左上角悬停会触发“概览视图” Hot Corners，按需使用：

    gnome-control-center multitasking &!

## 扩展推荐

### 显示后台托盘图标

非 Ubuntu 系统缺少 [应用后台托盘图标](https://extensions.gnome.org/extension/615/appindicator-support/)?

    ./extension/add-appindicator

### 显示[常用文件夹菜单](https://extensions.gnome.org/extension/8/places-status-indicator/)

```shell
UUID=places-menu@gnome-shell-extensions.gcampax.github.com
gnome-extensions enable $UUID ||
gdbus call --session --dest org.gnome.Shell --object-path /org/gnome/Shell --method org.gnome.Shell.Extensions.InstallRemoteExtension $UUID
```

### 优化系统菜单

[展开二级菜单](https://extensions.gnome.org/extension/2917/bring-out-submenu-of-power-offlogout-button/):

    gdbus call --session --dest org.gnome.Shell --object-path /org/gnome/Shell --method org.gnome.Shell.Extensions.InstallRemoteExtension 'BringOutSubmenuOfPowerOffLogoutButton@pratap.fastmail.fm'

## 调整

**前置依赖扩展： [Just Perfection](https://extensions.gnome.org/extension/3843/just-perfection/)**

### 优化细节

- 降低顶栏对屏幕空间的占用
- 不保留应用菜单
- 新消息出现在右上侧

&nbsp;

    ./extension/add-just-perfection

### [显示窗口列表](https://extensions.gnome.org/extension/4000/babar/)

    ./extension/add-babar

### 顶栏置于底部

:::note 置于底部的 bug

可能导致使用 Vitals 扩展这种具有“超长菜单栏” 无法显示的 bug

:::

```shell
./extension/panel-to-bottom
# 恢复
# ./extension/panel-to-up
```

:::info 或[改顶栏为任务栏](https://extensions.gnome.org/extension/1160/dash-to-panel/)

自动整合程序坞到任务栏中，更像 Windows 风格。一键安装并显示左侧任务栏：

    ./extension/add-dash-to-panel

:::

<!--
### 隐藏标题栏

支持部分应用的 [Pixel Saver](https://extensions.gnome.org/extension/723/pixel-saver/) 扩展，
前置依赖：

    sudo dnf in -y xprop
-->

<!--
### gtk-title-bar

https://extensions.gnome.org/extension/1732/gtk-title-bar/
-->
