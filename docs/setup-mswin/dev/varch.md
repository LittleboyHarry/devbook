---
sidebar_position: 17
---

# VBox Arch 云镜像

## 下载

import { ScriptIcon } from '@theme/unique/fai';
import FileItem from '@theme/unique/FileItem'

import { DiskImageIcon, ChecksumIcon } from '@theme/unique/fai';

<p>
<FileItem name="云镜像" hint="清华镜像站提供" path="https://mirrors.tuna.tsinghua.edu.cn/archlinux/images/latest/Arch-Linux-x86_64-basic.qcow2" icon={<DiskImageIcon />}/>
<FileItem name="验证信息" path="https://geo.mirror.pkgbuild.com/images/latest/Arch-Linux-x86_64-basic.qcow2.SHA256" icon={<ChecksumIcon />}/>
</p>

## 创建虚拟机

1. 打开 “虚拟介质管理器”，“注册” 下载所得介质
2. 复制一份虚拟硬盘，格式为 VDI。选择保存位置并起名如 “archbase”
3. 类型选择 “不可改变”
4. 创建虚拟机（ 名字含 "arc" 会被自动识别 ）
5. 启动前配置虚拟机：CPU 数、虚拟盘加密等

:::note 如何向无图形化界面的虚拟机粘贴代码？

方法一：使用 AHK 辅助脚本，为了把代码粘贴到仅字符串界面的虚拟机

<p>
    <FileItem button name="vboxpaste.ahk" path="/scripts/vboxpaste.ahk" icon={<ScriptIcon />}/>
</p>

- 使用前，请先在“全局设定”中关闭“热键”的“自动独占键盘”。
- 下载后打开脚本执行，右键托盘图标 `suspend` 挂起。

方法二：稍后安装安装无图形化增强工具

    pacman -S --noconfirm virtualbox-guest-utils-nox

:::

:::info 登录密码

默认用户名和密码均为 `arch`

:::

## 配置

### SSH 连接

设置虚拟机 “网络” > “网卡 1” > “端口转发”

添加规则：端口均填 22

    ssh arch@localhost

:::note 忽略指纹检查

PowerShell:

    "Host localhost`nStrictHostKeyChecking no`nUserKnownHostsFile=/dev/null`n" > $env:USERPROFILE/.ssh/config

:::

### 使用国内镜像站

`sudo -s` 以 root 身份运行：[镜像列表](https://mirrorz.org/list/archlinux)

```shell
URL='https://mirrors.ustc.edu.cn/archlinux'

pushd /etc
sed -i '/^#Para/ s/^#//' pacman.conf
sed '/^#IgnorePkg/{s/^#//;s/$/linux/}' -i pacman.conf
pushd pacman.d
[ -v URL ] && echo 'Server = '"$URL"'/$repo/os/$arch' | tee mirrorlist
yes | pacman -Sy reflector
reflector -c cn -p https --sort rate -l 3 --save mirrorlist
yes | pacman -Syyu
exit
```

### 开发环境

    sudo pacman -S --noconfirm lsb-release git wget vim

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

import { HtmlA, LinkButton } from '@theme/unique/links';
