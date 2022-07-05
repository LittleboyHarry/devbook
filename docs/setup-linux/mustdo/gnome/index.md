---
sidebar_position: 2
---

# GNOME 调优

注：`&!` 是 zsh 可分离式执行的专属特性

## 调优

:::note 自动登陆，免输密码

已设全盘加密的用户推荐：

    gnome-control-center user-accounts &!

:::

## 其它

设置深夜护眼：点击夜灯，激活暖色效果

    gnome-control-center display &!

## 辅助工具

类 Windows 注册表编辑器：

import GetPkg from '@theme/unique/GetPkg';

<GetPkg name="dconf-editor" apt dnf pacman />
