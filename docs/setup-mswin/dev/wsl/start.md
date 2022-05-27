---
title: WSL 安装发行版
sidebar_position: 2
---

import {MstoreLink} from '@theme/links';

作者推荐的 WSL 发行版为 Arch Linux，其他发行版在<a href="https://aka.ms/wslstore">微软商店上</a>可下载安装

## 制作虚拟硬盘

需要在 Linux 文件系统环境中完成

<details><summary>使用 Debian WSL 辅助制作</summary>

1. 从 <MstoreLink id="9MSVKQC78PK6" name="微软商店"/> 安装
2. 输入用户名密码以初始化，例如 `me` : `'`

要想从国内镜像源加速 apt 获取：

1. 获取缺失的软件包：
   [可信证书](https://packages.debian.org/stable/all/ca-certificates/download)
   及 [openssl](https://packages.debian.org/stable/amd64/openssl/download)
2. ```shell
   wsl sudo apt install -y ./ca-certificates_*.deb ./openssl_*.deb
   ```
3. <a href="/docs/setup-linux/for-debian#国内镜像软件仓" target="_blank">
   设置镜像源并更新</a>

</details>

获取系统镜像：( 查看[国内 Arch 镜像站](https://mirrorz.org/os/archlinux) )

```shell
ARCH_MIRROR=https://mirrors.ustc.edu.cn/archlinux

sudo apt install -y wget fakeroot
cd `mktemp -d`
wget https://geo.mirror.pkgbuild.com/iso/latest/sha256sums.txt
sed -ni '/gz$/p' sha256sums.txt
wget -c "$ARCH_MIRROR/iso/latest/$(tr -s ' ' < sha256sums.txt | cut -d' ' -f2)"
sha256sum -c sha256sums.txt
```

下载比检验成功后，开始制作并安装：

```shell
ARCH_MIRROR=https://mirrors.ustc.edu.cn/archlinux

fakeroot tar -zxf archlinux-bootstrap-*-x86_64.tar.gz
cd root.x86_64
echo "Server = $ARCH_MIRROR/"'$repo/os/$arch' | sudo tee -a etc/pacman.d/mirrorlist
vi + etc/pacman.d/mirrorlist
fakeroot tar -czf ../wsl-arch.tar.gz *
cd ..
```

<!--
[ -x "$(command -v explorer.exe)" ] && explorer.exe .
-->

在 WSL Debian 中安装：

```shell
NAME=arch
DIR='$env:USERPROFILE\wsl-arch'

powershell.exe -c 'wsl --import '$NAME' $(mkdir -f '$DIR') wsl-arch.tar.gz'
wsl.exe --setdefault "$NAME"
```

`Ctrl + D` 退出 Debian WSL, 进入 Arch:

    wsl

```shell
# 使用国内镜像
USE_CN_MIRROR=1

pacman-key --init
pacman-key --populate archlinux

# 智能选镜像，快速更新系统
yes | pacman -Sy reflector
pushd /etc/pacman.d
cp -n mirrorlist mirrorlist.old
if [[ -z ${USE_CN_MIRROR} ]]; then
    reflector --sort rate -l 8 --save mirrorlist
else
    reflector -c cn -p https --sort rate -l 5 --save mirrorlist
fi
popd > /dev/null
sed -i '/^#ParallelDownloads/ s/^#//' /etc/pacman.conf
yes | pacman -Syyu

# 语言问题
echo 'en_US.UTF-8 UTF-8' >> /etc/locale.gen
locale-gen

# 创建常用用户
yes | pacman -S sudo
useradd -m -G wheel -d /home/me me
sed -i '/NOPASSWD/ s/^# %wheel/%wheel/' /etc/sudoers
passwd me
id me
```

然后在 `regedit` 注册表编辑器中转到：

    HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Lxss

找到对应发行版的 `DefaultUid`，以 **十进制** 基数形式设置。完成设置

安装常用开发工具

```shell
pacman -S base-devel wget nano vi git tig unzip tree man-db --noconfirm
yes | pacman -S dos2unix # 转换 Windows 格式的换行符
```

找不到的命令时，输出提供包的建议：

```bash
arch/autofindcmd
exec $SHELL
```

退出 Arch，执行 PowerShell 命令备份一下子系统：

```powershell
$wslName="arch"
$dir="$env:USERPROFILE\wsl-arch"

cd $dir
wsl --export $wslName arch.tar
```

重新进入 WSL, 将以普通用户方式登陆

zsh, git, deploydotfile, neovim, bat, fzf, rg, fd, pipx 等请见：

<a target="_blank" href="/docs/devenv#命令行工具">
  开发环境 - 命令行工具
</a>

<br/>

安装 AUR 助手 yay

```shell
yes | sudo pacman -S gcc-go

if [[ -v USE_CN_MIRROR ]]; then
    # 使用 goproxy.cn 镜像站
    export GO111MODULE=on
    export GOPROXY=https://goproxy.cn,direct
fi

cd ~
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
yay --save --editmenu
```

systemd 模拟器：https://github.com/arkane-systems/genie/releases/tag/v2.2

## 建议

尽量把文件存储在 WSL 文件系统内。若非必要，开发时尽量不使用 Windows 文件系统。

目前兼容机制 BUG 多不完善：不能监听文件修改、文件管理器交换文件时产生碎片文件等

<!-- printf "\n-c cn\n" >> /etc/xdg/reflector/reflector.conf -->

import { LinkButton } from '@theme/links';
