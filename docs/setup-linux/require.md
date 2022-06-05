---
title: Linux 使用须知
sidebar_position: 1
---

## 物理机需求

现代主流电脑硬件：

- CPU 架构为 amd64(x86_64)
- 主板支持 EFI

显卡不推荐使用 N 卡，因为闭源的显卡驱动会比较麻烦

需求：

- 硬盘使用 GPT 格式
- U 盘

:::caution 注意事项

- 本教程仅以 GPT 分区 + EFI 启动为例
- **安装前请备份好硬盘重要资料，以免丢失**

:::

## 建议

- 游戏需求请优先考虑装 Windows 双系统

## 安装教程

<LogoCard
    name="Arch Linux"
    noNewTab to="for-arch"
    logo={<img src={useBaseUrl('/img/icons/arch.svg')} />}
/>

import useBaseUrl from '@docusaurus/useBaseUrl';
import LogoCard from '@theme/LogoCard';
