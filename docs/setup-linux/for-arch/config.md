---
sidebar_position: 3
---

# 配置 Arch

import {
PreferXde,
ForGnome,
ForKde
} from '@theme/unique/PreferXde';

<PreferXde gnome kde />

import SearchMethod from '/docs/setup-linux/\_desktopenv/search.md'

<SearchMethod />

## 基础配置

### 启用防火墙

:::caution 除非在虚拟机内，建议家宿主用设备均激活防火墙

搜索 "gufw" 打开防火墙：添加常见白名单条目，如：KDE Connect

:::

### 中文支持

<p><PreferXde gnome kde noSelector>
<ForGnome>随后打开“语言与区域”设置，改为中文。注销生效</ForGnome>
<ForKde>

1. 搜索 "lang", 进入语言设置
2. 点击右下角按钮添加列表底部的“简体中文”并置顶
3. 选择 "format" 修改区域格式，搜索 "cn" 设置简中
4. 注销生效

</ForKde>
</PreferXde></p>

<br/>

<PreferXde gnome kde noSelector>
<ForGnome>

:::note 使用暗色终端主题

    dconf write /org/gnome/terminal/legacy/theme-variant "'dark'"

:::

</ForGnome>
</PreferXde>

### 配置桌面环境

import BaseDeCfg from '/docs/setup-linux/\_desktopenv/base.md';

<BaseDeCfg />

import GnomeCfg from '/docs/setup-linux/\_desktopenv/gnome.md';
import KdeCfg from '/docs/setup-linux/\_desktopenv/kde.md';

<PreferXde gnome kde noSelector>
    <ForGnome><GnomeCfg /></ForGnome>
    <ForKde><KdeCfg /></ForKde>
</PreferXde>

<br/>

### 引用内容

1. <a target="_blank" href="../mustdo/dual-os">双系统</a>
2. <a target="_blank" href="../mustdo/device">设备问题</a>
3. <a target="_blank" href="../mustdo/kernel">内核问题</a>
4. <OptimizeDe />
5. <a target="_blank" href="../mustdo/chinese">中文输入法</a>

export function OptimizeDe(){
return <PreferXde gnome kde noSelector>
<ForGnome><a href='../mustdo/gnome' target='_blank'>GNOME 配置</a></ForGnome>
<ForKde><a href='../mustdo/kde' target='_blank'>KDE 配置</a></ForKde>
</PreferXde>
}

## 推荐配置

import {
PreferAppstream,
WithAppstream,
WithoutAppstream
} from '@theme/unique/PreferAppstream';
import { StoreButton, mslink } from '@theme/unique/links';

<PreferAppstream appstream pkgmgr />

### 网页浏览器

import { BrowserSelector } from '/docs/goodsoft/Catalog.tsx';

<BrowserSelector/>

### VLC 播放器

 <PreferAppstream appstream pkgmgr noSelector>
<WithAppstream>
<StoreButton to='appstream://org.videolan.vlc' text='一键安装' /> </WithAppstream>
<WithoutAppstream>

    sudo pacman -S --noconfirm vlc

</WithoutAppstream>
</PreferAppstream>

### 开发环境

import {BasicCatalog,DevEnvCatalog} from '/docs/devenv/Catalog'

<BasicCatalog />
<DevEnvCatalog hidePl />

### 虚拟化

#### 安装 VirtualBox

对于 linux 最新版内核，依赖模块：

    sudo pacman -S --noconfirm virtualbox-host-modules-arch

其它 linux 内核，依赖模块：如 linux-lts

    sudo pacman -S --noconfirm linux-lts-headers virtualbox-host-dkms

安装：

    sudo pacman -S --noconfirm virtualbox virtualbox-guest-iso
    sudo modprobe vboxdrv

### 安装 qemu

    sudo pacman -S --noconfirm qemu-desktop virt-manager

[其它 CPU 架构模拟器](https://archlinux.org/packages/extra/x86_64/qemu-emulators-full/)

### AUR 助手

import GetYay from '/docs/\_common/get-yay.md'

<GetYay />

 <PreferXde gnome kde noSelector>
<ForGnome>

:::note GNOME 优化

启用扩展支持：

```shell
git clone https://aur.archlinux.org/chrome-gnome-shell.git
cd chrome-gnome-shell
vim PKGBUILD
makepkg -si
```

推荐扩展：

    sudo pacman -S gnome-shell-extension-appindicator

Qt 主题修改器：需要重启生效

```shell
sudo pacman -S qt5ct --noconfirm
mkdir -p ~/.config/environment.d/
echo 'QT_QPA_PLATFORMTHEME=qt5ct' >~/.config/environment.d/use-qt5ct.conf
```

:::

</ForGnome>
</PreferXde>

### AUR 软件

:::info 依赖吻合的 AUR 构建产物是可以迁移安装的
:::

#### VSCode 微软版

    yay visual-studio-code-bin

 <details className='let-details-to-gray'>
<summary>网络问题</summary>

```shell
yes | sudo pacman -S v2ray v2ray-domain-list-community v2ray-geoip

yay v2raya-bin
sudo systemctl enable v2raya --now
```

</details>

## 结束配置

推荐安装并使用 timeshift 备份系统：

```shell
sudo pacman -S cronie --noconfirm
sudo systemctl enable --now cronie
mkdir -p ~/timeshift; pushd ~/timeshift
git clone https://aur.archlinux.org/timeshift.git .
vim PKGBUILD
makepkg -si
popd
sudo timeshift
```

:::caution 可能需要重启以完成更改
:::
