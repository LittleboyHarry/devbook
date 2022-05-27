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

        wsl --install

<!-- <MstoreLink id="9PDXGNCFSCZV" name="Ubuntu" /> -->

:::note 自动更新

<p><HtmlA href="ms-settings:windowsupdate-options">设置更新</HtmlA>，
启动“接收其它 Microsoft 产品的更新”。</p>

:::
