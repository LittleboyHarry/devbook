---
title: SDK 安装 by scoop
sidebar_position: 32
---

scoop 安装 SDK 可选择多种版本

    scoop bucket add versions

## Java

17，11，8 都是 LTS 版本

```
scoop search jdk

scoop install ?
```

常见的 openjdk 发行版：

- [openjdk](http://openjdk.java.net/) 原版
- [Dragonwell](https://www.aliyun.com/product/dragonwell) 阿里云计算出品
- [微软版](https://www.microsoft.com/openjdk)

## Python

```
scoop search python

scoop install python?
```

:::caution 请不要使用微软商店默认提供的版本！

截至 2022 年，商店提供的 Python 有严重问题
文件系统操作受沙箱机制保护导致幻写，不利于编程开发。
删除内置的 Python :

    rm $env:LOCALAPPDATA\Microsoft\WindowsApps\python*.exe

:::
