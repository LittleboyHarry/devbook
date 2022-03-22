---
title: 基础
---

## 推荐添加的自定义命令快捷键

| 作用       | 命令                           | 按键              |
| ---------- | ------------------------------ | ----------------- |
| 打开终端   | gnome-terminal                 | Super + X         |
| 文件管理器 | nautilus                       | Super + E         |
| 设置       | gnome-control-center           | Super + I         |
| 截图 \*    | gnome-screenshot --interactive | Super + Shift + S |

*注：GNOME 42 已移除 `gnome-screenshot` 并强化了 `PrtScr` 截图键的功能、支持录屏

## 笔记本

激活触摸板轻触点击

    gsettings set org.gnome.desktop.peripherals.touchpad tap-to-click true

按下电源键默认会挂起系统，若要改为关机行为：

    gsettings set org.gnome.settings-daemon.plugins.power power-button-action interactive

## 辅助工具

高级 GUI 调节器安装：

    sudo dnf in -y gnome-tweaks && gnome-tweaks &!

类 Windows 注册表编辑器：

    sudo dnf in -y dconf-editor && dconf-editor &!
