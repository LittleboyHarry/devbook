---
sidebar_position: 7
---

import CodeType from '@theme/unique/CodeType'

# 个人数字权利

等待所有系统与应用升级完成后，部分功能会与您签订商业契约、收集您的隐私以继续提供服务。

:::note 国内非专业人士

推荐使用微软中国团队运营的[微软电脑管家](https://aka.ms/GetPCManagerOFL)

:::

<CodeType admin pwsh >

## 保留个人数据

</CodeType>

参考来源：[O&O ShutUp10++](https://www.oo-software.com/en/shutup10) 图形化免费软件

```powershell
# 广告
reg add HKLM\Software\Microsoft\Windows\CurrentVersion\AdvertisingInfo /v Enabled /t REG_DWORD /d 0 /f
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\AdvertisingInfo /v Enabled /t REG_DWORD /d 0 /f
reg delete HKCU\Software\Microsoft\Windows\CurrentVersion\AdvertisingInfo /v Id /f 2>&1 >NUL

# 广告：蓝牙数据分享
reg add HKLM\Software\Microsoft\PolicyManager\current\device\Bluetooth /v AllowAdvertising /t REG_DWORD /d 0 /f

# 同步：活动信息
reg add HKLM\Software\Policies\Microsoft\Windows\System /v UploadUserActivities /t REG_DWORD /d 0 /f

# 同步：剪贴板
reg add HKLM\Software\Policies\Microsoft\Windows\System /v AllowCrossDeviceClipboard /t REG_DWORD /d 0 /f

# 客户体验改善调查
reg add HKLM\SOFTWARE\Policies\Microsoft\SQMClient\Windows /v CEIPEnable /t REG_DWORD /d 0 /f

# 打字输入特征
reg add HKCU\Software\Microsoft\Input\TIPC /v Enabled /t REG_DWORD /d 0 /f

# 手写输入特征
reg add HKLM\Software\Policies\Microsoft\Windows\HandwritingErrorReports /v PreventHandwritingErrorReports /t REG_DWORD /d 1 /f
reg add HKLM\Software\Policies\Microsoft\Windows\TabletPC /v PreventHandwritingDataSharing /t REG_DWORD /d 1 /f

# Windows 安全中心：信息上报
reg add HKLM\Software\Policies\Microsoft\MRT /v DontReportInfectionInformation /t REG_DWORD /d 1 /f
reg add "HKLM\Software\Policies\Microsoft\Windows Defender\Spynet" /v SubmitSamplesConsent /t REG_DWORD /d 2 /f
reg add "HKLM\Software\Policies\Microsoft\Windows Defender\Spynet" /v SpyNetReporting /t REG_DWORD /d 0 /f

# Office 数据
reg add HKCU\Software\Policies\Microsoft\Office\Common\ClientTelemetry /v SendTelemetry /t REG_DWORD /d 3 /f
reg add HKCU\Software\Microsoft\Office\Common\ClientTelemetry /v DisableTelemetry /t REG_DWORD /d 1 /f

# Cortana 语音助手
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Windows Search" /v CortanaConsent /t REG_DWORD /d 0 /f

# 用户数据收集
reg add HKLM\Software\Policies\Microsoft\Windows\DataCollection /v AllowTelemetry /t REG_DWORD /d 0 /f
reg add HKLM\Software\Policies\Microsoft\Windows\AppCompat /v AITEnable /t REG_DWORD /d 0 /f
reg add HKLM\Software\Microsoft\Windows\CurrentVersion\Privacy /v TailoredExperiencesWithDiagnosticDataEnabled /t REG_DWORD /d 0 /f
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Privacy /v TailoredExperiencesWithDiagnosticDataEnabled /t REG_DWORD /d 0 /f
reg add HKCU\SOFTWARE\Microsoft\Siuf\Rules /v NumberOfSIUFInPeriod /t REG_DWORD /d 0 /f
reg add HKCU\SOFTWARE\Microsoft\Siuf\Rules /v PeriodInNanoSeconds /t REG_DWORD /d 0 /f

```

<CodeType admin pwsh >

## 屏蔽服务与启动项

</CodeType>

这些的后台服务会收集数据，并影响计算机运行速度

```powershell
function Disable-Service {
    param([String]$name)
    if ((Get-Service $name -ea si) -and ((Get-Service $name).StartType -ne 'Disabled')) {
        & sc.exe stop $name > $null
        & sc.exe config $name start=disabled > $null
        echo $name
    }
}

# 个人数据收集
'dmwappushservice', 'DiagTrack' | % { Disable-Service $_ }
# 没用的兼容性检测、错误报告服务
'PcaSvc', 'WerSvc' | % { Disable-Service $_ }

# 禁用任务计划：个人数据收集
function Disable-DefaultTask {
    param([String]$name)
    Get-ScheduledTask -TaskName $name | Disable-ScheduledTask -ErrorAction SilentlyContinue
}

'Consolidator', 'UsbCeip', 'DmClient', 'DmClientOnScenarioDownload' | ForEach-Object { Disable-DefaultTask $_ }

```

XBox 相关：

```powershell
'XblAuthManager', 'XblGameSave', 'XboxGipSvc', 'XboxNetApiSvc' | % { Disable-Service $_ }
Disable-DefaultTask XblGameSaveTask
```

## 微软内置应用

<CodeType admin pwsh >

一键移除：

</CodeType>

```powershell
# OneDrive
Get-AppxPackage -AllUsers *OneDriveSync* | Remove-AppxPackage
Stop-Process -Name OneDrive
if (Test-Path "$env:systemroot\System32\OneDriveSetup.exe") { & "$env:systemroot\System32\OneDriveSetup.exe" /uninstall }
if (Test-Path "$env:systemroot\SysWOW64\OneDriveSetup.exe") { & "$env:systemroot\SysWOW64\OneDriveSetup.exe" /uninstall }

# Office 引导
Get-AppxPackage -AllUsers Microsoft.MicrosoftOfficeHub | Remove-AppxPackage

# Powershell ISE ( VSCode 代替 )
Dism /Online /Remove-Capability /NoRestart /CapabilityName:Microsoft.Windows.PowerShell.ISE

```

 <PreferWinVer win10 win11 ><br/>
<ForWin10>

```powershell
# 语音助手 Cortana
Get-AppxPackage -AllUsers Microsoft.Windows.Cortana | Remove-AppxPackage

# 隐藏人脉图标
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced\People /v PeopleBand /t REG_DWORD /d 0 /f

```

</ForWin10>
<ForWin11>

```powershell
# 禁用小组件
reg add HKLM\SOFTWARE\Policies\Microsoft\Dsh /v AllowNewsAndInterests /t REG_DWORD /d 0 /f

# 语音助手 Cortana
Get-AppxPackage -AllUsers Microsoft.549981C3F5F10 | Remove-AppxPackage

# Microsoft Teams
Get-AppxPackage -AllUsers *microsoftteams* | Remove-AppxPackage

```

</ForWin11>
</PreferWinVer>

关闭自动病毒样本提交：

1. 打开 “Windows 安全中心”
2. 选择 “病毒和威胁防护”
3. 点击 （ “病毒和威胁防护”设置 ）“管理设置”
4. 关闭“自动提交样本”，可忽略警号提醒

import FileItem from '@theme/unique/FileItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox } from '@fortawesome/free-solid-svg-icons';

## 其它浏览器

<p>
Firefox: 下载&emsp;
<FileItem name="安装包" path="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=zh-CN" button icon={<FontAwesomeIcon icon={faBox} />}/>
{/*
或
<StoreButton to={mslink`9NZVDKPMR9RD`} text="从商店安装" />
 */}
</p>

附：

1. <a href="/docs/goodsoft/firefox/config" target="_blank">使用说明</a>
2. <a href="/docs/goodsoft/chromium" target="_blank">Chromium</a>

<!-- [参考脚本](https://github.com/Sycnex/Windows10Debloater/blob/a48b4d8dc501680e0edc31f840791c966d89d309/Windows10Debloater.ps1#L173) -->

import {
PreferWinVer,
ForWin10,
ForWin11
} from '@theme/unique/PreferWinVer'
import { StoreButton, mslink } from '@theme/unique/links'
