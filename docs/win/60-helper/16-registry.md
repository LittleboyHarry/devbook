---
title: 注册表
---

## 辅助工具

### 自动跳转

[安装](../dev/sysinternals) 来自 Sysinternals Suite 的 regjump 工具

### 变化跟踪

```bat
scoop bucket add nirsoft
scoop install registrychangesview

```

导出格式转换

```
scoop install https://cdn.jsdelivr.net/gh/littleboyharry-contrib/scoop-zapps@9f1034c903025832cbe53c587dff999df10d80f0/bucket/RegConvert.json
cmd /c reg add "HKCU\Software\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers" /v "%USERPROFILE%\scoop\apps\RegConvert\current\RegConvert.exe" /t REG_SZ /f /d "~ HIGHDPIAWARE"

```
