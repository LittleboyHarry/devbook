---
title: 使用 WSL
---

import {HtmlA} from '@theme/links';

1.  添加 Linux 内核虚拟化组件：需要管理员权限

    ```powershell
    dism /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
    dism /online /enable-feature /featurename:VirtualMachinePlatform /all

    ```

2.  重启后安装

        wsl --update

<!-- <MstoreLink id="9PDXGNCFSCZV" name="Ubuntu" /> -->

:::note 自动更新

<p><HtmlA href="ms-settings:windowsupdate-options">设置更新</HtmlA>，
启动“接收其它 Microsoft 产品的更新”。</p>

:::

## 建议

尽量把文件存储在 WSL 文件系统内。若非必要，开发时尽量不使用 Windows 文件系统。

目前兼容机制 BUG 多不完善：不能监听文件修改、文件管理器交换文件时产生碎片文件等

---

附：

- [虚拟硬盘瘦身方法](https://www.cnblogs.com/enrio/p/14222648.html)
- [扩展阅读](https://dowww.spencerwoo.com/)
