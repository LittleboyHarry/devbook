---
title: 键盘与输入法
---

推荐配置

:::tip 为码字需求者推荐

<a href="/docs/dev/keymap#windows" target="_blank">更改键盘布局</a>

:::

## 微软拼音输入法

### 外观优化

:::info 放大字号、限制 5 个候选词

```
reg add HKCU\Software\Microsoft\InputMethod\CandidateWindow\CHS\1 /v MaxCandidates /t REG_DWORD /d 5 /f
reg add HKCU\Software\Microsoft\InputMethod\CandidateWindow\CHS\1 /v FontStyleTSF3 /t REG_SZ /d "18.00pt;Regular;;Microsoft YaHei UI" /f

```

:::

### 使用小鹤双拼

双拼作用: https://www.zhihu.com/question/21449398

练习方法: https://www.zhihu.com/question/311394000

```bat
reg add "HKCU\SOFTWARE\Microsoft\InputMethod\Settings\CHS" /v "EnableExtraDomainType" /t REG_DWORD /f /d 1
reg add "HKCU\SOFTWARE\Microsoft\InputMethod\Settings\CHS" /v "Enable Double Pinyin" /t REG_DWORD /f /d 1
reg add "HKCU\SOFTWARE\Microsoft\InputMethod\Settings\CHS" /v "DoublePinyinScheme" /t REG_DWORD /f /d 10
reg add "HKCU\SOFTWARE\Microsoft\InputMethod\Settings\CHS" /v "UserDefinedDoublePinyinScheme0" /t REG_SZ /f /d "小鹤双拼*2*^*iuvdjhcwfg^xmlnpbksqszxkrltvyovt"

```
