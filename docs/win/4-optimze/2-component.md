---
title: 组件微调
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

## 色彩反转

适用于尚未适配深色模式的应用：按下 `Win + Ctrl + C` 反转色彩为黑白色

```
reg add HKCU\Software\Microsoft\ColorFiltering /v HotkeyEnabled /t REG_DWORD /d 1 /f
reg add HKCU\Software\Microsoft\ColorFiltering /v FilterType /t REG_DWORD /d 2 /f

```

## 字体模糊？

若渲染效果不满，使用调整工具：

    cttune

## 开始菜单

:::caution 指令需要管理员权限运行

```powershell
# 不使用内置搜索服务，因为它影响性能
sc.exe stop "wsearch"
sc.exe config "wsearch" start=disabled

# 不要显示网页搜索结果
reg add HKCU\SOFTWARE\Policies\Microsoft\Windows\Explorer /v DisableSearchBoxSuggestions /t REG_DWORD /f /d 1
# 推荐使用后文介绍的 Everything 代替

```

重新登陆后生效

:::
