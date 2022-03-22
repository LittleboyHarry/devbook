---
title: 专注
---

## 改用 Brave 浏览器

下载：https://laptop-updates.brave.com/latest/winx64

## 调整动态锁屏壁纸

不显示说明字幕：

    reg add HKCU\Software\Microsoft\Windows\CurrentVersion\ContentDeliveryManager /v RotatingLockScreenOverlayEnabled /t REG_DWORD /d 0 /f

固定锁屏壁纸不变：

    reg add HKCU\Software\Microsoft\Windows\CurrentVersion\ContentDeliveryManager /v RotatingLockScreenEnabled /t REG_DWORD /d 0 /f
