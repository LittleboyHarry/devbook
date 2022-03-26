---
title: 顶栏
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

## 扩展推荐

### 托盘图标

非 Ubuntu 系统请安装 [支持扩展](https://extensions.gnome.org/extension/615/appindicator-support/)，作者偏好：

```shell
cat << END | dconf load /org/gnome/shell/extensions/appindicator/
[/]
icon-size=24
tray-pos='left'
END
```

### [Just Perfection](https://extensions.gnome.org/extension/3843/just-perfection/)

可调各种细节，推荐：

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

:::caution 把顶栏置于屏幕下方

    dconf write /org/gnome/shell/extensions/just-perfection/top-panel-position 1

BUG: 可能导致“顶栏超长菜单栏无法显示”，慎调

:::

### Hot Corners

鼠标左上角悬停会触发“概览视图”

<details className="let-details-to-gray">
    <summary>Fedora 初始已激活该功能，禁用命令：</summary>

    gsettings set org.gnome.desktop enable-hot-corners false

</details>

<details className="let-details-to-gray">
    <summary>Ubuntu 初始已屏蔽该功能，启用需要上述 Just Perfection 插件：</summary>

    dconf write /org/gnome/shell/extensions/just-perfection/hot-corner true

</details>

### 隐藏标题栏

安装依赖

    sudo dnf in -y xprop

支持部分应用的 Pixel Saver 扩展: https://extensions.gnome.org/extension/723/pixel-saver/

<!--
### gtk-title-bar

https://extensions.gnome.org/extension/1732/gtk-title-bar/
-->

### 其它

常用文件夹菜单

    gnome-extensions enable places-menu@gnome-shell-extensions.gcampax.github.com
