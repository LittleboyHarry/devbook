---
description: ''
---

import PrefixIcon from '@theme/PrefixIcon';

# 文件资源管理器

 <PrefixIcon cmd >

## 推荐的优化

</PrefixIcon>

1. 多进程隔离，缓解崩溃问题
2. 显示扩展名
3. 路径自动补全
4. 创建快捷方式省去 “快捷方式” 字样
5. 复制文件省去 “副本” 字样
6. 导航栏显示最近的文件夹
7. 右键菜单优化
8. 优化打开方式列表
9. 低版本优化
10. 外观调优

\* 关闭并重启文件资源管理器生效

```powershell
# in cmd: @doskey #=REM
# 1:
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v SeparateProcess /t REG_DWORD /d 1 /f
# 2:
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v HideFileExt /t REG_DWORD /d 0 /f
# 3:
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\AutoComplete /v "Append Completion" /t REG_SZ /d yes /f
# 4:
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer /v link /t REG_BINARY /d 00000000 /f
# 5:
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\NamingTemplates /v CopyNameTemplate /t REG_SZ /d %s /f
# 6:
reg add "HKCU\SOFTWARE\Classes\CLSID\{22877A6D-37A1-461A-91B0-DBDA5AAEBC99}" /v System.IsPinnedToNamespaceTree /t REG_DWORD /d 1 /f
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\NewStartPanel /v "{22877A6D-37A1-461A-91B0-DBDA5AAEBC99}" /t REG_DWORD /d 1 /f
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Desktop\NameSpace\{22877A6D-37A1-461A-91B0-DBDA5AAEBC99}" /f
reg add "HKCU\Software\Classes\CLSID\{22877A6D-37A1-461A-91B0-DBDA5AAEBC99}\DefaultIcon" /ve /t REG_EXPAND_SZ /d "shell32.dll,316" /f
# 7:
foreach ($it in 'exefile', 'Msi.Package', 'lnkfile', 'batfile', 'cmdfile') {
    reg add HKCU\Software\Classes\$it\shellex\ContextMenuHandlers\Compatibility /ve /d '""' /f > $null
}
# 8:
foreach ($it in 'VSLauncher.exe', 'WINWORD.EXE', 'wmplayer.exe') {
    reg add HKCU\Software\Classes\Applications\$it /v NoOpenWith /t REG_SZ /d '""' /f > $null
}
# 9:
if ($PSVersionTable.PSVersion.Major -lt 4) {
    reg add HKCU\Software\Classes\*\shell\GetHash /v ProgrammaticAccessOnly /t REG_SZ /d '""' /f
    reg add HKCU\Software\Classes\*\shell\GetHash /v HideBasedOnVelocityId /t REG_DWORD /d 6527944 /f
    reg add HKCU\Software\Classes\*\shell\GetHash /v LegacyDisable /t REG_SZ /d '""' /f
}
# 10:
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v AutoCheckSelect /t REG_DWORD /d 1 /f
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v LaunchTo /t REG_DWORD /d 1 /f
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v UseCompactMode /t REG_DWORD /d 1 /f
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\CLSID\{F02C1A0D-BE21-4350-88B0-7367FC96EF3C}\DefaultIcon" /ve /t REG_SZ /d "shell32.dll,18" /f
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\CLSID\{031E4825-7B94-4DC3-B131-E946B44C8DD5}\DefaultIcon" /ve /t REG_SZ /d "explorer.exe" /f
if ([Environment]::OSVersion.Version.Build -lt 22621) {
    reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\CLSID\{679F85CB-0220-4080-B29B-5540CC05AAB6}\DefaultIcon" /ve /t REG_SZ /d "shell32.dll,213" /f
}
# *
kill -n explorer
```

<PrefixIcon reg>

## 增强经典右键菜单

</PrefixIcon>

包含：

- 文件：复制内容、哈希、获取权限、编辑隐藏属性
- 桌面壁纸右键菜单：重启资源管理器、电源计划、图标设置、屏保设置
- 电脑图标右键菜单：显示系统信息、UAC、编辑 HOSTS、刷新 DNS
- 特殊：编辑程序的防火墙规则、图片幻灯片播放、分区垃圾删除、分区碎片整理、注册 DLL/OCX

更多设置请下载 [菜单管理器](https://gitee.com/BluePointLilac/ContextMenuManager)

import CodeBlock from '@theme/CodeBlock';
import betterMenuRegCode from '!!raw-loader!./bettermenu.reg.ini';

<CodeBlock language="ini">{betterMenuRegCode}</CodeBlock>
