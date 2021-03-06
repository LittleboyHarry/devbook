---
sidebar_position: 4
---

import CodeType from '@theme/unique/CodeType'

# 输入法与键盘

## 微软拼音输入法

 <CodeType cmd user>

### 外观优化

</CodeType>

放大字号、限制 5 个候选词

```batch
reg add HKCU\Software\Microsoft\InputMethod\CandidateWindow\CHS\1 /v MaxCandidates /t REG_DWORD /d 5 /f
reg add HKCU\Software\Microsoft\InputMethod\CandidateWindow\CHS\1 /v FontStyleTSF3 /t REG_SZ /d "22.00pt;Regular;;Microsoft YaHei UI" /f

```

 <details className="let-details-to-gray" ><summary>

### 使用小鹤双拼

</summary>

 <CodeType cmd user>

来自知乎知识分享：[双拼的好处](https://www.zhihu.com/question/21449398)
与 [练习方法](https://www.zhihu.com/question/311394000)

</CodeType>

```batch
reg add "HKCU\SOFTWARE\Microsoft\InputMethod\Settings\CHS" /v "EnableExtraDomainType" /t REG_DWORD /f /d 1
reg add "HKCU\SOFTWARE\Microsoft\InputMethod\Settings\CHS" /v "Enable Double Pinyin" /t REG_DWORD /f /d 1
reg add "HKCU\SOFTWARE\Microsoft\InputMethod\Settings\CHS" /v "DoublePinyinScheme" /t REG_DWORD /f /d 10
reg add "HKCU\SOFTWARE\Microsoft\InputMethod\Settings\CHS" /v "UserDefinedDoublePinyinScheme0" /t REG_SZ /f /d "小鹤双拼*2*^*iuvdjhcwfg^xmlnpbksqszxkrltvyovt"

```

</details>

## 修改键位映射

作者推荐的<a href="/docs/devenv/keymap#windows" target="_blank">新键盘布局</a>

- 仿 Mac 修饰键顺序：Win, Alt, Ctrl
- 交换 Esc 与 CapsLock
