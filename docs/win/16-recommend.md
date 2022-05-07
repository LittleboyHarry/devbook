---
title: 推荐软件
---

:::note 借助包管理器安装

推荐 Chocolatey, 以管理员权限运行 PowerShell 安装方法：

    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

:::

## 自由软件

### 必装类

压缩软件：

    choco install 7zip

&nbsp;

    winget install 7zip.7zip

<!-- 硬盘空间分析: [KDE Filelight](https://www.microsoft.com/store/productId/9PFXCD722M2C) -->

 <div className="no-table-border no-table-header">

### 推荐类

 <details className="let-details-to-gray">
<summary>BT下载器：qbittorrent-enhanced</summary>

Chocolatey:

    choco install qbittorrent-enhanced

Scoop:

    scoop bucket add dorado https://github.com/chawyehsu/dorado
    scoop install qbittorrent-enhanced

[GitHub Releases](https://github.com/c0re100/qBittorrent-Enhanced-Edition/releases)

</details>

 <details className="let-details-to-gray">
<summary>硬盘数据防盗加密：veracrypt</summary>

<GetPkg name="veracrypt" choco winget />

</details>

### 商店提供

|                                                       |                        |
| ----------------------------------------------------- | ---------------------- |
| <MstoreLink id="XP89DCGQ3K6VLD" name="PowerToys" />   | 微软出品的系统增强工具 |
| <MstoreLink id="9PFXCD722M2C" name="KDE Filelight" /> | 硬盘空间分析           |
| <MstoreLink id="XP8JK4HZBVF435" name="Auto Dark Mode" /> | 护眼：自动深色模式       |
| <MstoreLink id="9PLJWWSV01LK" name="Twinkle Tray" />     | 护眼：调节外接显示屏亮度 |

</div>

## 免费软件

 <div className="no-table-border no-table-header">

|                     |          |
| ------------------- | -------- |
| [Everything][linke] | 全盘搜索 |

[linke]: https://www.voidtools.com/zh-cn/downloads/#:~:text=%E4%B8%8B%E8%BD%BD%E7%B2%BE%E7%AE%80%E7%89%88%E5%AE%89%E8%A3%85%E7%89%88%E6%9C%AC%2064%20%E4%BD%8D

## 付费软件

<div className="no-table-header">

|                                                          |      |
| -------------------------------------------------------- | ---- |
| <MstoreLink id="9NBLGGH35LXN" name="Afinity Photo" />    | 修图 |
| <MstoreLink id="9NBLGGH35LRM" name="Afinity Designer" /> | 制图 |

</div>
</div>

国内正版代理商索引：https://zhuanlan.zhihu.com/p/93284719

import GetPkg from '@theme/GetPkg';
import {HtmlA,MstoreLink} from '@theme/links';
