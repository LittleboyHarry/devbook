---
sidebar_position: 2
description: ...
---

import CodeType from '@theme/unique/CodeType';
import CodeBlock from '@theme/CodeBlock';

# 文件资源管理器

<CodeType reg user restart='explorer'>

## 一键优化

</CodeType>

import optimizeRegCode from '!!raw-loader!./explorer.reg';

<CodeBlock language="ini">{optimizeRegCode}</CodeBlock>

7. 右键菜单优化
8. 优化打开方式列表
9. 低版本优化
10. 外观调优

```powershell
# in cmd: @doskey #=REM
# 6:
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
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\CLSID\{F02C1A0D-BE21-4350-88B0-7367FC96EF3C}\DefaultIcon" /ve /t REG_SZ /d "shell32.dll,18" /f
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\CLSID\{031E4825-7B94-4DC3-B131-E946B44C8DD5}\DefaultIcon" /ve /t REG_SZ /d "explorer.exe" /f
if ([Environment]::OSVersion.Version.Build -lt 22621) {
    reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\CLSID\{679F85CB-0220-4080-B29B-5540CC05AAB6}\DefaultIcon" /ve /t REG_SZ /d "shell32.dll,213" /f
}
# *
kill -n explorer
```
