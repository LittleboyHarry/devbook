---
sidebar_position: 32
---

# 中文输入法

:::caution

`sudo` 时须关闭中文输入模式，否则输入密码错误

:::

<br/><br/>

iBus 中文输入体验效果并不理想，作者经常遇到卡顿、输入无响应等问题。fcitx5 可能是更好的开源输入法技术。

 <details>
<summary>仍然使用 iBus 吗？</summary>

https://gitcode.net/lbh/dwe/-/blob/main/cn/ibus/README.md

</details>

## 获取 fcitx5

import {
PreferPkgMgr,
ForApt,
ForDnf,
ForPacman
} from '@theme/PreferPkgMgr'

 <PreferPkgMgr dnf apt pacman>
<ForDnf>

```shell
sudo dnf in -y fcitx5-autostart fcitx5-chinese-addons fcitx5-configtool # 核心包
sudo dnf in -y kf5-kconfig-core # 自动脚本配置工具

if [ "$XDG_CURRENT_DESKTOP" == "KDE" ]; then
    sudo dnf in -y kcm-fcitx5
fi
```

</ForDnf>
<ForApt>

```shell
sudo apt install -y fcitx5-chinese-addons fcitx5-config-qt # 核心包
sudo apt install -y libkf5config-bin # 自动脚本配置工具

if [ "$XDG_CURRENT_DESKTOP" == "KDE" ]; then
    sudo dnf in -y kde-config-fcitx5
fi
```

搜索 `inp` 打开“语言支持”，更改输入法为 fcitx5

</ForApt>
<ForPacman>

```shell
sudo pacman -S --noconfirm fcitx5-im fcitx5-chinese-addons # 核心包
sudo pacman -S --noconfirm fcitx5-pinyin-zhwiki # 维基词库
if [ "$XDG_CURRENT_DESKTOP" == "KDE" ]; then
    sudo pacman -S --noconfirm kcm-fcitx5
fi
```

</ForPacman>
</PreferPkgMgr>

## 自动配置

<details className='let-details-to-gray'>
  <summary>
本文只考虑新装好的输入法。备份配置并重置的方法：
</summary>

    mv ~/.config/fcitx5 backupcfg-fcitx

</details>

:::note 自动生成默认所需的配置文件：

    pkill fcitx5; timeout 2s fcitx5

:::

参考 [Deploy Workenv 配置指引](https://gitcode.net/lbh/dwe/-/blob/main/cn/fcitx5/README.md)

需要重启输入法，甚至重启计算机以生效
