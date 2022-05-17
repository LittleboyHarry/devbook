---
title: 规划硬盘分区
---

对于全空、可完全重置硬盘：Linux 安装器都会提供安装建议，自动完成分区

手动分区的注意事项：

- 分区工具
  - WinPE 装机工具提供：
    - `diskmgmt.msc` Windows 内置
    - DiskGenius 分区工具
    - 傲梅分区助手
  - Linux LiveCD 提供：
    - `cgdisk` 字符界面 GPT 分区器
    - `gparted` 图形化分区器

- 保留 Windows MSR 恢复分区

  微软建议每块含 Windows 系统的硬盘都保留一个 MSR 分区，至少 16~128 MB

- 创建 Win 与 Linux 系统间共享数据区

  推荐 exFAT 格式分区

<!--
- 使用或挂载 EFI 分区：

  Ubuntu, Calamares 安装器称之为“引导器”，其他安装器挂载到 `/boot/efi`
-->
