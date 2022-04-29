---
title: 使用 Chocolatey
---

国内环境访问暂无中断

## 安装

管理员权限运行：

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

## 自动信任安装脚本

```powershell
choco feature enable -n allowGlobalConfirmation
```

## 推荐 psutils

```powershell
choco install psutils
```

## 搜索

https://community.chocolatey.org/packages
