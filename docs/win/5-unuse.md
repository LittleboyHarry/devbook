---
title: 捆绑服务
---

:::caution 请等待系统与应用升级完成

在所有应用更新和系统升级完成后，会安装上一些你不太需要的捆绑内容

:::

## 选择性卸载

以管理员身份运行 PowerShell

```powershell
# OneDrive
Get-AppxPackage -AllUsers *OneDriveSync* | Remove-AppxPackage

# Office 引导
Get-AppxPackage -AllUsers Microsoft.MicrosoftOfficeHub | Remove-AppxPackage

# Powershell ISE ( VSCode 代替 )
Dism /Online /Remove-Capability /NoRestart /CapabilityName:Microsoft.Windows.PowerShell.ISE

```

 <div className="alert alert--secondary" role="alert">

## For Win10

```powershell
# 语音助手 Cortana
Get-AppxPackage -AllUsers Microsoft.Windows.Cortana | Remove-AppxPackage

```

## For Win11

```powershell
# 语音助手 Cortana
winget uninstall Microsoft.549981C3F5F10_8wekyb3d8bbwe

# Microsoft Teams
Get-AppxPackage -AllUsers *microsoftteams* | Remove-AppxPackage

```

</div>

## 检查启动项与服务

:::caution 如果你熟知这些服务的功能，且知晓可能的后果

打开任务管理器，点击“启动”面板，禁用启动影响高的无用项。

随后，切换到“服务”面板 > “打开服务”，关闭厂商为你附带的没用服务。

:::

对于普通人，推荐下载使用微软中国团队运营的[微软电脑管家](https://aka.ms/GetPCManagerOFL)
