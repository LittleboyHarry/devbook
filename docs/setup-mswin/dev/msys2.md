---
sidebar_position: 20
---

# MSYS2 开发环境

## 安装

import GetPkg from '@theme/GetPkg'

<GetPkg name='msys2' winget />

import { LinkButton } from '@theme/links';

<p>
<LinkButton icon name="国内镜像站" outline href="https://mirrorz.org/list/msys2" />
</p>

安装过程建议**断网避免更新**

降低存储占用空间：打开 `C:\msys64` 文件夹属性，高级 > 压缩...确定，“应用于子文件夹...” 确定

## 改用国内镜像站

```bash
# 备份：
(cd /etc/pacman.d/;mkdir old;cp mirrorlist.* old)
# 恢复：
# (cd /etc/pacman.d/old;cp * ../)

# 检索可用服务器，Tier 1 为高可用性服务器
grep \\.cn\\\|ier /etc/pacman.d/mirrorlist.msys | cut -d/ -f 3
```

如使用中科大镜像站更新：

```bash
sed -i '/mirrors.ustc.edu.cn/!d' /etc/pacman.d/mirrorlist.*
pacman -Syyu --noconfirm
```

## 自动部署工具

开发必装：

    pacman -S --noconfirm base-devel git man-db

import Require from '/docs/\_deployworkenv.md'

<Require />

安装：zsh

```powershell
zsh/setup

# gitee 镜像安装：
cn/setup-zsh

# 更换默认 Shell
sed -i '/LOGINSHELL=/ s/bash/zsh/' /msys2_shell.cmd
```

## 调整终端

### 编辑 Mintty 配置文件

方法一（ 自动调整 ）：在 MSYS2 终端内运行 `nano ~/.minttyrc` 粘贴内容

import MinttyRc from './_minttyrc.md'

<MinttyRc/>

### 添加到 Windows Terminal

`.profiles.list` 新元素：

```json
{
  "guid": "{71160544-14d8-4194-af25-d05feeac7233}",
  "name": "MSYS / MSYS2",
  "commandline": "C:/msys64/msys2_shell.cmd -defterm -here -no-start -msys",
  "icon": "C:/msys64/msys2.ico"
  //"startingDirectory": "C:/msys64/home/%USERNAME%",
}
```

## 备份

使用压缩软件打包 `C:\msys64` 整个目录内的文件

## 开发环境

<!--
### [QT](https://wiki.qt.io/MSYS2)

可选事项：qt5 或 qt6, clang

```bash
# 基础
pacman -S --noconfirm mingw-w64-x86_64-toolchain mingw-w64-x86_64-qt-creator cmake

# 选择 Qt 版本
pacman -S --noconfirm mingw-w64-x86_64-qt5
pacman -S --noconfirm mingw-w64-x86_64-qt6

# 选择编译器
pacman -S --noconfirm mingw-w64-clang-x86_64-clang

```
-->

:::note 添加快捷方式

路径名：

    C:\msys64\mingw64.exe start qtcreator

更改图标：

    C:\msys64\mingw64\bin\qtcreator.exe

:::

开发新建项目的 Kit Selection：搜索 mingw64 或 clang64，选择 shared，点击详情选择 qt5 或 qt6
