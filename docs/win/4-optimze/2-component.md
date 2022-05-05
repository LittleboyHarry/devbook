---
title: 调整组件
---

作者推荐的常用优化：

## 文件管理器

```powershell
# 显示扩展名（刷新视图以生效）
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v HideFileExt /t REG_DWORD /d 0 /f

# 多进程隔离（可避免整体性崩溃）
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v SeparateProcess /t REG_DWORD /d 1 /f

# 外观调优
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v AutoCheckSelect /t REG_DWORD /d 1 /f
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v LaunchTo /t REG_DWORD /d 1 /f

```

## 锁屏界面

动态壁纸的禁用方法

    reg add HKCU\Software\Microsoft\Windows\CurrentVersion\ContentDeliveryManager /v RotatingLockScreenEnabled /t REG_DWORD /d 0 /f

## 自动清理

import {HtmlA} from '@theme/links';

<HtmlA href="ms-settings:storagepolicies">设置“存储感知”</HtmlA>

## 开始菜单

:::info 需要管理员权限运行

:::

```powershell
icm {
# 不使用内置搜索服务，因为它影响性能
sc.exe stop "wsearch"
sc.exe config "wsearch" start=disabled

# 不要显示网页搜索结果
reg add HKCU\SOFTWARE\Policies\Microsoft\Windows\Explorer /v DisableSearchBoxSuggestions /t REG_DWORD /f /d 1
echo '' '重启 explorer.exe 生效' ''
}

```

## 色彩反转

```
reg add HKCU\Software\Microsoft\ColorFiltering /v HotkeyEnabled /t REG_DWORD /d 1 /f
reg add HKCU\Software\Microsoft\ColorFiltering /v FilterType /t REG_DWORD /d 2 /f

```

按下 `Win + Ctrl + C` 反转色彩为黑白色（很适用于还没适配深色模式的应用程序）


## 字体渲染

若显示器字体模糊，执行 `cttune` 进行调整
