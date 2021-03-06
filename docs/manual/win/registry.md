# 注册表

:::note 使用 PE 系统修复注册表

打开“注册表编辑器”，注意只有 `HKLM` 和 `HKEY_USERS` 是可以
选菜单“文件”>“加载配置单元”来加载 `C:\WINDOWS\system32\config` 数据的。

:::

## 辅助工具

### 自动跳转

[安装](/docs/setup-mswin/advance/sysinternals) 来自 Sysinternals Suite 的 regjump 工具

import CodeType from '@theme/unique/CodeType'

<CodeType win cmd>

### 变化跟踪

</CodeType>

```batch
scoop bucket add nirsoft
scoop install registrychangesview

```

import GetPkg from '@theme/unique/GetPkg';

<GetPkg choco="registrychangesview" />

导出格式转换

```
scoop install https://cdn.jsdelivr.net/gh/littleboyharry-contrib/scoop-zapps@9f1034c903025832cbe53c587dff999df10d80f0/bucket/RegConvert.json
cmd /c reg add "HKCU\Software\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers" /v "%USERPROFILE%\scoop\apps\RegConvert\current\RegConvert.exe" /t REG_SZ /f /d "~ HIGHDPIAWARE"

```
