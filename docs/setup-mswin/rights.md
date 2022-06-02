---
title: 个人数字权利
sidebar_position: 5
---

等待所有系统与应用升级完成后，部分功能会与您签订商业契约、收集您的隐私以继续提供服务。

以管理员权限运行执行如下指令，解决问题：

## 微软内置应用

:::note 如果读者选择不需要这些服务

以管理员身份运行 PowerShell 执行：

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

- For Win10

  ```powershell
  # 语音助手 Cortana
  Get-AppxPackage -AllUsers Microsoft.Windows.Cortana | Remove-AppxPackage

  ```

- For Win11

  ```powershell
  # 语音助手 Cortana
  Get-AppxPackage -AllUsers Microsoft.549981C3F5F10 | Remove-AppxPackage

  # Microsoft Teams
  Get-AppxPackage -AllUsers *microsoftteams* | Remove-AppxPackage

  ```

:::

打开 “安全中心” > “病毒和威胁防护” 关闭自动提交样本

import FileItem from '@theme/FileItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox } from '@fortawesome/free-solid-svg-icons';

## 推荐火狐浏览器

<MstoreButton id="9NZVDKPMR9RD" name="从商店安装" />
&nbsp;或&nbsp;
<FileItem name="下载安装包" path="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=zh-CN" button icon={<FontAwesomeIcon icon={faBox} />}/>

:::info 附：

1. <a href="/docs/goodsoft/browser/firefox" target="_blank">使用说明</a>
2. <a href="/docs/goodsoft/browser/chromium#windows-安装" target="_blank">Chromium</a>

:::

## 屏蔽启动项与服务

管理员运行：

```powershell
Stop-Service "DiagTrack"
Set-Service "DiagTrack" -StartupType Disabled
```

没有用处的后台服务会不仅会收集数据，还会拖慢计算机运行速度

对于普通人，推荐使用微软中国团队运营的[微软电脑管家](https://aka.ms/GetPCManagerOFL)

:::caution 如果你熟知这些服务的功能，且知晓可能的后果：

打开任务管理器，点击“启动”面板，禁用启动影响高的无用项。

随后，切换到“服务”面板 > “打开服务”，关闭厂商为你附带的没用服务。

[参考脚本](https://github.com/Sycnex/Windows10Debloater/blob/a48b4d8dc501680e0edc31f840791c966d89d309/Windows10Debloater.ps1#L173)

:::

import {MstoreButton} from '@theme/links';
