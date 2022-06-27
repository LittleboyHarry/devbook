---
sidebar_position: 17
---

# VBox Arch 云镜像

## 下载

import { ScriptIcon } from '@theme/fai';
import FileItem from '@theme/FileItem'

import { DiskImageIcon, ChecksumIcon } from '@theme/fai';

<p>
<FileItem name="云镜像" hint="清华镜像站提供" path="https://mirrors.tuna.tsinghua.edu.cn/archlinux/images/latest/Arch-Linux-x86_64-basic.qcow2" icon={<DiskImageIcon />}/>
<FileItem name="验证信息" path="https://geo.mirror.pkgbuild.com/images/latest/Arch-Linux-x86_64-basic.qcow2.SHA256" icon={<ChecksumIcon />}/>
</p>

## 创建虚拟机

1. 打开“虚拟介质管理器”，注册下载所得
2. 复制一份虚拟硬盘，格式为 VDI
3. 创建虚拟机

   > vbox 会根据系统名称猜测发行版

4. 启动前配置虚拟机：CPU 数、虚拟盘加密等

:::note 如何向无图形化界面的虚拟机粘贴代码？

方法一：使用 AHK 辅助脚本，为了把代码粘贴到仅字符串界面的虚拟机

<p>
    <FileItem button name="vboxpaste.ahk" path="/scripts/vboxpaste.ahk" icon={<ScriptIcon />}/>
</p>

- 使用前，请先在“全局设定”中关闭“热键”的“自动独占键盘”。
- 下载后打开脚本执行，右键托盘图标 `suspend` 挂起。

方法二：安装无图形化增强工具

    pacman -S --noconfirm virtualbox-guest-utils-nox

:::

:::info 登录密码

默认用户名和密码均为 `arch`

:::

## 配置

### 使用国内镜像站

`sudo -s` 以 root 身份运行：

   ```shell
   pushd /etc
   sed -i '/^#Para/ s/^#//' pacman.conf
   sed '/^#IgnorePkg/{s/^#//;s/$/linux/}' -i pacman.conf
   pushd pacman.d
   echo 'Server = https://mirrors.ustc.edu.cn/archlinux/$repo/os/$arch' | tee mirrorlist
   yes | pacman -Sy reflector
   reflector -c cn -p https --sort rate -l 3 --save mirrorlist
   yes | pacman -Syyu
   ```

### 开发环境

```shell
yes | sudo pacman -S git vim
```

import Require from '/docs/\_deployworkenv.md'

<Require />

<BasicCatalog />

<DevEnvCatalog hidePl />

import {BasicCatalog,DevEnvCatalog} from '/docs/devenv/Catalog'

### 安装 KDE 图形化界面

```
sudo pacman -S --noconfirm plasma-meta yakuake
sudo systemctl enable sddm

pacman -S --noconfirm virtualbox-guest-utils # 增强工具
```

关机后，配置虚拟机：增加显存、CPU 数

:::info 快照备份虚拟机
:::

import { HtmlA, LinkButton } from '@theme/links';
