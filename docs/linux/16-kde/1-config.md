---
title: KDE 配置
---

:::info 从搜索开始

按下 `Alt + Space` 激活 KRunner，按本文完成基本配置：

:::

1. 触摸板设置：搜索关键词 `touchpad`

   - 勾选 `手指轻触：轻触点击`
   - 勾选 `反向滚动 (自然滚动)`

2. 任务栏上右键，选择菜单项 `配置图标任务管理器…` -> `行为` 面板

   - 对 `中键点击任意任务：` 选择 `切换任务分组`
   - 取消 `鼠标滚轮：循环切换任务`
   - 勾选 `仅显示任务: 来自当前屏幕`

选调：

1. 任务栏：右键菜单“进入编辑模式”

   宽屏设备推荐移动到左侧、调整合适宽度

2. 使用全屏开始菜单

   右击开始菜单 > 显示备选方案… > 切换到“应用程序面板”

:::info 快速访问任务栏应用

Super + 数字键 类似 Windows 任务栏效果，推荐程序员固定浏览器和终端到一、二号位

:::

<!--
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
 -->

## 自动配置

```shell
# 注销前免二次确认
kwriteconfig5 --file ksmserverrc --group General --key confirmLogout false

# 桌面总览图 ( 5.24 以上版本可用，触发快捷键为 Super+W )
kwriteconfig5 --file kwinrc --group Plugins --key overviewEnabled true

# 外观优化
kwriteconfig5 --file kwinrc --group Plugins --key kwin4_effect_dimscreenEnabled true
```

:::tip

上述配置完成后，请注销回话以生效

:::


:::note 最大化窗口

KDE 默认切换快捷键：`Super + PageUp`。隐藏标题栏的配置：

    kwriteconfig5 --file ~/.config/kwinrc --group Windows --key BorderlessMaximizedWindows true
    qdbus org.kde.KWin /KWin reconfigure

:::

<!-- 热区设置 -->

<!--
### 推荐快捷键

```shell
# Super + I 打开设置
kwriteconfig5 --file kglobalshortcutsrc --group systemsettings.desktop --key _launch Meta+I,none,
```
-->