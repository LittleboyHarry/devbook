---
title: Arch on WSL
sidebar_position: 5
---

## 制作虚拟硬盘

需要在 Linux 文件系统环境中完成，例如使用前文的 Debian on WSL

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
pacman -S --noconfirm base-devel wget nano vi git tig unzip tree man-db zsh openssh shadow
yes | pacman -S dos2unix # 转换 Windows 格式的换行符
```

退出 Arch，执行 PowerShell 命令备份一下子系统：( 约占 1G 多空间 )

```powershell
$wslName="arch"
$dir="$env:USERPROFILE\wsl-arch"

cd $dir
wsl --export $wslName arch.tar

```

重新进入 WSL, 将以普通用户方式登陆

## 配置

使用 <a href="/docs/devenv/deployworkenv" target="_blank">deployworkenv</a> 自动配置

例如：安装 AUR 助手 yay

    arch/getyay
    cn/arch-yay # 使用国内 goproxy 镜像

zsh, git, neovim, bat, fzf, rg, fd, pipx 等请见：<a
    target="_blank" href="/docs/devenv/catalog#命令行工具">
开发环境 - 命令行工具</a>

systemd 模拟器：https://github.com/arkane-systems/genie/releases/tag/v2.2

<!-- printf "\n-c cn\n" >> /etc/xdg/reflector/reflector.conf -->
