---
title: 桌面环境 KDE
---

如果你安装的是 Fedora Workspace 默认版。自带 GNOME 却想要安装 KDE，请执行：

    sudo dnf in -y @kde-desktop-environment

推荐下载 Fedora Spins - KDE 版镜像以安装系统：
https://spins.fedoraproject.org/zh_Hans_CN/kde/

:::info 从搜索开始

按下 `Alt + Space` 激活 KRunner，按本文完成基本配置：

:::

1. 初步：若需要为高分辨率屏幕调整字体大小，请搜索关键词 `fonts` 设置，选择统一调整字体、且记住合适的字号

2. 任务栏：右键菜单“进入编辑模式”

   宽屏设备推荐移动到左侧、调整合适宽度

3. 图标任务管理器：右键菜单“进入编辑模式”，进入“行为”面板

   1. 中键点击任意任务：切换任务分组 -> 选择
   2. 鼠标滚轮：循环切换任务 -> 关闭
   3. 仅显示任务: 来自当前屏幕 -> 激活

4. 触摸板设置（搜索关键词 `touchpad`）

   1. 手指轻触：轻触点击 -> 激活
   2. 反向滚动 (自然滚动) -> 激活

:::info 快速访问任务栏应用

Super + 数字键 类似 Windows 任务栏效果，推荐程序员固定浏览器和终端到一、二号位

:::

## Konsole 终端

```shell
printf "[General]\nName=custom\nParent=FALLBACK/\n" >> ~/.local/share/konsole/custom.profile
kwriteconfig5 --file konsolerc --group "Desktop Entry" --key DefaultProfile custom.profile
```

更改默认 Shell

    kwriteconfig5 --file ~/.local/share/konsole/custom.profile --group General --key Command /bin/zsh

自定义字体

    kwriteconfig5 --file ~/.local/share/konsole/custom.profile --group Appearance --key Font "Noto Sans Mono,16"

重启程序后生效

## KWrite

修改字体：

    kwriteconfig5 --file kwriterc --group "KTextEditor Renderer" --key Font "Noto Sans Mono,18"

## 快速微调

外观优化

    kwriteconfig5 --file kwinrc --group Plugins --key kwin4_effect_dimscreenEnabled true

注销前免二次确认

    kwriteconfig5 --file ksmserverrc --group General --key confirmLogout false

选调：最大化窗口时，隐藏标题栏

    kwriteconfig5 --file ~/.config/kwinrc --group Windows --key BorderlessMaximizedWindows true
    qdbus org.kde.KWin /KWin reconfigure

部分应用需要按住 Super 键移动来恢复最大化

桌面总览图（5.24 以上版本可用

```shell
kwriteconfig5 --file kwinrc --group Plugins --key overviewEnabled true
```

:::tip

上述配置完成后，请注销回话以生效

:::

`Super + W` 触发概览图

<!-- 热区设置 -->

<!--
### 推荐快捷键

```shell
# Super + I 打开设置
kwriteconfig5 --file kglobalshortcutsrc --group systemsettings.desktop --key _launch Meta+I,none,
```
-->
