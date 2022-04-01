---
title: 概述
---

本手册对的 Linux 适用范围：
上网查资料、简单多媒体处理、编程开发等日常用途。
( 游戏需求请优先考虑装 Windows 双系统 )

## 下载获取

import LogoCard from '@theme/LogoCard';

<LogoCard.Container>

<LogoCard name="Fedora" label="RPM 类 Linux 系统" to="https://getfedora.org/zh_Hans_CN/workstation/download/" logo={ <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fedora/fedora-plain.svg" /> }/>
<LogoCard name="Ubuntu" label="Debian 类 Linux 系统" to="https://cn.ubuntu.com/download/desktop" logo={ <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" /> }/>

</LogoCard.Container>

<br/>

其它桌面版本：https://spins.fedoraproject.org/

服务器定制版安装：https://getfedora.org/en/server/download/

## 推荐硬件

- PC 当今的主流 CPU 架构: amd64 (x86_64)
- 采用 GPT 分区格式、支持 EFI 启动

  （ MBR 对多分区限制非常不便，BIOS 传统启动对多系统启动支持远逊 EFI ）

- 非 N 卡类开源显卡（ N 卡安装会稍多些步骤 ）

---

注：

- Ubuntu 是 Debian 同构品，如无例外则，两术语等效或近似。Fedora 与 CentOS 等同理
