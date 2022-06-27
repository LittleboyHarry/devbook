---
sidebar_position: 5
---

# 优化

作者推荐的常用优化：

## 文件资源管理器

```powershell
&{
# in cmd: @doskey #=REM
# 显示扩展名
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v HideFileExt /t REG_DWORD /d 0 /f

# 多进程隔离，缓解崩溃问题
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v SeparateProcess /t REG_DWORD /d 1 /f

# 外观调优
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v AutoCheckSelect /t REG_DWORD /d 1 /f
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v LaunchTo /t REG_DWORD /d 1 /f
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v UseCompactMode /t REG_DWORD /d 1 /f
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\CLSID\{F02C1A0D-BE21-4350-88B0-7367FC96EF3C}\DefaultIcon" /ve /t REG_SZ /d "shell32.dll,18" /f
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\CLSID\{031E4825-7B94-4DC3-B131-E946B44C8DD5}\DefaultIcon" /ve /t REG_SZ /d "explorer.exe" /f
if ([Environment]::OSVersion.Version.Build -lt 22621) {
    reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\CLSID\{679F85CB-0220-4080-B29B-5540CC05AAB6}\DefaultIcon" /ve /t REG_SZ /d "shell32.dll,213" /f
}

# 添加常用桌面图标：用户文件夹、库
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\NewStartPanel /v "{59031A47-3F72-44A7-89C5-5595FE6B30EE}" /t REG_DWORD /d 0 /f
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\CLSID\{59031A47-3F72-44A7-89C5-5595FE6B30EE}" /ve /t REG_SZ /d "用户目录" /f
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\NewStartPanel /v "{031E4825-7B94-4dc3-B131-E946B44C8DD5}" /t REG_DWORD /d 0 /f
# 添加特殊桌面图标：网络管理
<#
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Desktop\NameSpace\{7007ACC7-3202-11D1-AAD2-00805FC1270E}" /f
reg add "HKCU\Software\Classes\CLSID\{7007ACC7-3202-11D1-AAD2-00805FC1270E}\DefaultIcon" /ve /t REG_EXPAND_SZ /d "imageres.dll,114" /f
#>

# 右键管理桌面图标
reg add HKCU\Software\Classes\DesktopBackground\Shell\DesktopIcon /v MUIVerb /t REG_SZ /d "桌面图标设置" /f
reg add HKCU\Software\Classes\DesktopBackground\Shell\DesktopIcon /v "Icon" /t REG_SZ /d desk.cpl,0 /f
reg add HKCU\Software\Classes\DesktopBackground\Shell\DesktopIcon\Command /ve /t REG_SZ /d "control desk.cpl,,0" /f

# 创建快捷方式省去“快捷方式”字样
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer /v link /t REG_BINARY /d 00000000 /f
# 复制文件省去“副本”字样
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\NamingTemplates /v CopyNameTemplate /t REG_SZ /d %s /f

# 导航栏显示最近的文件夹
reg add "HKCU\SOFTWARE\Classes\CLSID\{22877A6D-37A1-461A-91B0-DBDA5AAEBC99}" /v System.IsPinnedToNamespaceTree /t REG_DWORD /d 1 /f
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\NewStartPanel /v "{22877A6D-37A1-461A-91B0-DBDA5AAEBC99}" /t REG_DWORD /d 1 /f
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Desktop\NameSpace\{22877A6D-37A1-461A-91B0-DBDA5AAEBC99}" /f
reg add "HKCU\Software\Classes\CLSID\{22877A6D-37A1-461A-91B0-DBDA5AAEBC99}\DefaultIcon" /ve /t REG_EXPAND_SZ /d "shell32.dll,316" /f

}#>$null

# 右键菜单优化
foreach ($it in 'exefile', 'Msi.Package', 'lnkfile', 'batfile', 'cmdfile') {
    reg add HKCU\Software\Classes\$it\shellex\ContextMenuHandlers\Compatibility /ve /d '""' /f > $null
}

# 自动添加旧版截图工具
if (Test-Path C:\windows\system32\SnippingTool.exe) {
    reg add HKCU\Software\Classes\DesktopBackground\Shell\SnippingTool /v MUIVerb /t REG_SZ /d 截图工具 /f
    reg add HKCU\Software\Classes\DesktopBackground\Shell\SnippingTool /v Icon /t REG_SZ /d "snippingTool.exe,0" /f
    reg add HKCU\Software\Classes\DesktopBackground\Shell\SnippingTool\Command /ve /t REG_SZ /d snippingTool.exe /f
}

# 添加桌面右键菜单：切换夜间模式
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

# 优化打开方式列表
foreach ($it in 'VSLauncher.exe', 'WINWORD.EXE', 'wmplayer.exe') {
    reg add HKCU\Software\Classes\Applications\$it /v NoOpenWith /t REG_SZ /d '""' /f > $null
}

# !!! 关闭并重启文件资源管理器生效 !!!
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
- 桌面壁纸右键菜单：重启资源管理器、电源计划、图标设置、屏保设置
- 电脑图标右键菜单：显示系统信息、UAC、编辑 HOSTS、刷新 DNS
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

<!--
 <details><summary>隐藏图标右上角压缩标记的蓝色双箭头</summary>

```powershell
reg add "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Shell Icons" /v 179 /d "imageres.dll,197" /t reg_sz /f
taskkill /f /im explorer.exe
cmd /c del "%LOCALAPPDATA%\iconcache.db" /s /q
cmd /c del "%LOCALAPPDATA%\Microsoft\Windows\Explorer\iconcache_*.db" /s /q
start explorer

