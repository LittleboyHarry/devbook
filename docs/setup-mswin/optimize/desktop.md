---
description: ''
---

# 桌面环境

import PrefixIcon from '@theme/PrefixIcon';

<PrefixIcon cmd>

## 添加桌面图标

</PrefixIcon>

1. 右键管理菜单项
2. 添加常用桌面图标：用户文件夹、库

```powershell
# 1:
reg add HKCU\Software\Classes\DesktopBackground\Shell\DesktopIcon /v Position /t REG_SZ /d Bottom /f
reg add HKCU\Software\Classes\DesktopBackground\Shell\DesktopIcon /v Icon /t REG_SZ /d "imageres.dll,174" /f
reg add HKCU\Software\Classes\DesktopBackground\Shell\DesktopIcon /v MUIVerb /t REG_SZ /d "@desk.cpl,-112" /f
reg add HKCU\Software\Classes\DesktopBackground\Shell\DesktopIcon\Command /ve /t REG_SZ /d "control desk.cpl,,0" /f
# 2:
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\NewStartPanel /v "{59031A47-3F72-44A7-89C5-5595FE6B30EE}" /t REG_DWORD /d 0 /f
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\NewStartPanel /v "{031E4825-7B94-4dc3-B131-E946B44C8DD5}" /t REG_DWORD /d 0 /f
if( (Get-Culture).Name -eq 'zh-CN' ) {
    reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\CLSID\{59031A47-3F72-44A7-89C5-5595FE6B30EE}" /ve /t REG_SZ /d "用户目录" /f
}

```

<details><summary>更多图标：网络管理</summary>

```batch
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Desktop\NameSpace\{7007ACC7-3202-11D1-AAD2-00805FC1270E}" /f
reg add "HKCU\Software\Classes\CLSID\{7007ACC7-3202-11D1-AAD2-00805FC1270E}\DefaultIcon" /ve /t REG_EXPAND_SZ /d "imageres.dll,114" /f

```

</details>


<PrefixIcon cmd>

## 改善右键菜单

</PrefixIcon>

import { PreferWinVer, ForWin10, ForWin11 } from '@theme/PreferWinVer'

<br/><PreferWinVer win10 win11><br/>

<ForWin10>

添加旧版截图工具

```powershell
# 1:
if (Test-Path C:\windows\system32\SnippingTool.exe) {
    reg add HKLM\Software\Classes\DesktopBackground\Shell\SnippingTool /v MUIVerb /t REG_SZ /d "@snippingTool.exe,-101" /f
    reg add HKLM\Software\Classes\DesktopBackground\Shell\SnippingTool /v Icon /t REG_SZ /d "snippingTool.exe,0" /f
    reg add HKLM\Software\Classes\DesktopBackground\Shell\SnippingTool\Command /ve /t REG_SZ /d snippingTool.exe /f
}
```

</ForWin10>

</PreferWinVer>

添加桌面右键菜单：切换夜间模式

```powershell
if ([Environment]::OSVersion.Version.Build -ge 14393) {
    reg add HKCU\Software\Classes\DesktopBackground\Shell\AppColorMode /v MUIVerb /t REG_SZ /d 夜间模式 /f
    reg add HKCU\Software\Classes\DesktopBackground\Shell\AppColorMode /v SubCommands /t REG_SZ /d '""' /f
    reg add HKCU\Software\Classes\DesktopBackground\Shell\AppColorMode /v Icon /t REG_SZ /d "imageres.dll,96" /f
    reg add HKCU\Software\Classes\DesktopBackground\Shell\AppColorMode /v Position /t REG_SZ /d bottom /f
    reg add HKCU\Software\Classes\DesktopBackground\Shell\AppColorMode\Shell\Item0 /v Icon /t REG_SZ /d "imageres.dll,-5411" /f
    reg add HKCU\Software\Classes\DesktopBackground\Shell\AppColorMode\Shell\Item0 /v MUIVerb /t REG_SZ /d 关闭 /f
    reg add HKCU\Software\Classes\DesktopBackground\Shell\AppColorMode\Shell\Item0\Command /ve /t REG_SZ /d "Reg Add HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize /v AppsUseLightTheme /t REG_DWORD /d 1 /f" /f
    reg add HKCU\Software\Classes\DesktopBackground\Shell\AppColorMode\Shell\Item1 /v MUIVerb /t REG_SZ /d 激活 /f
    reg add HKCU\Software\Classes\DesktopBackground\Shell\AppColorMode\Shell\Item1 /v Icon /t REG_SZ /d "imageres.dll,-5412" /f
    reg add HKCU\Software\Classes\DesktopBackground\Shell\AppColorMode\Shell\Item1\Command /ve /t REG_SZ /d "Reg Add HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize /v AppsUseLightTheme /t REG_DWORD /d 0 /f" /f
}
```

:::caution 关闭并重启文件资源管理器生效

<PrefixIcon pwsh>

    kill -n explorer

</PrefixIcon>

:::
