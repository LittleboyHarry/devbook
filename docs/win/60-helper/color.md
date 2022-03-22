---
title: 色彩
---

## 黑白反转

```
reg add HKCU\Software\Microsoft\ColorFiltering /v HotkeyEnabled /t REG_DWORD /d 1 /f
reg add HKCU\Software\Microsoft\ColorFiltering /v FilterType /t REG_DWORD /d 2 /f

```

按下 `Win + Ctrl + C` 反转颜色，适用于还没适配深色模式的应用程序
