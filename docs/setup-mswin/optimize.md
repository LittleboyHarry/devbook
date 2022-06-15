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

# 创建快捷方式省去“快捷方式”字样
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer /v link /t REG_BINARY /d 00000000 /f
# 复制文件省去“副本”字样
Reg.exe add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\NamingTemplates" /v "CopyNameTemplate" /t REG_SZ /d "%%s" /f

# 右键菜单优化
foreach ($it in 'exefile', 'Msi.Package', 'lnkfile', 'batfile', 'cmdfile') {
    reg add HKCU\Software\Classes\$it\shellex\ContextMenuHandlers\Compatibility /ve /d '""' /f > $null
}

# 自动添加旧版截图工具
if (Test-Path C:\windows\system32\SnippingTool.exe) {
    reg add HKLM\Software\Classes\DesktopBackground\Shell\SnippingTool /v MUIVerb /t REG_SZ /d 截图工具 /f
    reg add HKLM\Software\Classes\DesktopBackground\Shell\SnippingTool /v Icon /t REG_SZ /d "snippingTool.exe,0" /f
    reg add HKLM\Software\Classes\DesktopBackground\Shell\SnippingTool\Command /ve /t REG_SZ /d snippingTool.exe /f
}

# 优化打开方式列表
foreach ($it in 'VSLauncher.exe', 'WINWORD.EXE', 'wmplayer.exe') {
    reg add HKLM\Software\Classes\Applications\$it /v NoOpenWith /t REG_SZ /d '""' /f > $null
}

kill -n explorer
```

import FileItem from '@theme/FileItem'
import { ConfigIcon } from '@theme/fai';

:::note 增强传统文件菜单

<p>
    <FileItem button name='bettermenu.reg' path="/config/win/bettermenu.reg" icon={<ConfigIcon />}/>
    ，包含内容：
</p>

- 文件：复制内容、哈希、获取权限、编辑隐藏属性
- 桌面壁纸右键菜单：重启资源管理器、深色模式、电源计划、图标设置、屏保设置
- 电脑图标右键菜单：显示系统信息、UAC、编辑 HOSTS、刷新 DNS、电池报告
- 特殊：编辑程序的防火墙规则、图片幻灯片播放、分区垃圾删除、分区碎片整理、注册 DLL/OCX

更多设置请下载 [菜单管理器](https://gitee.com/BluePointLilac/ContextMenuManager)

:::

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

    reg add "HKCU\Software\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers" /v "C:\Program Files\Everything\Everything.exe" /t REG_SZ /f /d "~ HIGHDPIAWARE"

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
