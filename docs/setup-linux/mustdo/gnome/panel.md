---
title: GNOME 顶栏
sidebar_position: 11
---

## 优化

显示电量百分比、星期几、周数：

```shell
cat << END | dconf load /org/gnome/desktop/
[interface]
show-battery-percentage=true
clock-show-weekday=true

[calendar]
show-weekdate=true
END
```

## 活动热区

鼠标左上角悬停会触发“概览视图” Hot Corners，按需使用：

    gnome-control-center multitasking &!

## 扩展推荐

:::note 非 Ubuntu 系统需要显示的[托盘图标](https://extensions.gnome.org/extension/615/appindicator-support/)

    gnome/ext/apptray

:::

:::note 调整电源菜单按钮

从二级菜单中移出的扩展：
[Bring Out Submenu Of Power Off Logout Button](https://extensions.gnome.org/extension/2917/bring-out-submenu-of-power-offlogout-button/)

    gnome/ext/showsysbtn

:::

:::note 常用文件夹菜单

[Places Status Indicator](https://extensions.gnome.org/extension/8/places-status-indicator/)

    gnome/ext/showplaces

:::

:::note 调整细节用

[Just Perfection](https://extensions.gnome.org/extension/3843/just-perfection/)
可调各种细节，推荐配置：

    cn/gnome-justopti

:::

:::info 转顶栏为任务栏

实际上，我用了 [dash-to-panel](https://extensions.gnome.org/extension/1160/dash-to-panel/) 提供的任务栏后，
后面的很多程序坞相关的扩展和配置就不需要了

:::

## 置于屏幕底部

依赖扩展：

- [Just Perfection](https://extensions.gnome.org/extension/3843/just-perfection/)，
- （可选）热区强化 [Custom Hot Corners Extended](https://extensions.gnome.org/extension/4167/custom-hot-corners-extended/)

      gnome/ext/bottompanel

:::note 置于底部的缺点

可能导致使用 Vitals 扩展这种具有“超长菜单栏” 无法显示的 bug

:::

 <details className="let-details-to-gray">
<summary>恢复方法</summary>

    gnome/ext/bottompanel-recover

</details>

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
