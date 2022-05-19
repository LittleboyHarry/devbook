---
title: 制作启动盘
---

:::note [同盘多镜像制作器](https://www.ventoy.net/cn/download.html)

<GetPkg name="ventoy" scoop choco aur="ventoy-bin" />

:::

少数其它发行版仅支持单一系统启动盘

:::note 单一盘制作器：开源商业应用，界面精简

<GetPkg name="etcher" scoop winget="balenaEtcher" choco aur="etcher-bin" />

:::

:::note 单一盘制作器：开源社区应用，可自定性强

<GetPkg name="rufus" choco winget scoop />

:::

Linux 指令：

    sudo dd bs=4M if=<osimage> of=/dev/<outdev> status=progress oflag=sync

若在线安装，需要有线网或已知 WiFi 密码，其它特用网络工具自备

## 主板设置

1. 开机，按 [BIOS 启动按键](https://www.wepe.com.cn/ubook/bootpe.html)
2. 关闭安全启动 Security Boot
3. 确保激活 UEFI 启动模式
4. 调整启动顺序

:::caution

请保留 LiveCD 或 WinPE U盘，以便日后修复、调试之需

:::

import GetPkg from '@theme/GetPkg';
