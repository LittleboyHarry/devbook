---
title: 使用 WSL
---

import {HtmlA} from '@theme/links';

:::caution 需要管理员权限
:::

1.  添加 Linux 内核虚拟化组件

    ```powershell
    dism /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
    dism /online /enable-feature /featurename:VirtualMachinePlatform /all

    ```

2. \* 设置为系统特殊启动选项，默认不启动 WSL

    ```shell
    bcdedit /set '{current}' bootmenupolicy legacy
    bcdedit /set '{current}' hypervisorlaunchtype off
    bcdedit /copy '{current}' /d 'no HyperV'
    bcdedit /set '{current}' hypervisorlaunchtype auto
    # 推荐配置：
    # 降低选择等待时间：
    bcdedit /timeout 2
    ```

2.  重启后安装

        wsl --update

:::note 自动更新

<p><HtmlA href="ms-settings:windowsupdate-options">设置更新</HtmlA>，
启动“接收其它 Microsoft 产品的更新”。</p>

:::

## 建议

尽量把文件存储在 WSL 文件系统内。若非必要，开发时尽量不使用 Windows 文件系统。

目前兼容机制 BUG 多不完善：不能监听文件修改、文件管理器交换文件时产生碎片文件等

:::caution 注意

[HyperV 模式下 VirtualBox 虚拟机只能单 CPU 运行](https://github.com/MicrosoftDocs/WSL/issues/798)

:::

---

附：

- [虚拟硬盘瘦身方法](https://www.cnblogs.com/enrio/p/14222648.html)
- [扩展阅读](https://dowww.spencerwoo.com/)
