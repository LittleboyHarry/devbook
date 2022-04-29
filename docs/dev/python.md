## Windows

:::caution 请不要使用微软商店默认提供的版本！

截至 2022 年，商店提供的 Python 有严重问题
文件系统操作受沙箱机制保护导致幻写，不利于编程开发。
删除内置的 Python :

    rm $env:LOCALAPPDATA\Microsoft\WindowsApps\python\*.exe

使用 Scoop 安装：

    scoop install python
    # 更多版本
    scoop bucket add versions
    scoop search python

:::
