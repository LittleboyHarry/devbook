---
sidebar_position: 3
---

# 选择桌面环境

仅推荐 GNOME 或 KDE，作者认为其它桌面环境技术不成熟、体验不友好

笔记本电脑推荐使用 GNOME，其优点：

- 简单易用、操作逻辑近似 MacOS
- 触摸板支持
- Wayland 桌面优化好

台式机推荐使用 KDE，其优点：

- 操作逻辑近似于 Windows
- 软件生态丰富，集成 `Yakuake`, `Kate`, `Dolphin` 等开发者实用工具
- 面板组件功能丰富、高度可自定义化

综合比较：

<!--
基本概念：

- 顶栏 Panel
- 任务栏 Dash
- 概览视图 Overview
- 工作区 Workspace
 -->

- KDE 优点:
  - 无顶栏，不占用小尺寸屏幕的空间
  - 内置功能丰富，基本不需要额外安装插件折腾
- GNOME 优点:
  - Ubuntu, RHEL 发行版原生支持
  - 好用的触摸板手势与工作区操作
  - Wayland 技术的先驱，支持度高
- GNOME 缺点：原生功能太少，需要手动安装一些扩展
- [社区参考意见](https://www.toutiao.com/article/6770188534637658636/)
- 从发行版上看：
  - KDE:
    更适合用于紧密更新的发行版，如 Arch, OpenSUSE Leap。
    能获得最新的缺陷修复、有益的新特性。
  - GNOME:
    更适合用于版本稳定、不常更新的发行版，如 Debian Stable, Ubuntu LTS。
    GNOME 版本更新可能会导致旧插件失效，且经常改版、令人难以适应。
