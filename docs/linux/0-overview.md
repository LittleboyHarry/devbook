---
title: 概述
---

下载:

import LogoCard from '@theme/LogoCard';

<LogoCard.Container>
    <LogoCard name="Fedora" newtab label="RPM 类 Linux 系统" to="https://getfedora.org/zh_Hans_CN/workstation/download/" logo={ <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fedora/fedora-plain.svg" /> }/>
    <LogoCard name="Ubuntu" newtab label="Debian 类 Linux 系统" to="https://cn.ubuntu.com/download/desktop" logo={ <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" /> }/>
</LogoCard.Container>

<br/>

其他桌面版本：https://spins.fedoraproject.org/

服务器定制版安装：https://getfedora.org/en/server/download/

## Linux 硬件配置推荐

- PC 当今的主流 CPU 架构: amd64 (x86_64)
- 采用 GPT 分区格式、支持 EFI 启动

  （ MBR 对多分区限制非常不便，BIOS 传统启动对多系统启动支持远逊 EFI ）

- 非N卡类开源显卡（ N卡安装会稍多些步骤 ）
