---
title: Win11
sidebar_position: 16
---

## 任务栏

```powershell
# 元素左对齐
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v TaskbarAl /t REG_DWORD /d 0 /f

# 移除干扰元素
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v TaskbarDa /t REG_DWORD /d 0 /f
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v TaskbarMn /t REG_DWORD /d 0 /f
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v MMTaskbarMode /t REG_DWORD /d 2 /f

# Alt + Tab 不要切换 Edge 标签页
reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced /v MultiTaskingAltTabFilter /t REG_DWORD /d 3 /f

```

## 安装 Android 子系统

截至 2022 年，子系统仅在美区可以安装

打开<HtmlA href="ms-settings:regionlanguage">“语言和区域”设置</HtmlA>，
更改“国家或地区”为美国[^1]，
然后<MstoreLink id="9P3395VX91NR" name="从应用商店安装" />

[^1]: 从列表末 `PageUp` 上翻约 9\~10 次可以找到

import { HtmlA,MstoreLink } from '@theme/links';
