
# 制作绿化软件

本文以 Windows 应用沙盒化为例（专业版功能）

<CodeType cmd admin>

    Dism /online /Enable-Feature /All /FeatureName:Containers-DisposableClientVM

</CodeType>

内外界交换文件或数据的方法：Ctrl + C / V 复制、粘贴

最大化窗口：通过拉动置顶而非点击按钮

制作工具：

- [FolderChangesView](https://www.nirsoft.net/utils/folder_changes_view.html): 监控文件夹变更
- [RegistryChangesView](https://www.nirsoft.net/utils/registry_changes_view.html): 分析注册表变化

文件夹监控开始前勾选 `folder summary mode` 简化结果视图

留意：

<div className="autoselect-cell-of-table">

| 文件夹                              | 作用               |
| ----------------------------------- | ------------------ |
| C:\Program Files (x86)              | 应用数据           |
| C:\Users\Public\Desktop             | 桌面快捷方式       |
| C:\Users\WDAGUtilityAccount\AppData | 数据复用、状态保存 |
| C:\Users\WDAGUtilityAccount\Desktop | 桌面映射           |

</div>

## 支持中文输入法

```xml
<Configuration>
  ...
  <MappedFolders>
    <MappedFolder>
      <HostFolder> ... 脚本路径 ... </HostFolder>
      <SandboxFolder>C:\autorun\main.ps1</SandboxFolder>
      <ReadOnly>true</ReadOnly>
    </MappedFolder>
    <MappedFolder>
      <HostFolder>C:\Windows\Microsoft.NET\assembly\GAC_MSIL\Microsoft.InternationalSettings.Commands</HostFolder>
      <SandboxFolder>C:\Windows\Microsoft.NET\assembly\GAC_MSIL\Microsoft.InternationalSettings.Commands</SandboxFolder>
      <ReadOnly>true</ReadOnly>
    </MappedFolder>
  </MappedFolders>
    <LogonCommand>
      <Command>powershell -executionpolicy unrestricted -file C:\autorun\main.ps1</Command>
    </LogonCommand>
</Configuration>
```

脚本：

```powershell
$LanguageList = Get-WinUserLanguageList
$LanguageList.Add("zh-CN")
Set-WinUserLanguageList $LanguageList -Force
```

## 相关文档

- https://docs.microsoft.com/zh-cn/windows/security/threat-protection/windows-sandbox/windows-sandbox-architecture
- https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-sandbox/windows-sandbox-configure-using-wsb-file

import CodeType from '@theme/CodeType'
