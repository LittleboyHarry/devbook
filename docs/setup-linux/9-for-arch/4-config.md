---
title: 配置 Arch
---

## 镜像源加速

```shell
# 如果无法下载，请编辑 /etc/pacman.d/mirrorlist
sudo pacman -S reflector

echo "-c cn" | sudo tee -a /etc/xdg/reflector/reflector.conf
sudo systemctl restart reflector

sudo pacman -Sy
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

    sudo pacman -S gufw

打开 gufw 激活防火墙，随后添加条目，常用的如：KDE Connect

## 使用 Zsh

<p><strong><a href="/docs/devenv/zsh" target="_blank" >说明文档</a></strong></p>

为找不到的命令查询可能匹配的包名

```bash
sudo pacman -S pkgfile
sudo pkgfile -u
echo source /usr/share/doc/pkgfile/command-not-found.zsh >> ~/.zshrc
exec zsh
```

## 调整 Grub

```shell
# 记住上次选择的启动项
sudo sed -i "/GRUB_DEFAULT/ s/=.*/=saved/" /etc/default/grub
sudo sed -i '/GRUB_SAVEDEFAULT/ s/^#//' /etc/default/grub

# 降低等待时间为 2 秒
sudo sed -i "/GRUB_TIMEOUT/ s/=.*/=2/" /etc/default/grub

# 自动添加其他系统启动项
sudo pacman -S os-prober


# 提交 Grub 修改
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

:::info 推荐皮肤

```shell
sudo pacman -S breeze-grub
sudo cp -r /usr/share/grub/themes/breeze /boot/grub/themes
echo GRUB_THEME=/boot/grub/themes/breeze/theme.txt | sudo tee -a /etc/default/grub
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

:::

## 中文支持

```shell
sudo pacman -S noto-fonts-cjk
sudo sed -i "/#zh_CN.U/ s/^#//" /etc/locale.gen
sudo locale-gen
```

<PreferXde gnome kde hideSelector>
<ForGnome>随后打开“语言与区域”设置，改为中文</ForGnome>
</PreferXde>

中文输入法，见<a target="_blank" href="../mustdo/chinese">后文</a>

## 其他配置

见后文内容：

1. <a target="_blank" href="../mustdo/dual-os">双系统的配置</a>
2. <a target="_blank" href="../mustdo/kernel">内核问题</a>
3. <a target="_blank" href="../mustdo/device">设备问题</a>
4. <a target="_blank" href="../mustdo/chinese">中文输入法</a>

## 安装 AUR 助手

推荐使用网红工具 paru：( [使用方法](https://linux.cn/article-13122-1.html) )

```bash
sudo pacman -S --needed base-devel rust
git clone https://aur.archlinux.org/paru.git
cd paru
makepkg -si
```

import {
PreferXde,
ForGnome,
ForKde
} from '@theme/PreferXde';
import GetPkg from '@theme/GetPkg';

:::caution 配置完成后，重启计算机
:::