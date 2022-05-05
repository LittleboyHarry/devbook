---
title: WSL 安装
---

import {HtmlA,MstoreLink,MstoreButton} from '@theme/links';

1.  添加 Linux 内核虚拟化组件：需要管理员权限

    ```powershell
    dism /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
    dism /online /enable-feature /featurename:VirtualMachinePlatform /all

    ```

2.  重启后，更新：

        wsl --update

3.  <p>推荐开发者使用&nbsp;
    <MstoreLink id="9MSVKQC78PK6" name="Debian"/> 和&nbsp;
    <MstoreLink id="9PDXGNCFSCZV" name="Ubuntu" />。
    或<a href="https://aka.ms/wslstore">挑选其他发行版</a></p>

:::note 自动更新

<p><HtmlA href="ms-settings:windowsupdate-options">设置更新</HtmlA>，
启动“接收其它 Microsoft 产品的更新”。</p>

:::

### Debian

启动 Debian，初始化用户名密码

随后[配置镜像源并更新](/docs/linux/mustdo/mirror-update#Debian)

:::note 使用 HTTPS 协议的镜像源

Debian WSL 缺少需要手动下载安装的
[可信证书](https://packages.debian.org/search?keywords=ca-certificates&exact=1)
及 [openssl](https://packages.debian.org/search?keywords=openssl&exact=1) 依赖

:::
