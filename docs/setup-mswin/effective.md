---
sidebar_position: 8
---

import CodeType from '@theme/unique/CodeType'

# 提高效率

## 库机制

 <CodeType cmd user>

添加到新的文件管理器窗口侧边栏：[介绍说明](https://sspai.com/post/41297)

</CodeType>

    reg add "HKCU\Software\Classes\CLSID\{031E4825-7B94-4dc3-B131-E946B44C8DD5}" /v System.IsPinnedToNameSpaceTree /t REG_DWORD /d 1 /f

### 例：管理开始菜单

使用“库”机制，易于管理开始菜单

1.  打开 “库”，新建一个名为 “开始菜单” 的库
2.  右键菜单 “属性” 编辑
3.  “添加” 并 “设置保存位置”：

        %APPDATA%\Microsoft\Windows\Start Menu\Programs

4.  “添加” 并 “设置公共保存位置”：( 后者是只读的，修改需要权限 )

        C:\ProgramData\Microsoft\Windows\Start Menu\Programs

把需要的快捷方式拖入库，即可添加项目到开始菜单！

## 访问键

import {HtmlA} from '@theme/unique/links';

通过按 `Alt + 字母` 的组合键，触发按钮或菜单项，以避免移动鼠标、改善效率。

<HtmlA href="ms-settings:easeofaccess-keyboard">设置 “辅助功能 > 键盘”</HtmlA>，
勾选“为访问键添加下划线”。可访问的元素都会有下划线标记的字母。

## 粘滞键

连按 5 次，激活粘滞键功能。1 次激活修饰键，2 次 锁定修饰键，3 次代替原来的单次按修饰键。使用前优化：

 <CodeType cmd>

    reg add "HKCU\Control Panel\Accessibility\StickyKeys" /v Flags /t REG_SZ /d 190 /f

</CodeType>
