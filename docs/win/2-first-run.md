---
title: 开始
---

## 家庭版

### 更改用户

Win 11 安装时，系统把你登录的微软账号作为用户名，有些毛病：

- 需要麻烦的在线登录
- 默认目录名路径难记

如果不满意，运行 `netplwiz.cpl` 创建新用户，并添加为管理员。注销切换到新用户后 `netplwiz.cpl` 可以删除老用户。操作要趁早！

## 专业版

设置计算机名：开始菜单搜索 `name` 关键词

## 设置登录方式

设置 PIN 和指纹（如果有）

## 禁用拖慢开机的启动项

打开任务管理器的启动面板，选择你认为没用的软件以禁用

## 设置还原点备份

运行 `SystemPropertiesProtection` 配置启动系统保护，预留一定的磁盘空间使用量，然后创建初始还原点

## 双系统

关闭快速启动

    reg add "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Power" /v HiberbootEnabled /t REG_DWORD /f /d 0

:::info 上述指令需要管理员权限

`Win + R` 运行对话框，可按下 `Ctrl + Shift + Enter` 提权运行

:::

## 删除不需要的捆绑应用

打开 PowerShell

- Microsoft Teams

      Get-AppxPackage -AllUsers *microsoftteams* | Remove-AppxPackage

- OneDrive

      Get-AppxPackage -AllUsers *OneDriveSync* | Remove-AppxPackage

- 语音助手

      Get-AppxPackage -AllUsers Microsoft.Windows.Cortana | Remove-AppxPackage

- Office 引导

      Get-AppxPackage -AllUsers Microsoft.MicrosoftOfficeHub | Remove-AppxPackage

- 小组件

      winget uninstall "windows web experience pack"

## 答疑

Q: 非 zip 的压缩文件格式不支持，打不开？

安装广受好评的 7z 便携版解压器: https://portableapps.com/apps/utilities/7-zip_portable

Q: 硬盘有必要分区？怎样分区？

A:
在我看来，2022 年已经没有故意分区的必要性，除非装双系统。
对固态硬盘而言，软件同操作系统装在 C 盘上能得到很好的使用体验。
定期使用云盘或[装入硬盘盒的机械硬盘](https://search.jd.com/Search?keyword=%E6%9C%BA%E6%A2%B0%E7%A1%AC%E7%9B%98%E7%9B%92&enc=utf-8)备份重要数据更加靠谱。

Q: 微软商店无法联网？

A: 使用 114 抗干扰 DNS

Q: 重装系统里没有 Office

A: 如果你已经在线激活过 Office:

<a className="button button--lg button--primary" href="https://account.microsoft.com/services#:~:text=%E5%B7%B2%E8%B4%AD%E4%B9%B0%E7%9A%84%E4%BA%A7%E5%93%81" target="_blank">登录微软账号并下载安装</a>
