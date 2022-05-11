---
title: KDE 推荐
---

import GetPkg from '@theme/GetPkg';

## 自动登陆

搜索关键词 `sddm` 点击“行为设置”按钮可激活自动登陆

缺点：不支持 kwallet 密码本自动解锁

## 来自 GNOME 的软件

<!--
### 特殊字符与 emoji 检索器

<GetPkg name="gnome-characters" apt dnf pacman/>
-->

### 深色主题

gtk 标准深色主题：( GNOME >= 42

    sudo apt install -y gnome-themes-standard

非 GNOME：Arc

    sudo dnf in -y arc

### 磁盘占用分析

<GetPkg name="baobab" apt dnf pacman />
