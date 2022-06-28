---
sidebar_position: 1
---

import PrefixIcon from '@theme/PrefixIcon'

# 键位调整

经过笔者大学期间的实践后，我推荐对 Windows 和 Linux 键盘做如下调整：

- 交换 `CapsLock` 键和 `Esc` 键：使 Esc 常用键由小拇指触发
- 采用 Mac 电脑风格的左侧修饰键 ( `control`, `option`, `command` ) 顺序：`Super`, `Alt`, `Ctrl` 使用大拇指来触发 Ctrl 键

这样的键位重映射，有利于提高打字和触发快捷键效率、减少肌肉劳损。

 <PrefixIcon cmd admin >

## Windows

</PrefixIcon>

    reg add "HKLM\SYSTEM\CurrentControlSet\Control\Keyboard Layout" /v "Scancode Map" /t REG_BINARY /d 00000000000000000600000001003A003A0001001D0038005BE01D0038005BE000000000

注销并重新登录后生效

如果有其他需求，可以安装自定义键位映射程序 `sharpkeys` （ by winget or scoop )

<details>
  <summary>恢复方法：</summary>

    reg delete "HKLM\SYSTEM\CurrentControlSet\Control\Keyboard Layout" /v "Scancode Map"

</details>

 <PrefixIcon cmd>

## GNOME

</PrefixIcon>

    gsettings set org.gnome.desktop.input-sources xkb-options "['caps:swapescape', 'ctrl:swap_lalt_lctl_lwin']"

如不生效，请重新登陆

注意: fcitx5 的 XCB 附加组件可能会与之冲突，需要 `fcitx5-configtool` 配置禁用 “允许重写系统 XKB 设置”

 <PrefixIcon cmd>

## KDE

</PrefixIcon>

执行命令，注销回话以生效：

```shell
kwriteconfig5 --file kxkbrc --group Layout --key ResetOldOptions true
kwriteconfig5 --file kxkbrc --group Layout --key Options ctrl:swap_lalt_lctl_lwin,caps:swapescape
```
