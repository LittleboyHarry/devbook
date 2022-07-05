---
sidebar_position: 4
---

# Windows 推荐软件

以下均为自由软件：

## 压缩软件

使用 [7zip](https://www.7-zip.org/download.html)

<GetPkg name="7zip" choco scoop winget="7zip.7zip" />

## 哈希文件校验

开源软件 [openhashtab](https://github.com/namazso/OpenHashTab)

<GetPkg name="openhashtab" winget choco />

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

<GetPkg name="auto-dark-mode" choco />

其他：

- <a href="/docs/goodsoft/rsi" target="_blank">workrave</a>

:::

import GetPkg from '@theme/unique/GetPkg';
