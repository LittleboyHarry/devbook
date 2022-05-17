---
title: 个人数字权利
---

等待所有系统与应用升级完成后，部分功能会与您签订商业契约、收集您的隐私以继续提供服务。

:::caution 以管理员权限运行

执行如下指令

:::

## 微软内置应用

:::note 如果读者选择不需要这些服务

以管理员身份运行 PowerShell 执行：

```powershell
# OneDrive
Get-AppxPackage -AllUsers *OneDriveSync* | Remove-AppxPackage
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

import FileItem from '@theme/FileItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox } from '@fortawesome/free-solid-svg-icons';

:::info 推荐使用火狐浏览器

[使用说明](/docs/goodsoft/browser/firefox)

<MstoreButton id="9NZVDKPMR9RD" name="从商店安装" />
or &nbsp;
<FileItem name="下载安装包" path="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=zh-CN" button icon={<FontAwesomeIcon icon={faBox} />}/>

:::

## 屏蔽启动项与服务

没有用处的后台服务会不仅会收集数据，还会拖慢计算机运行速度

对于普通人，推荐使用微软中国团队运营的[微软电脑管家](https://aka.ms/GetPCManagerOFL)

:::caution 如果你熟知这些服务的功能，且知晓可能的后果：
:::

打开任务管理器，点击“启动”面板，禁用启动影响高的无用项。

随后，切换到“服务”面板 > “打开服务”，关闭厂商为你附带的没用服务。

import {MstoreButton} from '@theme/links';
