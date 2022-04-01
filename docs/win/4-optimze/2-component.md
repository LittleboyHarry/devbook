---
title: 组件调优
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

 <div className="alert alert--secondary" role="alert">

## For Win10

配置硬盘自动清理：使用“存储感知”功能

    ms-settings:storagepolicies

</div>


## 开始菜单

:::info 需要管理员权限运行

:::

```powershell
icm {
# 不使用内置搜索服务，因为它影响性能
sc.exe stop "wsearch"
sc.exe config "wsearch" start=disabled
echo '' '推荐代替品：'
echo 'winget install -e "Everything Lite"'

# 不要显示网页搜索结果
reg add HKCU\SOFTWARE\Policies\Microsoft\Windows\Explorer /v DisableSearchBoxSuggestions /t REG_DWORD /f /d 1
echo '' '重启 explorer.exe 生效' ''
}

```
