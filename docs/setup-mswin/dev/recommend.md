---
title: Windows 推荐软件
sidebar_position: 4
---

以下均为自由软件：

## 压缩软件

使用 [7zip](https://www.7-zip.org/download.html)

<GetPkg name="7zip" choco scoop winget="7zip.7zip" />

## 数据防盗

使用 [VeraCrypt](https://www.veracrypt.fr/en/Downloads.html) 加密

<GetPkg name="veracrypt" choco winget />

## 哈希文件校验

开源软件 [openhashtab](https://github.com/namazso/OpenHashTab)

<GetPkg name="openhashtab" winget choco />

## 全盘搜索

使用 [Everything](https://www.voidtools.com/zh-cn/downloads/#:~:text=%E4%B8%8B%E8%BD%BD%E7%B2%BE%E7%AE%80%E7%89%88%E5%AE%89%E8%A3%85%E7%89%88%E6%9C%AC%2064%20%E4%BD%8D)

<GetPkg winget="voidtools.Everything.Lite" choco="everything" />

## 文件传输

使用 [WinSCP](https://winscp.net/eng/index.php)

<GetPkg name="winscp" winget choco />

## BT 下载器

使用 [qBittorrent-Enhanced-Edition](https://github.com/c0re100/qBittorrent-Enhanced-Edition)

```powershell
# for scoop only:
scoop bucket add dorado https://github.com/chawyehsu/dorado
```

<GetPkg name="qbittorrent-enhanced" choco scoop/>

## RamDisk 与镜像工具

来自开源项目 [imdisk-toolkit](https://sourceforge.net/projects/imdisk-toolkit/)

```powershell
sudo choco install imdisk imdisk-toolkit

# 修复界面模糊的问题
foreach ($_ in @("config", "MountImg", "RamDiskUI")) {
    reg add "HKCU\Software\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers" /v "C:\Program Files\ImDisk\$_.exe" /t REG_SZ /f /d "~ HIGHDPIAWARE"
}

```

:::note 来自前文

[商店可获取的应用](../store):

<GetPkg name="auto-dark-mode" choco />

其他：

- <a href="/docs/goodsoft/rsi" target="_blank">workrave</a>

:::

import GetPkg from '@theme/GetPkg';
