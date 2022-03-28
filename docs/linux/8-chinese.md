---
title: 改善中文输入
---

## iBus 微调

```shell
# 垂直显示
dconf write /com/github/libpinyin/ibus-libpinyin/libpinyin/lookup-table-orientation 1
# 禁用简繁切换键
dconf write /com/github/libpinyin/ibus-libpinyin/libpinyin/trad-switch ''
# 禁用半角与全角切换
dconf write /com/github/libpinyin/ibus-libpinyin/libpinyin/punct-switch ''
```

使用百度云拼音：

    dconf write /com/github/libpinyin/ibus-libpinyin/libpinyin/enable-cloud-input true

:::note 使用小鹤双拼

十分推荐双拼输入，以提高中文码字效率

    cat << END | dconf load /com/github/libpinyin/ibus-libpinyin/libpinyin/
    [/]
    double-pinyin=true
    double-pinyin-schema=5
    END

:::

:::note 使用 [GNOME 插件](https://extensions.gnome.org/extension/4112/customize-ibus/) 优化外观

```shell
dconf write /org/gnome/shell/extensions/customize-ibus/input-indicator-only-on-toggle true
dconf write /desktop/ibus/panel/use-custom-font true
dconf write /desktop/ibus/panel/custom-font 'Sans 16'
dconf write /org/gnome/shell/extensions/customize-ibus/custom-font 'Sans 16'
```

:::

## fcitx5

iBus 体验并不理想，作者经常遇到卡顿、输入无响应等问题：尤其是非 Ubuntu 系统。

或许 fcitx 是更好的开源输入法方案：

    sudo dnf in -y fcitx5-autostart fcitx5-chinese-addons fcitx5-configtool

KDE 环境: `sudo dnf in -y kcm-fcitx5`

依赖 GNOME 扩展: https://extensions.gnome.org/extension/261/kimpanel/

### fcitx5 配置

图形化配置工具：`fcitx5-configtool`

<div className="let-tipbg-to-yellow">

:::tip 自动配置

非 KDE 环境需要安装辅助工具：

    sudo dnf in -y kf5-kconfig-core

<details className="let-details-to-yellow">
  <summary>若先前已配置过 fcitx5 输入法？</summary>
  本文只考虑过初始配置状态，自动二次配置难免会有 bug，
  建议备份旧配置后重置
<br/>
<code>mv ~/.config/fcitx5 backupcfg-fcitx</code>
</details>

:::

</div>

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

### 笔者偏好

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
