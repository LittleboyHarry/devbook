---
title: 捆绑服务
---

:::caution 请等待系统与应用升级完成

在所有应用更新和系统升级完成后，会安装上一些你不太需要的捆绑内容

:::

## 选择性卸载

打开 PowerShell

- OneDrive

      Get-AppxPackage -AllUsers *OneDriveSync* | Remove-AppxPackage

- 语音助手

      Get-AppxPackage -AllUsers Microsoft.Windows.Cortana | Remove-AppxPackage

- Office 引导

      Get-AppxPackage -AllUsers Microsoft.MicrosoftOfficeHub | Remove-AppxPackage

<div className="alert alert--secondary" role="alert">

## For Win11

卸载方法：

- 小组件

      winget uninstall "windows web experience pack"

- Microsoft Teams

      Get-AppxPackage -AllUsers *microsoftteams* | Remove-AppxPackage

</div>

## 检查启动项与服务

:::warn 如果你熟知这些服务的功能，且知晓可能的后果

打开任务管理器，点击“启动”面板，禁用启动影响高的无用项。

随后，切换到“服务”面板 > “打开服务”，关闭厂商为你附带的没用服务。

:::

对于普通人，推荐下载使用微软中国团队运营的[微软电脑管家](https://aka.ms/GetPCManagerOFL)
