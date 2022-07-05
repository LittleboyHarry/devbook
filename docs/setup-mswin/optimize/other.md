---
description: ''
---

import CodeType from '@theme/CodeType';

# 其他

## 锁屏界面

 <CodeType cmd user>

禁用联网动态壁纸

</CodeType>

```batch
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\ContentDeliveryManager /v RotatingLockScreenEnabled /t REG_DWORD /d 0 /f

```

## 色彩反转

 <CodeType cmd user>

适用于尚未适配深色模式的应用：按下 `Win + Ctrl + C` 反转色彩为黑白色

</CodeType>

```batch
reg add HKCU\Software\Microsoft\ColorFiltering /v HotkeyEnabled /t REG_DWORD /d 1 /f
reg add HKCU\Software\Microsoft\ColorFiltering /v FilterType /t REG_DWORD /d 2 /f

```

 <CodeType admin >

## 字体调整

</CodeType>

若字体模糊不清晰，使用 `cttune` 工具调整

<p><a href="/docs/devenv/font" target="_blank">更多推荐字体</a></p>

 <CodeType cmd admin>

## 启动画面

</CodeType>

```powershell
# 新版启动图标
reg add HKLM\System\ControlSet001\Control\BootControl /v BootProgressAnimation /t REG_DWORD /d 1 /f
# 审计：每次登录后确认上次登录时间
# reg add HKLM\Software\Microsoft\Windows\CurrentVersion\Policies\System /v DisplayLastLogonInfo /t REG_DWORD /d 1 /f

```

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

 <CodeType cmd admin>

执行：

</CodeType>

```powershell
# 其他
reg add HKLM\SOFTWARE\Policies\Microsoft\MicrosoftEdge /v PreventFirstRunPage /t REG_DWORD /d 0 /f
reg add HKLM\SOFTWARE\Policies\Microsoft\WindowsMediaPlayer /v GroupPrivacyAcceptance /t REG_DWORD /d 1 /f

```

 <PreferWinVer win10 win11 >
<ForWin10>

<h3>自动清理</h3>

设置<HtmlA href="ms-settings:storagepolicies">“存储感知”</HtmlA>

</ForWin10>
<ForWin11>

<h3>右键菜单模式</h3>

```powershell
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

```

</ForWin11>
</PreferWinVer>

以上内容部分参考来自 DISM++ 应用程序

import {
PreferWinVer,
ForWin10,
ForWin11
} from '@theme/PreferWinVer'
import {HtmlA} from '@theme/links'
