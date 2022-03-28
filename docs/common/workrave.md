---
title: 休息提醒
---

推荐两款开源软件

import GetPkg from '@theme/GetPkg';

## Workrave

支持：

- Windows
- Linux ( no KDE Wayland )

<a href="/docs/linux/gnome/panel#托盘图标" target="_blank" >GNOME 依赖扩展</a>

安装：

<GetPkg name="workrave" apt dnf winget />

:::note 自动化配置脚本

笔者的作息规律：40 分钟休息，20 分钟暂停一下

<details>
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

 <details>
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

Wayland Bug 修复: [问题来源](https://github.com/rcaelers/workrave/issues/94)

```
cd ~/.local/share/applications/
cp /usr/share/applications/workrave.desktop .
sed -i "/Exec/ s/$/ --display=:0/" workrave.desktop
cd -
```

</details>

:::

## RSIBreak

<GetPkg name="rsibreak" dnf />

搜索关键词 `auto` 设置应用自启动
