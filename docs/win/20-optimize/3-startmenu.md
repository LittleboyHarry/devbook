---
title: 开始菜单
---

:::info 下列指令需要管理员身份运行

:::

### 我不需要在开始菜单中搜索网页内容

    reg add HKCU\SOFTWARE\Policies\Microsoft\Windows\Explorer /v DisableSearchBoxSuggestions /t REG_DWORD /f /d 1

重启 `explorer.exe` 生效

### 使用 Everything 优化替代糟糕的内置搜索引擎

```bat
sc.exe stop "wsearch"
sc.exe config "wsearch" start=disabled

winget install -e 'Everything Lite'

```
