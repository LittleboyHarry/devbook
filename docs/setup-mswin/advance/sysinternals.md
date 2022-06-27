---
sidebar_position: 16
---

# Sysinternals

由微软出品的一组用于 Windows 的专业小程序。见[官方文档](https://docs.microsoft.com/zh-cn/sysinternals/)

## 管理面板类

### 自动加载管理

<GetPkg choco="autoruns" />

    reg add "HKCU\Software\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers" /v "C:\ProgramData\chocolatey\lib\AutoRuns\tools\Autoruns.exe" /t REG_SZ /d "~ HIGHDPIAWARE" /f

### 进程管理器

<GetPkg choco="procexp" />

## 监控视图类

### 进程监控器

<GetPkg choco="procmon" />

### TCP 连接监控

<GetPkg choco="tcpview" />

    reg add "HKCU\Software\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers" /v "C:\ProgramData\chocolatey\lib\TcpView\Tools\tcpview.exe" /t REG_SZ /d "~ HIGHDPIAWARE" /f

## 命令工具类

### 注册表跳转

<GetPkg choco="regjump" />

### 安全擦除文件

<GetPkg choco="sdelete" />

## 实用工具类

### [虚拟桌面](https://docs.microsoft.com/zh-cn/sysinternals/downloads/desktops)

为 XP 和 Win7 老系统桌面添加多工作空间支持

<p><LinkButton name="下载" icon={<DownloadIcon/>} href="https://download.sysinternals.com/files/Desktops.zip" outline /></p>

import { DownloadIcon } from '@theme/fai'
import { LinkButton } from '@theme/links';

:::note 全量安装

<GetPkg name="sysinternals" winget choco scoop />

:::

import GetPkg from '@theme/GetPkg';
