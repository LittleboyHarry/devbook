---
title: 调优
---

:::note 注：

`&!` 是 zsh 可分离式执行的专属特性

:::

## 调优

```shell
# 允许 Super + 右键 拖拽更改窗口大小
gsettings set org.gnome.desktop.wm.preferences resize-with-right-button true

# 激活触摸板轻触点击
gsettings set org.gnome.desktop.peripherals.touchpad tap-to-click true

# 按下电源键默认会挂起系统，若要改为关机行为：
gsettings set org.gnome.settings-daemon.plugins.power power-button-action interactive

# 显示最小最大化窗口按钮
gsettings set org.gnome.desktop.wm.preferences button-layout appmenu:minimize,maximize,close

# 限制应用切换器作用于当前工作区
gsettings set org.gnome.shell.app-switcher current-workspace-only true

# 禁用字符搜索支持，避免干扰。
gsettings set org.gnome.desktop.search-providers disabled "['org.gnome.Characters.desktop']"

# `Super + D` 显示桌面
gsettings set org.gnome.desktop.wm.keybindings show-desktop "['<Super>d']"

# 任务管理器：使用树视图
dconf write /org/gnome/gnome-system-monitor/show-dependencies true
```

## 推荐的快捷键

Windows 风格的快捷键：

<div className="AutoSelectedTableContainer">

| 作用       | 命令                           | 按键              |
| ---------- | ------------------------------ | ----------------- |
| 打开终端   | gnome-terminal                 | Super + X         |
| 文件管理器 | nautilus                       | Super + E         |
| 设置       | gnome-control-center           | Super + I         |
| 截图 \*    | gnome-screenshot --interactive | Super + Shift + S |

</div>

 <details className="let-details-to-gray">
    <summary>对应的指令：</summary>

```shell
cat << END | dconf load /org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/
[custom0]
binding='<Super>x'
command='gnome-terminal'
name='打开终端'

[custom1]
binding='<Super>e'
command='nautilus'
name='文件管理器'

[custom2]
binding='<Super>i'
command='gnome-control-center'
name='设置'

[custom3]
binding='<Shift><Super>s'
command='gnome-screenshot --interactive'
name='截图'
END
```

</details>

\*注：GNOME 42 已移除 `gnome-screenshot` 并强化了 `PrtScr` 截图键的功能、支持录屏

## 互动逻辑

应用内切换窗口 Alt + \`

```shell
cat << END | dconf load /org/gnome/desktop/wm/keybindings/
[/]
cycle-group=['<Alt>grave']
cycle-group-backward=['<Shift><Alt>grave']
END
```

:::note 巧用触摸板调整窗口大小

设置 `Super + Z` 触发，自行摸索适应一下~

    dconf write /org/gnome/desktop/wm/keybindings/begin-resize "['<Super>z']"

:::

## 自动登陆

免去开机输入用户密码

    gnome-control-center user-accounts &!

## 其他

设置深夜护眼：点击夜灯，激活暖色效果

    gnome-control-center display &!

## 辅助工具

类 Windows 注册表编辑器：

import GetPkg from '@theme/GetPkg';

<GetPkg name="dconf-editor" apt dnf />
