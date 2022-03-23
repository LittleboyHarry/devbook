---
title: 顶栏
---

## 推荐设置

显示电量百分比、星期几、周数

```shell
cat << END | dconf load /org/gnome/desktop/
[interface]
show-battery-percentage=true
clock-show-weekday=true

[calendar]
show-weekdate=true
END
```

## 微调

无需关机前 60s 等待确认

    gsettings set org.gnome.SessionManager logout-prompt false

<details>
    <summary>喜欢光标左上角悬停激活“概览视图”的特性吗？禁用指令：</summary>

    gsettings set org.gnome.desktop enable-hot-corners false

</details>

## 扩展

### [托盘图标](https://extensions.gnome.org/extension/615/appindicator-support/)

AppIndicator and KStatusNotifierItem Support

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
```

:::caution 把顶栏置于屏幕下方

    dconf write /org/gnome/shell/extensions/just-perfection/top-panel-position 1

BUG: 可能导致“顶栏超长菜单栏无法显示”，慎调

:::

### 隐藏标题栏

安装依赖

    sudo dnf in -y xprop

支持部分应用的 Pixel Saver 扩展: https://extensions.gnome.org/extension/723/pixel-saver/

<!--
### gtk-title-bar

https://extensions.gnome.org/extension/1732/gtk-title-bar/
-->

### 其他

常用文件夹菜单

    gnome-extensions enable places-menu@gnome-shell-extensions.gcampax.github.com
