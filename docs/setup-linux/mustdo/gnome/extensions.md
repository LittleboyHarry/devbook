---
sidebar_position: 80
---

# GNOME 推荐扩展

## 扩展管理器

<GetPkg name="gnome-extensions-app" apt dnf />

作用于 https://extensions.gnome.org 的 Chromium 依赖[扩展](https://chrome.google.com/webstore/detail/gnome-shell-integration/gphhapmejobijbbhgpjhcjognlahblep)

:::note 新型管理器，仅[新仓库](https://repology.org/badge/vertical-allrepos/extension-manager.svg)提供

无需借助浏览器来安装扩展：

<GetPkg name="gnome-shell-extension-manager" apt />

:::

## 推荐插件

外观类：

- 自动细节调整:
  [Gnome 4x UI Improvements](https://extensions.gnome.org/extension/4158/gnome-40-ui-improvements/)
- 手动细节微调:
  [Just Perfection](https://extensions.gnome.org/extension/3843/just-perfection/)
- 在活动概览视图时，中键关闭:
  [Quick Close in Overview](https://extensions.gnome.org/extension/352/middle-click-to-close-in-overview/)
- 夜间自动切换:
  [Night Theme Switcher](https://extensions.gnome.org/extension/2236/night-theme-switcher/)

<!--
- 壁纸透显:
  [Blur my Shell](https://extensions.gnome.org/extension/3193/blur-my-shell/)
 -->

顶栏：

- 系统信息监视器:
  [Vitals](https://extensions.gnome.org/extension/1460/vitals/)
- 活动窗口列表:
  [BaBar Task Bar](https://extensions.gnome.org/extension/4000/babar/)
- 调整电源菜单按钮：
  [Bring Out Submenu Of Power Off Logout Button](https://extensions.gnome.org/extension/2917/bring-out-submenu-of-power-offlogout-button/)

程序员：

- 剪贴板:
  [Clipboard Indicator](https://extensions.gnome.org/extension/779/clipboard-indicator/)

  默认 `Ctrl + F10` 可以清除所有记录

功能类：

- 触摸板手势强化: [Gesture Improvements](https://extensions.gnome.org/extension/4245/gesture-improvements/)

## 作者偏好的配置

 <details><summary>仅供参考，点击展开 </summary>

Just Perfection:

    dconf write /org/gnome/shell/extensions/just-perfection/workspace-switcher-size 9

BaBar Task Bar:

    gnome/ext/babar

<!--
Blur my Shell:

```shell
cat << END | dconf load /org/gnome/shell/extensions/blur-my-shell/
[/]
blur-appfolders=false
blur-dash=false
brightness=0.33
END
```
-->

Night Theme Switcher:

    gnome/ext/autonight

Clipboard Indicator: ( Super + V 选择 )

```shell
gsettings set org.gnome.shell.keybindings toggle-message-tray "['<Super>m']"
dconf write /org/gnome/shell/extensions/clipboard-indicator/toggle-menu "['<Super>v']"
dconf write /org/gnome/shell/extensions/clipboard-indicator/cache-only-favorites true
```

Gesture Improvements:

    gnome/ext/bettergesture

</details>

## 其它推荐

- 适用于 GNOME 的 KDE Connect 移动设备互联互通:
  [GSConnect](https://extensions.gnome.org/extension/1319/gsconnect/)，依赖：

      sudo dnf in -y openssl

<!--
todo:
https://extensions.gnome.org/extension/2594/always-indicator/
https://extensions.gnome.org/extension/3952/workspace-indicator/
https://extensions.gnome.org/extension/1401/bluetooth-quick-connect/
https://extensions.gnome.org/extension/3733/tiling-assistant/
 -->

## 版本不兼容？

:::caution 本方法可能会发生难以预料的后果

一种绕开系统监测的方法，谨慎试用：

:::

1. 下载应用最新版安装包，并解压
2. 修改 `metadata.json` 版本号
3. 执行脚本
4. 重新登陆

```shell
uuid=$(grep '"uuid"' metadata.json | sed 's@^[ ]*"uuid":[ ]*"\(.\+\)",[ ]*@\1@')
target=~/.local/share/gnome-shell/extensions/$uuid/
mkdir $target
cp -r * $target
```

import GetPkg from '@theme/GetPkg';
