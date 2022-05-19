---
title: Arch for WSL
---

## 制作虚拟硬盘

需要在 Linux 文件系统环境中制作

    cd `mktemp -d`

<LinkButton outline name="TUNA 镜像站" button href='https://mirrors.tuna.tsinghua.edu.cn/archlinux/iso/latest/#:~:text=.tar.gz' />- 使用 wget 下载 **.tar.gz** 文件

<br/>

<LinkButton outline href="https://geo.mirror.pkgbuild.com/iso/2022.05.01/sha256sums.txt" name="校验信息" icon={<FontAwesomeIcon icon={faFingerprint} />} />- 使用 sha256sum * 检验

下载完成后，运行：

```shell
sudo tar -zxvf archlinux-bootstrap-*-x86_64.tar.gz
cd root.x86_64
# 写入镜像站
echo 'Server = https://mirrors.aliyun.com/archlinux/$repo/os/$arch' | sudo tee -a etc/pacman.d/mirrorlist
sudo tar -czvf root.tar.gz *
```

将会产生 WSL 可使用的系统镜像，安装方法：

    powershell.exe -c 'wsl --import Arch $(mkdir $env:USERPROFILE\wsl-arch) .\root.tar.gz'

进入系统，初始化：

    wsl -d Arch

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

    # 登入
    wsl -d arch

安装常用开发工具

    yes | sudo pacman -S base-devel git wget nano vi

安装 AUR 助手 yay

```shell
yes | sudo pacman -S gcc-go
# go 镜像站：
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn,direct

git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
```

为找不到的命令查询可能匹配的包名：

```bash
sudo pacman -S pkgfile
sudo pkgfile -u
echo source /usr/share/doc/pkgfile/command-not-found.zsh >> ~/.zshrc
exec zsh
```

systemd 模拟器：https://github.com/arkane-systems/genie/releases/tag/v2.2

<!-- printf "\n-c cn\n" >> /etc/xdg/reflector/reflector.conf -->

import { faFingerprint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LinkButton } from '@theme/links';
