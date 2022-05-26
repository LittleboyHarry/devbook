---
title: 安装 WSL 发行版
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
   [可信证书](https://packages.debian.org/search?keywords=ca-certificates&exact=1)
   及 [openssl](https://packages.debian.org/search?keywords=openssl&exact=1)
2. ```shell
   wsl sudo apt install -y ./ca-certificates_*.deb ./openssl_*.deb
   ```
3. <a href="/docs/setup-linux/for-debian#国内镜像软件仓" target="_blank">
   设置镜像源并更新</a>

</details>

```shell
sudo apt install -y wget fakeroot
cd `mktemp -d`
wget https://geo.mirror.pkgbuild.com/iso/latest/sha256sums.txt
sed -ni '/gz$/p' sha256sums.txt
wget -c "https://mirrors.tuna.tsinghua.edu.cn/archlinux/iso/latest/$(tr -s ' ' < sha256sums.txt | cut -d' ' -f2)"
sha256sum -c sha256sums.txt
```

下载比检验成功后，开始制作并安装：

```shell
fakeroot tar -zxf archlinux-bootstrap-*-x86_64.tar.gz
cd root.x86_64
# 写入镜像站
echo 'Server = https://mirrors.aliyun.com/archlinux/$repo/os/$arch' | sudo tee -a etc/pacman.d/mirrorlist
fakeroot tar -czf ../wsl-arch.tar.gz *
cd ..

# 安装：
if [ -x "$(command -v wsl.exe)" ]; then
    powershell.exe -c 'wsl --import arch $(mkdir $env:USERPROFILE\wsl-arch) wsl-arch.tar.gz'
    wsl --setdefault arch
    explorer.exe .
fi
```

进入系统，初始化：

    wsl

```shell
pacman-key --init
pacman-key --populate archlinux

# 切换镜像并更新系统
yes | pacman -Sy reflector
(cd /etc/pacman.d;cp -n mirrorlist mirrorlist.old;reflector -c cn -p https --sort rate -l 5 --save mirrorlist)
sed -i '/#Para/ s/^#//' /etc/pacman.conf
yes | pacman -Syyu

echo 'en_US.UTF-8 UTF-8' >> /etc/locale.gen
locale-gen

# 创建常用用户
yes | pacman -S sudo
useradd -m -G wheel -d /home/me me
sed -i '/NOPASSWD/ s/^# %wheel/%wheel/' /etc/sudoers
passwd me
id me
```

然后打开注册表管理器，编辑：

    HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Lxss

找到对应发行版的 `DefaultUid`，以 **十进制** 基数形式设置。完成设置

安装常用开发工具

```shell
sudo pacman -S base-devel wget nano vi git tig unzip tree --noconfirm
yes | sudo pacman -S dos2unix # 转换 Windows 格式的换行符
```

zsh, git, deploydotfile, neovim, bat, fzf, rg, fd, pipx 等请见：

<a target="_blank" href="/docs/devenv/catalog#命令行工具">
  开发环境 - 命令行工具
</a>

安装 AUR 助手 yay

```shell
yes | sudo pacman -S gcc-go
# go 镜像站：
export GO111MODULE=on
export GOPROXY=https://goproxy.cn,direct

git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
```

为找不到的命令查询可能匹配的包名：

```bash
yes | sudo pacman -S pkgfile
sudo pkgfile -u
echo source /usr/share/doc/pkgfile/command-not-found.zsh >> ~/.zshrc
exec zsh
```

systemd 模拟器：https://github.com/arkane-systems/genie/releases/tag/v2.2

## 建议

尽量把文件存储在 WSL 文件系统内。若非必要，开发时尽量不使用 Windows 文件系统。

目前兼容机制 BUG 多不完善：不能监听文件修改、文件管理器交换文件时产生碎片文件等

<!-- printf "\n-c cn\n" >> /etc/xdg/reflector/reflector.conf -->

import { faFingerprint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LinkButton } from '@theme/links';
