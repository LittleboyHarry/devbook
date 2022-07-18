---
sidebar_position: 60
---

# GNOME 主题

安装或激活依赖扩展

```shell
UUID=user-theme@gnome-shell-extensions.gcampax.github.com
gnome-extensions enable $UUID || gdbus call --session --dest org.gnome.Shell --object-path /org/gnome/Shell --method org.gnome.Shell.Extensions.InstallRemoteExtension $UUID
```

激活后可以保存样式到用户的 `~/.themes` 目录下

## 图标与光标

保存位置: `~/.icons`

推荐光标样式: https://www.pling.com/p/1148692

## Ubuntu 风格

    sudo dnf in -y yaru-theme

## 浏览主题界面效果

    sudo dnf in -y awf-gtk3 && awf-gtk3

gtk3 是常见的型号，此外还有：awf-gtk2 awf-gtk4 版
