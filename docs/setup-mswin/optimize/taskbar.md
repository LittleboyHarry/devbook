---
sidebar_position: 1
description: ''
---

import PrefixIcon from '@theme/PrefixIcon';
import { PreferWinVer, ForWin10, ForWin11 } from '@theme/PreferWinVer'

# 任务栏与开始菜单

<PreferWinVer win10 win11><br/>

<PrefixIcon pwsh>

## 任务栏

</PrefixIcon>

1. 优先展示新活动窗口
2. 大缩略浏览图（ 仅用于大内存、宽屏设备 ）

\* 关闭并重启文件资源管理器生效

```powershell
# 1:
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v LastActiveClick /t REG_DWORD /d 1 /f
# 2:
$isWideScreen = ((Get-WmiObject -Class Win32_VideoController).VideoModeDescription -split ' x ')[0] -ge 1680
$totalMemoryInGb = (Get-CimInstance Win32_PhysicalMemory | Measure-Object -Property capacity -Sum).sum / 1gb
if( $isWideScreen -and $totalMemoryInGb -gt 4 ){
    reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Taskband /v MinThumbSizePx /t REG_DWORD /d 500 /f
}
# *
kill -n explorer
```

<ForWin11>

对 Windows 11:

1. 图标元素左对齐
2. Alt + Tab 不要切换 Edge 标签页
3. 移除干扰元素

```powershell
# 1:
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v TaskbarAl /t REG_DWORD /d 0 /f
# 2:
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v MultiTaskingAltTabFilter /t REG_DWORD /d 3 /f
# 3:
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v TaskbarDa /t REG_DWORD /d 0 /f
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v TaskbarMn /t REG_DWORD /d 0 /f
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v MMTaskbarMode /t REG_DWORD /d 2 /f

```

</ForWin11>

<PrefixIcon admin cmd>

## 开始菜单

</PrefixIcon>

<ForWin10>

不要显示网页搜索结果：

```batch
reg add HKCU\SOFTWARE\Policies\Microsoft\Windows\Explorer /v DisableSearchBoxSuggestions /t REG_DWORD /f /d 1

```

</ForWin10>

<ForWin11>

禁用云搜索：

```batch
reg add HKCU\SOFTWARE\Policies\Microsoft\Windows\Explorer /v DisableSearchBoxSuggestions /t REG_DWORD /f /d 1
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\SearchSettings /v IsMSACloudSearchEnabled /t REG_DWORD /d 0 /f
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\SearchSettings /v IsAADCloudSearchEnabled /t REG_DWORD /d 0 /f

```

</ForWin11>

</PreferWinVer>

import GetPkg from '@theme/GetPkg'
GetPkg

:::note 不喜欢使用内置搜索服务？

推荐使用 Everything 代替，它性能更快更优，搜索能力强

[下载安装](https://www.voidtools.com/zh-cn/downloads/#:~:text=%E4%B8%8B%E8%BD%BD%E7%B2%BE%E7%AE%80%E7%89%88%E5%AE%89%E8%A3%85%E7%89%88%E6%9C%AC%2064%20%E4%BD%8D)，选择：精简版安装版本 64 位

<GetPkg winget="voidtools.Everything.Lite" choco="everything" />

<PrefixIcon cmd children='模糊修复：' />

```batch
reg add "HKCU\Software\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers" /v "C:\Program Files\Everything\Everything.exe" /t REG_SZ /f /d "~ HIGHDPIAWARE"
```

<PrefixIcon cmd admin children='禁用原生搜索' />

```powershell
sc.exe stop wsearch
sc.exe config wsearch start= disabled
```

:::
