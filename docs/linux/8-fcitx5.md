---
title: 改善中文输入
---

技术方案：fcitx5

如果觉得 Fedora GNOME 自带的 ibus 中文输入不太好用，可以考虑打开终端并安装 fcitx5: (否则跳过本文)

    sudo dnf in -y fcitx5-autostart fcitx5-chinese-addons fcitx5-configtool

KDE 环境: `sudo dnf in -y kcm-fcitx5`

依赖 GNOME 扩展: https://extensions.gnome.org/extension/261/kimpanel/

强烈推荐学习双拼输入，参考[知乎讨论](https://www.zhihu.com/topic/19625382/top-answers);

## 配置

图形化配置工具：`fcitx5-configtool`

:::tip 自动配置

非 KDE 环境需要安装辅助工具：

    sudo dnf in -y kf5-kconfig-core

<details>
  <summary>若先前已配置过 fcitx5 输入法？</summary>
  本文只考虑过初始配置状态，自动二次配置难免会有 bug，
  建议备份旧配置后重置
<br/>
<code>mv ~/.config/fcitx5 backupcfg-fcitx</code>
</details>

:::

**注意**：配置前，请启动一次 fcitx5 输入法并退出

    pkill fcitx5

:::caution 程序员请考虑按下文解除快捷键冲突

:::

### 输入法切换键

`Ctrl + Space` 可改为 `Super + Space`，让给 IDE 编辑器智能提示键

    kwriteconfig5 --file fcitx5/config --group Hotkey/TriggerKeys --key 0 Super+space

:::note GNOME

解除系统默认绑定：

    gsettings set org.gnome.desktop.wm.keybindings switch-input-source "[]"
    gsettings set org.gnome.desktop.wm.keybindings switch-input-source-backward "[]"

:::

### 简繁体切换键

禁用 `Ctrl + Shift + F`

    kwriteconfig5 --file fcitx5/conf/chttrans.conf --group Hotkey --key 0 ''

### 附加组件

:::note GNOME

“剪贴板” 改用 `Super + V` 的方法：解除 GNOME 默认快捷键的占用

    gsettings set org.gnome.shell.keybindings toggle-message-tray "['<Super>m']"

:::

## 笔者偏好

仅供参考

小鹤双拼：

```shell
kwriteconfig5 --file fcitx5/profile --group Groups/0 --key DefaultIM shuangpin
kwriteconfig5 --file fcitx5/profile --group Groups/0/Items/1 --key Name shuangpin
kwriteconfig5 --file fcitx5/conf/pinyin.conf --group "<default>" --key ShuangpinProfile Xiaohe
```

外观微调

```shell
kwriteconfig5 --file fcitx5/conf/pinyin.conf --group "<default>" --key PageSize 5
kwriteconfig5 --file fcitx5/conf/classicui.conf --group "<default>" --key "Vertical Candidate List" True
kwriteconfig5 --file fcitx5/conf/classicui.conf --group "<default>" --key Font "Noto Sans CJK SC 20"
```

GNOME 扩展 kimpanel 外观：

```shell
cat << END | dconf load /org/gnome/shell/extensions/kimpanel/
[/]
font='Noto Sans CJK SC 16'
vertical=true
END
```

不区分应用而切换输入语言

    kwriteconfig5 --file fcitx5/config --group Behavior --key ShareInputState All

<details>
    <summary>特例：GNOME 曾设置过键位重映射</summary>

需要禁用 xkb 绑定并重启系统

    kwriteconfig5 --file ~/.config/fcitx5/conf/xcb.conf --group "<default>" --key 'Allow Overriding System XKB Settings' False

</details>

:::tip 完成配置

重启 fcitx5 以生效

:::
