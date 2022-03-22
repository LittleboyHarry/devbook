---
title: 键盘与输入法
---

为中文输入推荐：

## 使用小鹤双拼

双拼作用: https://www.zhihu.com/question/21449398

练习方法: https://www.zhihu.com/question/311394000

```bat
reg add "HKCU\SOFTWARE\Microsoft\InputMethod\Settings\CHS" /v "EnableExtraDomainType" /t REG_DWORD /f /d 1
reg add "HKCU\SOFTWARE\Microsoft\InputMethod\Settings\CHS" /v "Enable Double Pinyin" /t REG_DWORD /f /d 1
reg add "HKCU\SOFTWARE\Microsoft\InputMethod\Settings\CHS" /v "DoublePinyinScheme" /t REG_DWORD /f /d 10
reg add "HKCU\SOFTWARE\Microsoft\InputMethod\Settings\CHS" /v "UserDefinedDoublePinyinScheme0" /t REG_SZ /f /d "小鹤双拼*2*^*iuvdjhcwfg^xmlnpbksqszxkrltvyovt"

```

为编程推荐：

## 避免组合键冲突

微软拼音问题：

:::note 切换繁体快捷键

解锁 `Ctrl + Shift + F` 占用

    reg add "HKCU\Software\Microsoft\InputMethod\Settings\CHS" /v "EnableSimplifiedTraditionalOutputSwitch" /t REG_DWORD /d "0" /f

:::

:::note 中英文切换

限定 `Shift` 才能切换，解除 `Ctrl + Space` 占用

    reg add "HKCU\Software\Microsoft\InputMethod\Settings\CHS" /v "English Switch Key" /t REG_DWORD /d "4" /f
:::

:::note 标点切换键

关闭 `Ctrl + .` 占用

    reg add "HKCU\Software\Microsoft\InputMethod\Settings\CHS" /v "EnableChineseEnglishPunctuationSwitch" /t REG_DWORD /d "0" /f

:::

其他如输入法等国产软件，自行打开设置面板关闭无用快捷键。

## 改键布局

为大量打字需求者[推荐](../dev/keymap#windows)
