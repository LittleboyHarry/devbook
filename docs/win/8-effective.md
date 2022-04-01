---
title: 提高效率
---

## 库机制

快速激活代码：（激活后重新打开文件管理器，左方列表可见）

    reg add "HKCU\Software\Classes\CLSID\{031E4825-7B94-4dc3-B131-E946B44C8DD5}" /v System.IsPinnedToNameSpaceTree /t REG_DWORD /d 1 /f

[“库”有什么用？](https://sspai.com/post/41297)

### 管理开始菜单应用

使用“库”机制，能容易管理开始菜单内容。
我们进入库，新建一个命名为“开始菜单”的库，编辑其属性。“添加”并“设置保存位置”：

    %APPDATA%\Microsoft\Windows\Start Menu\Programs

继续“添加”并“设置公共保存位置”：（后者是只读的，修改需要提权）

    C:\ProgramData\Microsoft\Windows\Start Menu\Programs

以后把需要的快捷方式都拖入库，即可轻松添加到开始菜单了！

## 访问键

要用键盘组合键来触发菜单项或按钮来提高效率，可使用访问键。运行设置：

    ms-settings:easeofaccess-keyboard

勾选“为访问键添加下划线”，这样的话，任何程序内的访问键字母都会有下划线标记。
按住 `Alt + 字母` 就能触发操作
