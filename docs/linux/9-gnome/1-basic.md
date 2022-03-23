---
title: 基础
---

## 笔记本

激活触摸板轻触点击

    gsettings set org.gnome.desktop.peripherals.touchpad tap-to-click true

按下电源键默认会挂起系统，若要改为关机行为：

    gsettings set org.gnome.settings-daemon.plugins.power power-button-action interactive

## 推荐添加的自定义命令快捷键

<div className="AutoSelectedTableContainer">

| 作用       | 命令                           | 按键              |
| ---------- | ------------------------------ | ----------------- |
| 打开终端   | gnome-terminal                 | Super + X         |
| 文件管理器 | nautilus                       | Super + E         |
| 设置       | gnome-control-center           | Super + I         |
| 截图 \*    | gnome-screenshot --interactive | Super + Shift + S |

</div>

*注：GNOME 42 已移除 `gnome-screenshot` 并强化了 `PrtScr` 截图键的功能、支持录屏
