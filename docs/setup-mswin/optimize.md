---
title: 优化
sidebar_position: 5
---

作者推荐的常用优化：

## 文件管理器

```powershell
# 显示扩展名
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v HideFileExt /t REG_DWORD /d 0 /f > $null

# 多进程隔离，缓解崩溃问题
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v SeparateProcess /t REG_DWORD /d 1 /f > $null

# 外观调优
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v AutoCheckSelect /t REG_DWORD /d 1 /f > $null
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v LaunchTo /t REG_DWORD /d 1 /f > $null
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v UseCompactMode /t REG_DWORD /d 1 /f > $null

# 显示桌面内容：用户文件夹
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\NewStartPanel /v "{59031a47-3f72-44a7-89c5-5595fe6b30ee}" /t REG_DWORD /d 0 /f > $null
# 显示桌面内容：库、网络
## reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\NewStartPanel /v "{031E4825-7B94-4dc3-B131-E946B44C8DD5}" /t REG_DWORD /d 0 /f > $null
## reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\NewStartPanel /v "{F02C1A0D-BE21-4350-88B0-7367FC96EF3C}" /t REG_DWORD /d 0 /f > $null

# 创建快捷方式省去废话
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer /v link /t REG_BINARY /d 00000000 /f

# 右键菜单优化
foreach ($it in 'exefile', 'Msi.Package', 'lnkfile', 'batfile', 'cmdfile') {
    reg add HKCU\Software\Classes\$it\shellex\ContextMenuHandlers\Compatibility /ve /d '""' /f > $null
}

kill -n explorer
```

## 锁屏界面

动态壁纸的禁用方法

    reg add HKCU\Software\Microsoft\Windows\CurrentVersion\ContentDeliveryManager /v RotatingLockScreenEnabled /t REG_DWORD /d 0 /f

## 色彩反转

适用于尚未适配深色模式的应用：按下 `Win + Ctrl + C` 反转色彩为黑白色

```
reg add HKCU\Software\Microsoft\ColorFiltering /v HotkeyEnabled /t REG_DWORD /d 1 /f
reg add HKCU\Software\Microsoft\ColorFiltering /v FilterType /t REG_DWORD /d 2 /f

```

:::caution 以下内容需要管理员权限运行
:::

## 字体

<p><a href="/docs/devenv/font" target="_blank">更多推荐字体</a></p>

若字体模糊不清晰，使用 `cttune` 工具调整

## 后台服务

```powershell
function Disable-Service {
    param([String]$name)
    if ((Get-Service $name -ea si) -and ((Get-Service $name).StartType -ne 'Disabled')) {
        & sc stop $name > $null
        & sc config $name start=disabled > $null
        echo $name
    }
}

# 禁用：兼容性助手、诊断、跟踪、错误报告
'PcaSvc', 'DPS', 'DiagTrack', 'WerSvc' | % { Disable-Service $_ }
# 禁用 XBox
'XblAuthManager', 'XblGameSave', 'XboxGipSvc', 'XboxNetApiSvc' | % { Disable-Service $_ }

```

## 开始菜单

```powershell
# 不使用内置搜索服务，因为它影响性能
sc.exe stop "wsearch"
sc.exe config "wsearch" start=disabled

# 不要显示网页搜索结果
reg add HKCU\SOFTWARE\Policies\Microsoft\Windows\Explorer /v DisableSearchBoxSuggestions /t REG_DWORD /f /d 1
# 推荐使用后文介绍的 Everything 代替

```

重新登陆后生效

推荐代替品：[安装 Everything](https://www.voidtools.com/zh-cn/downloads/#:~:text=%E4%B8%8B%E8%BD%BD%E7%B2%BE%E7%AE%80%E7%89%88%E5%AE%89%E8%A3%85%E7%89%88%E6%9C%AC%2064%20%E4%BD%8D)
（ 精简版安装版本 64 位 ）

<GetPkg winget="voidtools.Everything.Lite" choco="everything" />

## 其他

```powershell
reg add HKLM\SOFTWARE\Policies\Microsoft\MicrosoftEdge /v PreventFirstRunPage /t REG_DWORD /d 0 /f

reg add HKLM\SOFTWARE\Policies\Microsoft\WindowsMediaPlayer /v GroupPrivacyAcceptance /t REG_DWORD /d 1 /f

```

以上内容部分参考来自 DISM++ 应用程序

 <PreferWinVer win10 win11 >
<ForWin10>

<h3>自动清理</h3>

设置<HtmlA href="ms-settings:storagepolicies">“存储感知”</HtmlA>

</ForWin10>
<ForWin11>

<h3>任务栏</h3>

```powershell
# 元素左对齐
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v TaskbarAl /t REG_DWORD /d 0 /f

# 移除干扰元素
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v TaskbarDa /t REG_DWORD /d 0 /f
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v TaskbarMn /t REG_DWORD /d 0 /f
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v MMTaskbarMode /t REG_DWORD /d 2 /f

# Alt + Tab 不要切换 Edge 标签页
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v MultiTaskingAltTabFilter /t REG_DWORD /d 3 /f

```

</ForWin11>
</PreferWinVer>

import {
PreferWinVer,
ForWin10,
ForWin11
} from '@theme/PreferWinVer'
import GetPkg from '@theme/GetPkg'
import {HtmlA} from '@theme/links'