```

</details>
-->

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

<h3>右键菜单模式</h3>

```powershell
&{
reg add HKCU\Software\Classes\DesktopBackground\Shell\SwitchWin11ContextMenu /v MUIVerb /t REG_SZ /d 右键菜单样式 /f
reg add HKCU\Software\Classes\DesktopBackground\Shell\SwitchWin11ContextMenu /v SubCommands /t REG_SZ /d '""' /f
reg add HKCU\Software\Classes\DesktopBackground\Shell\SwitchWin11ContextMenu /v Icon /t REG_SZ /d "imageres.dll,310" /f
reg add HKCU\Software\Classes\DesktopBackground\Shell\SwitchWin11ContextMenu /v Position /t REG_SZ /d bottom /f
reg add HKCU\Software\Classes\DesktopBackground\Shell\SwitchWin11ContextMenu\Shell\Item0 /v Icon /t REG_SZ /d "shell32.dll,39" /f
reg add HKCU\Software\Classes\DesktopBackground\Shell\SwitchWin11ContextMenu\Shell\Item0 /v MUIVerb /t REG_SZ /d '新版（ 重启文件资源管理器 ）' /f
reg add HKCU\Software\Classes\DesktopBackground\Shell\SwitchWin11ContextMenu\Shell\Item0\Command /ve /t REG_SZ /d '"mshta vbscript:createobject(\"shell.application\").shellexecute(\"cmd.exe\",\"/c reg delete HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2} /f & powershell -c kill -n explorer\",\"\",\"open\",0)(close)"' /f
reg add HKCU\Software\Classes\DesktopBackground\Shell\SwitchWin11ContextMenu\Shell\Item1 /v MUIVerb /t REG_SZ /d '旧版（ 重启文件资源管理器 ）' /f
reg add HKCU\Software\Classes\DesktopBackground\Shell\SwitchWin11ContextMenu\Shell\Item1 /v Icon /t REG_SZ /d "explorer.exe,15" /f
reg add HKCU\Software\Classes\DesktopBackground\Shell\SwitchWin11ContextMenu\Shell\Item1\Command /ve /t REG_SZ /d '"mshta vbscript:createobject(\"shell.application\").shellexecute(\"cmd.exe\",\"/c reg add HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32 /f /ve & powershell -c kill -n explorer\",\"\",\"open\",0)(close)"' /f
}
```

<h3>任务栏</h3>

```powershell
&{
# 元素左对齐
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v TaskbarAl /t REG_DWORD /d 0 /f

# 移除干扰元素
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v TaskbarDa /t REG_DWORD /d 0 /f
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v TaskbarMn /t REG_DWORD /d 0 /f
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v MMTaskbarMode /t REG_DWORD /d 2 /f

# Alt + Tab 不要切换 Edge 标签页
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v MultiTaskingAltTabFilter /t REG_DWORD /d 3 /f
}
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
