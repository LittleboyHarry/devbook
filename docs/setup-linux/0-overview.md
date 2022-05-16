---
title: 概述
---

本手册对的 Linux 适用范围：
上网查资料、简单多媒体处理、编程开发等日常用途。
( 游戏需求请优先考虑装 Windows 双系统 )

## 推荐硬件

- PC 当今的主流 CPU 架构: amd64 (x86_64)
- 采用 GPT 分区格式、支持 EFI 启动

  （ MBR 对多分区限制非常不便，BIOS 传统启动对多系统启动支持远逊 EFI ）

- 非 N 卡类开源显卡（ N 卡安装会稍多些步骤 ）

## 如何选择发行版？

本手册考虑选择一种相对稳定的、生态成熟的、物理机安装的发行版。
排除掉国内各种小众罕见的发行版，仅推荐两类系统：

- Fedora ( CentOS )
- Debian ( Ubuntu )

[比较分享的参考文章](https://www.toutiao.com/article/6710056109211648523/)

<!-- todo: explain -->

<!-- todo: 美化 -->

作者推荐意见

Fedora (no SELinux): 初学者

Arch: 程序员、工程师

Debian, Ubuntu: 服务器、中间件、WSL

Deepin: 普通电脑用户
