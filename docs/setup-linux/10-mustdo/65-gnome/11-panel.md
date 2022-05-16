---
title: GNOME 顶栏
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

推荐的功能强化扩展：[Custom Hot Corners Extended](https://extensions.gnome.org/extension/4167/custom-hot-corners-extended/)

## 扩展推荐

:::note 非 Ubuntu 系统需要显示的[托盘图标](https://extensions.gnome.org/extension/615/appindicator-support/)

作者偏好：

```shell
cat << END | dconf load /org/gnome/shell/extensions/appindicator/
[/]
icon-size=24
tray-pos='left'
END
```

:::

:::note 调整电源菜单按钮

从二级菜单中移出的扩展：
[Bring Out Submenu Of Power Off Logout Button](https://extensions.gnome.org/extension/2917/bring-out-submenu-of-power-offlogout-button/)

:::

:::note 常用文件夹菜单

[Places Status Indicator](https://extensions.gnome.org/extension/8/places-status-indicator/)
，Fedora 自带的激活方法：

    gnome-extensions enable places-menu@gnome-shell-extensions.gcampax.github.com

:::

:::note 调整细节用

[Just Perfection](https://extensions.gnome.org/extension/3843/just-perfection/)
可调各种细节，推荐配置：

```shell
# 使原在中间弹出的通知信息固定在右边位置
dconf write /org/gnome/shell/extensions/just-perfection/notification-banner-position 2

# 隐藏作用不大的应用菜单
dconf write /org/gnome/shell/extensions/just-perfection/app-menu false

# 自动切换至后台新产生的窗口
dconf write /org/gnome/shell/extensions/just-perfection/window-demands-attention-focus true

# 调低顶栏对屏幕空间的占用
dconf write /org/gnome/shell/extensions/just-perfection/panel-size 36
```

:::

:::info 转顶栏为任务栏

实际上，我用了 [dash-to-panel](https://extensions.gnome.org/extension/1160/dash-to-panel/) 提供的任务栏后，
后面的很多程序坞相关的扩展和配置就不需要了

:::

## 置于屏幕底部

依赖扩展：[Just Perfection](https://extensions.gnome.org/extension/3843/just-perfection/)，
推荐扩展：[Custom Hot Corners Extended](https://extensions.gnome.org/extension/4167/custom-hot-corners-extended/)

```shell
dconf write /org/gnome/shell/extensions/just-perfection/top-panel-position 1
dconf write /org/gnome/shell/extensions/just-perfection/notification-banner-position 4
dconf write /org/gnome/desktop/enable-hot-corners false
dconf write /org/gnome/shell/extensions/dash-to-dock/show-apps-at-top true
dconf write /org/gnome/shell/extensions/custom-hot-corners-extended/monitor-0-bottom-left-0/action "'toggle-overview'"
dconf write /org/gnome/shell/extensions/custom-hot-corners-extended/monitor-0-bottom-right-0/action "'open-panel-aggregate-menu'"
gnome-extensions list | grep -q babar@fthx && gnome-extensions disable babar@fthx
```

:::note 置于底部的缺点

可能导致使用 Vitals 扩展这种具有“超长菜单栏” 无法显示的 bug

:::

 <details className="let-details-to-gray">
<summary>恢复方法</summary>

```shell
dconf write /org/gnome/shell/extensions/just-perfection/top-panel-position 0
dconf write /org/gnome/shell/extensions/just-perfection/notification-banner-position 2
dconf reset /org/gnome/shell/extensions/dash-to-dock/show-apps-at-top
dconf reset /org/gnome/shell/extensions/custom-hot-corners-extended/monitor-0-bottom-left-0/action
dconf reset /org/gnome/shell/extensions/custom-hot-corners-extended/monitor-0-bottom-right-0/action
dconf reset /org/gnome/shell/extensions/custom-hot-corners-extended/monitor-0-top-left-0/action
gnome-extensions list | grep -q babar@fthx && gnome-extensions enable babar@fthx
```

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
