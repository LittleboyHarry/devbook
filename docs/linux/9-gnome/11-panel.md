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

## 扩展推荐

### just-perfection

安装地址: https://extensions.gnome.org/extension/3843/just-perfection/ 安装后可微调各种细节，推荐：

使原在中间弹出的通知信息固定在右边位置

    dconf write /org/gnome/shell/extensions/just-perfection/notification-banner-position 2

隐藏作用不大的应用菜单

    dconf write /org/gnome/shell/extensions/just-perfection/app-menu false

自动切换至后台新产生的窗口

    dconf write /org/gnome/shell/extensions/just-perfection/window-demands-attention-focus true

:::caution 慎设（可选）

```shell
# 把顶栏置于屏幕下方（我这边实测会导致“顶栏超长菜单栏无法显示”，慎设）
dconf write /org/gnome/shell/extensions/just-perfection/top-panel-position 1
```

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

充分利用剩余空间：

- 硬件信息: https://extensions.gnome.org/extension/1460/vitals/
- 应用栏增强: https://extensions.gnome.org/extension/4000/babar

系统菜单增强：

- 电源菜单按钮：https://extensions.gnome.org/extension/2917/bring-out-submenu-of-power-offlogout-button/
