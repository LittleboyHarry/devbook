---
title: for Arch
---

## zsh

为找不到的命令查询可能匹配的包名

```bash
sudo pacman -S pkgfile
sudo pkgfile -u
echo source /usr/share/doc/pkgfile/command-not-found.zsh >> ~/.zshrc
exec zsh
```

## AUR 助手

网红工具 paru 推荐：

```bash
sudo pacman -S --needed base-devel
git clone https://aur.archlinux.org/paru.git
cd paru
makepkg -si
```
