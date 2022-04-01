---
title: 捆绑服务
---

:::caution 先等待系统与应用升级完成

在系统初始升级和所有应用更新完成后，会安装上一些你不太需要的捆绑内容

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

打开任务管理器，关闭已知且无用的启动项与服务
