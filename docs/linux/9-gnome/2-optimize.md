---
title: 调优
---

注：`&!` 是 zsh 可分离式执行的专属特性。

## 互动逻辑

显示最小最大化窗口按钮

    gsettings set org.gnome.desktop.wm.preferences button-layout appmenu:minimize,maximize,close

允许 Super + 右键 拖拽更改窗口大小

    gsettings set org.gnome.desktop.wm.preferences resize-with-right-button true

限制应用切换器作用于当前工作区

    gsettings set org.gnome.shell.app-switcher current-workspace-only true

禁用字符搜索支持，避免干扰。

    gsettings get org.gnome.desktop.search-providers disabled # 默认为空数组
    gsettings set org.gnome.desktop.search-providers disabled "['org.gnome.Characters.desktop']"

`Super + D` 显示桌面

    gsettings set org.gnome.desktop.wm.keybindings show-desktop "['<Super>d']"

应用内切换窗口 Alt + \`

```shell
cat << END | dconf load /org/gnome/desktop/wm/keybindings/
[/]
cycle-group=['<Alt>grave']
cycle-group-backward=['<Shift><Alt>grave']
END
```

## 自动登陆

免去开机输入用户密码

    gnome-control-center user-accounts &!

## 其他

设置深夜护眼：点击夜灯，激活暖色效果

    gnome-control-center display &!

## 辅助工具

类 Windows 注册表编辑器：

    sudo dnf in -y dconf-editor && dconf-editor &!
