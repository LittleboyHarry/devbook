---
title: 文件管理器
---

## 推荐优化

```bat
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v LaunchTo /t REG_DWORD /d 1 /f
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v AutoCheckSelect /t REG_DWORD /d 1 /f
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v SeparateProcess /t REG_DWORD /d 1 /f
```

## 显示扩展名

    reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v HideFileExt /t REG_DWORD /d 0 /f

刷新以生效
