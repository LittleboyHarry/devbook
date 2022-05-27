---
title: 配置 Arch
sidebar_position: 3
---

重新启动机器，进入 Arch 系统

## 先决配置

### 考虑启用防火墙

若需要开发防火墙：打开 gufw 激活防火墙，随后添加条目，常用的如：KDE Connect

:::note 打开终端的方法

点击左上角 “活动” 按钮，输入 “terminal” 打开

:::

<PreferXde gnome kde>
<ForGnome>

:::note 使用暗色终端主题

    dconf write /org/gnome/terminal/legacy/theme-variant "'dark'"

:::

</ForGnome>
</PreferXde>

### 安装自动配置集

```shell
mkdir deployworkenv
cd deployworkenv
curl -L https://gitcode.net/lbh/dwe/-/archive/main/dwe-main.tar.gz | tar xz --strip 1
# 上游版：
# curl -L https://github.com/LittleboyHarry/deployworkenv/tarball/main | tar xz --strip 1
```

### 中文支持

    cn/arch-locale

<PreferXde gnome kde hideSelector>
<ForGnome>随后打开“语言与区域”设置，改为中文。注销生效</ForGnome>
</PreferXde>

## 配置桌面环境

- 程序坞调整固定程序

import Content1 from '../\_common/startde.md';

<Content1 />

import Content2 from '../\_common/gnome-mustdo.md';

<Content2 />

<!--
## KDE 软件推荐

```shell
sudo pacman -S breeze-icons adwaita-qt5 yakuake dolphin
dconf write /org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/custom0/command 'yakuake'
```
 -->

## 关键配置

### 镜像源加速

<!--
# 如果默认 mirrorlist 无法下载，可先改用阿里云：
echo 'Server = https://mirrors.aliyun.com/archlinux/$repo/os/$arch' | sudo tee -a etc/pacman.d/mirrorlist
 -->

安装 reflector 并自动加速

```shell
sudo pacman -S reflector
cn/arch-pacman
```

<PreferXde gnome kde hideSelector>
<ForKde>

<!--
:::note 喜欢下拉式终端吗？

<GetPkg name="yakuake" apt pacman dnf />

安装后，搜索 `autostart` 设置自动启动 ( 添加 | 添加应用程序 )。
随后打开程序设置全局快捷键即可

:::
-->

</ForKde>
</PreferXde>

### Zsh

<a href="/docs/devenv/zsh" target="_blank" >参考内容</a>

找不到的命令时，输出提供包的建议：

```bash
arch/autofindcmd
exec zsh
```

### 调整 Grub

- 记住上次选择的启动项
- 降低等待时间为 2 秒
- 自动添加其他系统启动项
- 推荐皮肤

      arch/bettergrub

### 引用内容

见后文内容：

1. <a target="_blank" href="../mustdo/chinese">中文输入法</a>
2. <a target="_blank" href="../mustdo/dual-os">双系统的配置</a>
3. <a target="_blank" href="../mustdo/device">设备问题</a>
4. <a target="_blank" href="../mustdo/kernel">内核问题</a>

## 推荐配置

### 卸载不需要的应用

国内用不上的：

    sudo pacman -Rns gnome-weather gnome-maps

### 安装 Firefox 浏览器

    arch/getfirefox

<LinkButton outline icon={<ScriptIcon />} name="推荐配置" href="https://gitcode.net/lbh/dwe/-/blob/main/cn/conf/firefox/README.md" />

import { ScriptIcon } from '@theme/fai';
import { LinkButton } from '@theme/links';

### 使用 Neovim

见<a href="/docs/devenv/neovim" target="_blank">文章</a>

### 安装开发工具

    sudo pacman -S base-devel git wget vi --noconfirm

### AUR 助手 yay

原版：

```shell
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
```

:::note 国服加速安装：

由 https://goproxy.cn 提供代理

    cn/arch-yay

为下载构建源码，[fastgit](https://doc.fastgit.org/zh-cn/guide.html) 提供 GitHub 镜像服务

:::

 <PreferXde gnome kde hideSelector>
<ForGnome>

### GNOME 优化

打开设置，激活自动登录

启用扩展支持：

    arch/aur-gnome-webext

推荐扩展：

    sudo pacman -S gnome-shell-extension-appindicator

Qt 主题修改器：

    arch/qtingnome

</ForGnome>
</PreferXde>

### AUR 软件

- VSCode 微软版

      yay visual-studio-code-bin

### 网络问题

```shell
yes | sudo pacman -S v2ray v2ray-domain-list-community v2ray-geoip

yay v2raya-bin
sudo systemctl enable v2raya --now
```

## 结束配置

推荐安装并使用 timeshift: ( 依赖[#安装开发工具] )

    arch/aur-timeshift

:::caution 重启计算机后完成更改
:::

import {
PreferXde,
ForGnome,
ForKde
} from '@theme/PreferXde';
import GetPkg from '@theme/GetPkg';
