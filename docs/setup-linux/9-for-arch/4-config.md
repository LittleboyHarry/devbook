---
title: 配置 Arch
---

## 镜像源加速

```shell
# 如果默认 mirrorlist 无法下载，可先改用阿里云：
echo 'Server = https://mirrors.aliyun.com/archlinux/$repo/os/$arch' | sudo tee -a etc/pacman.d/mirrorlist

# 安装 reflector 并自动加速
sudo pacman -S reflector
./cn/arch-reflector.sh
```

<PreferXde gnome kde hideSelector>
<ForKde>

:::note 喜欢下拉式终端吗？

<GetPkg name="yakuake" apt pacman dnf />

安装后，搜索 `autostart` 设置自动启动 ( 添加 | 添加应用程序 )。
随后打开程序设置全局快捷键即可

:::

</ForKde>
</PreferXde>

## 启用防火墙

对个人或家用设备，强烈建议配置开启

    yes | sudo pacman -S gufw

打开 gufw 激活防火墙，随后添加条目，常用的如：KDE Connect

## 安装开发工具包

    sudo pacman -S base-devel git wget vi --noconfirm

## AUR 助手 yay

原版：

```shell
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
```

国内 goproxy.cn 加速：

    ./cn/arch-yay.sh

## 网络问题

```shell
sudo pacman -S v2ray v2ray-domain-list-community v2ray-geoip
yay v2raya-bin
sudo systemctl enable v2raya --now
```

## 备份工具

推荐使用 timeshift：

    ./arch/aur-timeshift.sh

## 使用 Zsh

<p><strong><a href="/docs/devenv/zsh" target="_blank" >说明文档</a></strong></p>

为找不到的命令查询可能匹配的包名

```shell
./arch/betterfindcmd.sh
exec $SHELL
```

## `deploy-workenv`

### 调整 Grub

- 记住上次选择的启动项
- 降低等待时间为 2 秒
- 自动添加其他系统启动项
- 推荐皮肤

    ./arch/bettergrub.sh
    # 换肤：yes | ./arch-bettergrub.sh

## 中文支持

    ./cn/arch-locale.sh

<PreferXde gnome kde hideSelector>
<ForGnome>随后打开“语言与区域”设置，改为中文。注销生效</ForGnome>
</PreferXde>

中文输入法，见<a target="_blank" href="../mustdo/chinese">后文</a>

## 其他配置

见后文内容：

1. <a target="_blank" href="../mustdo/dual-os">双系统的配置</a>
2. <a target="_blank" href="../mustdo/kernel">内核问题</a>
3. <a target="_blank" href="../mustdo/device">设备问题</a>
4. <a target="_blank" href="../mustdo/chinese">中文输入法</a>

import {
PreferXde,
ForGnome,
ForKde
} from '@theme/PreferXde';
import GetPkg from '@theme/GetPkg';

:::caution 配置完成后，重启计算机
:::
