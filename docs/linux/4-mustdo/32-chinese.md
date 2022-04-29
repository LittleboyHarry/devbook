---
title: 中文输入法
---

:::caution

`sudo` 时须关闭中文输入模式，否则输入密码错误

:::

<br/><br/>

iBus 中文输入体验效果并不理想，作者经常遇到卡顿、输入无响应等问题。fcitx5 可能是更好的开源输入法技术。

 <details className="let-details-to-gray">
<summary>如果还是打算使用 iBus ...</summary>

```shell
# 垂直显示
dconf write /com/github/libpinyin/ibus-libpinyin/libpinyin/lookup-table-orientation 1
# 禁用简繁切换键
dconf write /com/github/libpinyin/ibus-libpinyin/libpinyin/trad-switch "''"
# 禁用半角与全角切换
dconf write /com/github/libpinyin/ibus-libpinyin/libpinyin/punct-switch "''"
```

使用百度云拼音：( 需要上传输入数据以供分析 )

    dconf write /com/github/libpinyin/ibus-libpinyin/libpinyin/enable-cloud-input true

使用小鹤双拼：提高中文码字效率

```shell
cat << END | dconf load /com/github/libpinyin/ibus-libpinyin/libpinyin/
[/]
double-pinyin=true
double-pinyin-schema=5
END
```

改变外观：大号字体竖排候选框，需要 [GNOME 插件](https://extensions.gnome.org/extension/4112/customize-ibus/)

```shell
dconf write /org/gnome/shell/extensions/customize-ibus/input-indicator-only-on-toggle true
dconf write /desktop/ibus/panel/use-custom-font true
dconf write /desktop/ibus/panel/custom-font 'Sans 16'
dconf write /org/gnome/shell/extensions/customize-ibus/custom-font 'Sans 16'
```

</details>

## 获取 fcitx5

import {
PreferPkgMgr,
ForApt,
ForDnf,
} from '@theme/PreferPkgMgr'

 <PreferPkgMgr dnf apt>
<ForDnf>

```shell
sudo dnf in -y fcitx5-autostart fcitx5-chinese-addons fcitx5-configtool \ # 核心包
               kf5-kconfig-core                                           # 自动脚本配置工具
test -n "$KDE_FULL_SESSION" && sudo dnf in -y kcm-fcitx5                  # KDE 依赖模块
```

</ForDnf>
<ForApt>

```shell
sudo apt install -y fcitx5-chinese-addons fcitx5-config-qt           # 核心包
sudo apt install -y libkf5config-bin                                 # 自动脚本配置工具

test -n "$KDE_FULL_SESSION" && sudo apt install -y kde-config-fcitx5 # KDE 依赖模块
```

</ForApt>
</PreferPkgMgr>

## 自动配置

:::info 请确保启动过一次输入法后退出

<details>
  <summary>
自动配置仅考虑初始化环境。若自定义过的配置信息，请备份重置：
</summary>

    mv ~/.config/fcitx5 backupcfg-fcitx

</details>

:::

### 解除快捷键冲突

程序开发者请注意：

- 以 Super+Space 代替 Ctrl+Space
- 解除 Ctrl+Shift+F 简繁体切换键

对应的自动配置脚本：

```shell
kwriteconfig5 --file fcitx5/config --group Hotkey/TriggerKeys --key 0 Super+space
kwriteconfig5 --file fcitx5/conf/chttrans.conf --group Hotkey --key 0 ''
```

### 笔者偏好配置

 <details className="let-details-to-gray">
<summary>仅供参考，因人而异</summary>

```shell
# 不因应用而切换语言：
kwriteconfig5 --file fcitx5/config --group Behavior --key ShareInputState All

# 外观微调：
kwriteconfig5 --file fcitx5/conf/pinyin.conf --group "<default>" --key PageSize 5
kwriteconfig5 --file fcitx5/conf/classicui.conf --group "<default>" --key "Vertical Candidate List" True
kwriteconfig5 --file fcitx5/conf/classicui.conf --group "<default>" --key Font "Noto Sans CJK SC 22"

# Super+V 弹出剪贴板：
kwriteconfig5 --file fcitx5/conf/clipboard.conf --group TriggerKey --key 0 "Super+V"
```

使用小鹤双拼：

```shell
kwriteconfig5 --file fcitx5/profile --group Groups/0 --key DefaultIM shuangpin
kwriteconfig5 --file fcitx5/profile --group Groups/0/Items/1 --key Name shuangpin
kwriteconfig5 --file fcitx5/conf/pinyin.conf --group "<default>" --key ShuangpinProfile Xiaohe
```

</details>

### 在 GNOME 中使用

```shell
# 解除 iBus 占用 Ctrl+Space
gsettings set org.gnome.desktop.wm.keybindings switch-input-source "[]"
gsettings set org.gnome.desktop.wm.keybindings switch-input-source-backward "[]"

# 解除 Super+V 的占用
gsettings set org.gnome.shell.keybindings toggle-message-tray "['<Super>m']"

```

:::note 改善 GNOME 外观的[扩展](https://extensions.gnome.org/extension/261/kimpanel/)：

大号字体竖排候选框

```shell
cat << END | dconf load /org/gnome/shell/extensions/kimpanel/
[/]
font='Noto Sans CJK SC 18'
vertical=true
END
```

:::

:::caution 若在 GNOME 中更改过键位重映射：

    kwriteconfig5 --file ~/.config/fcitx5/conf/xcb.conf --group "<default>" --key 'Allow Overriding System XKB Settings' False

:::

<div className="alert alert--warning">
所有 kwriteconfig5 配置后，再次启动输入法甚至重启系统得以生效
</div>
