---
title: KDE 配置
---

:::tip 从搜索开始

按下 `Alt + Space` 激活 KRunner，按本文完成基本配置：

:::

1. 打开设置，默认显示“快捷设置”：
   1. 主题选择 浅色 / 深色
   2. 点击文件或文件夹时，“打开它们”还是“选中它们”
2. 触摸板设置：搜索关键词 `touchpad`

   - 勾选 `手指轻触：轻触点击`
   - 勾选 `反向滚动 (自然滚动)`

3. 任务栏上右键，选择菜单项 `配置图标任务管理器…` -> `行为` 面板

   - 对 `中键点击任意任务：` 选择 `关闭窗口或分组`
   - 取消 `鼠标滚轮：循环切换任务`
   - 勾选 `仅显示任务: 来自当前屏幕`

选调：

1. 任务栏：右键菜单“进入编辑模式”

   宽屏设备推荐移动到左侧、调整合适宽度

2. 使用全屏开始菜单

   右击 开始菜单 > “显示备选方案…” > 切换到“应用程序面板”

:::note 快速访问任务栏应用

Super + 数字键 类似 Windows 任务栏效果，推荐程序员固定浏览器和终端到一、二号位

:::

---

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

:::note 最大化窗口隐藏标题栏

按 `Super + PageUp` 切换最大化窗口状态，配置：

    kwriteconfig5 --file ~/.config/kwinrc --group Windows --key BorderlessMaximizedWindows true
    qdbus org.kde.KWin /KWin reconfigure

:::

:::tip

上述配置完成后，请注销回话以生效

:::

### Kubuntu Wayland

:::caution KDE Wayland 尚在实验开发阶段

常见 bug: 连接外接显示器、重新登陆会话时，界面残缺

:::

```shell
sudo apt install -y plasma-workspace-wayland

# 相关推荐：
sudo apt install -y wl-clipboard
```

设置为自动登陆：搜索 `sddm` 打开“登陆画面”的 `行为设置`，更改 `使用会话`

然后注销会话，左下角选择 wayland 登陆以生效。

:::note KDE 字体查看器问题

wayland [bug](https://bugs.kde.org/show_bug.cgi?id=439470) 修复：

```
cd ~/.local/share/applications/
cp /usr/share/applications/org.kde.kfontview.desktop .
sed -i "/Exec/ s/=/=env QT_QPA_PLATFORM=xcb /" org.kde.kfontview.desktop
cd -
```

:::

<!-- 热区设置 -->

<!--
### 推荐快捷键

```shell
# Super + I 打开设置
kwriteconfig5 --file kglobalshortcutsrc --group systemsettings.desktop --key _launch Meta+I,none,
```
-->
