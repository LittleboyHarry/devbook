---
title: 任务栏
---

## 对 Windows 11

### 减少干扰

```bat
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v TaskbarDa /t REG_DWORD /d 0 /f
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v TaskbarMn /t REG_DWORD /d 0 /f
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v MMTaskbarMode /t REG_DWORD /d 2 /f

```

### 左对齐图标

    reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v TaskbarAl /t REG_DWORD /d 0 /f
