---
title: 休息提醒
---

# Workrave

支持：

- Windows
- Linux
  - 非 Ubuntu 系统需要安装<a href="/docs/setup-linux/mustdo/gnome/panel#扩展推荐" target="_blank" >GNOME 托盘图标依赖</a>
  - 除了 KDE Wayland

<GetPkg name="workrave" apt dnf choco winget pacman />

:::note 笔者的作息规律

40 分钟休息，20 分钟暂停一下

<details className="let-details-to-gray">
    <summary>Windows 注册表</summary>

```bat
reg add "HKCU\Software\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers" /v "C:\Program Files (x86)\Workrave\lib\Workrave.exe" /t REG_SZ /f /d "~ HIGHDPIAWARE"

reg add HKCU\Software\Workrave\timers\micro_pause /v auto_reset /t REG_SZ /d 12 /f
reg add HKCU\Software\Workrave\timers\micro_pause /v limit /t REG_SZ /d 1200 /f
reg add HKCU\Software\Workrave\timers\micro_pause /v snooze /t REG_SZ /d 120 /f

reg add HKCU\Software\Workrave\timers\rest_break /v auto_reset /t REG_SZ /d 480 /f
reg add HKCU\Software\Workrave\timers\rest_break /v limit /t REG_SZ /d 2400 /f
reg add HKCU\Software\Workrave\timers\rest_break /v snooze /t REG_SZ /d 300 /f

reg add HKCU\Software\Workrave\breaks\daily_limit /v enabled /t REG_SZ /d 0 /f
reg add HKCU\Software\Workrave\gui\breaks /v block_mode /t REG_SZ /d 0 /f
reg add HKCU\Software\Workrave\gui\breaks\rest_break /v exercises /t REG_SZ /d 4 /f
reg add HKCU\Software\Workrave\gui\breaks\rest_break /v auto_natural /t REG_SZ /d 1 /f
reg add HKCU\Software\Workrave\gui /v closewarn_enabled /t REG_SZ /d 0 /f
reg add HKCU\Software\Workrave\general /v usage-mode /t REG_SZ /d 1 /f

```

</details>

 <details className="let-details-to-gray">
<summary>Linux 脚本</summary>

```shell
cat << END | dconf load /org/workrave/timers/
[micro-pause]
auto-reset=12
limit=1200
snooze=120
[rest-break]
auto-reset=480
limit=2400
snooze=300
END

cat << END | dconf load /org/workrave/gui/breaks/rest-break/
[/]
auto-natural=true
exercises=4
END

dconf write /org/workrave/breaks/daily-limit/enabled false
dconf write /org/workrave/gui/breaks/block-mode 0
dconf write /org/workrave/general/usage-mode 1
```

打开 gnome-tweaks 添加开机启动程序

Wayland Bug 修复: [问题来源](https://github.com/rcaelers/workrave/issues/94)

```
cd ~/.local/share/applications/
cp /usr/share/applications/workrave.desktop .
sed -i "/Exec/ s/$/ --display=:0/" workrave.desktop
cd -
```

</details>

:::

:::note KDE 代替品

<GetPkg name="rsibreak" apt pacman dnf />

搜索关键词 `auto` 设置应用自启动

:::

import GetPkg from '@theme/GetPkg';