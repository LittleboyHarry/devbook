---
title: KDE 配置
sidebar_position: 1
---

:::tip 按徽标键或点击开始菜单进行搜索
:::

1. 打开设置，可配：
   1. 主题选择 浅色 / 深色
   2. 点击文件或文件夹时，“打开它们”还是“选中它们”
2. 触摸板设置：搜索关键词 `touchpad`

   - 勾选 手指轻触：`轻触点击`
   - 勾选 `反向滚动 (自然滚动)`
   - 调整滚动速度至最佳

3. 任务栏上右键，选择菜单项 `配置图标任务管理器…` -> `行为` 面板

   - 对 `中键点击任意任务：` 选择 `关闭窗口或分组`
   - 取消 鼠标滚轮：`循环切换任务`
   - 勾选 仅显示任务: `来自当前屏幕`

选调：

1. 任务栏：右键菜单“进入编辑模式”

   宽屏设备推荐移动到左侧、调整合适宽度

2. 使用全屏开始菜单

   右击 开始菜单 > “显示备选方案…” > 切换到“应用程序面板”

:::note 快速访问任务栏应用

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

:::note [KDE 字体查看器问题](https://bugs.kde.org/show_bug.cgi?id=439470)

要想在 Wayland 环境下使用，必须设置环境变量。
如使用字体查看器：

    QT_QPA_PLATFORM=xcb kcmshell5 fontinst

:::

<!-- 热区设置 -->

<!--
### 推荐快捷键

```shell
# Super + I 打开设置
kwriteconfig5 --file kglobalshortcutsrc --group systemsettings.desktop --key _launch Meta+I,none,
```
-->
