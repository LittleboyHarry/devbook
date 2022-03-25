---
title: 界面缩放
---

我的 14 寸电脑缩放后所用的配置：大号缩放、字体字号、光标等属性

```shell
cat << END | dconf load /org/gnome/desktop/interface/
[/]
text-scaling-factor=1.33
document-font-name='Cantarell 13'
font-name='Cantarell 13'
monospace-font-name='Source Code Pro 12'
cursor-size=48
END
```

:::info 减少顶栏对屏幕空间的占用？

安装 [just-perfection](https://extensions.gnome.org/extension/3843/just-perfection/) 扩展进行微调，推荐大小：

    dconf write /org/gnome/shell/extensions/just-perfection/panel-size 38

:::

:::note 为具体应用单独设置缩放的方法

从 `/usr/share/applications/*.desktop` 复制一份到 `~/.local/share/applications/` 中，
为所有 `Exec=` 值添加前缀 `env QT_SCALE_FACTOR=0.65`

0.65 是我 14 寸笔记本显示屏的推荐缩放比例。
以调整 VirtualBox 为例，编辑 `~/.local/bin/VirtualBox`：

```shell
#!/bin/bash

export QT_QPA_PLATFORM=xcb
export QT_SCALE_FACTOR=0.7
/usr/bin/VirtualBox "$@"
```

最后给予执行权限 `chmod +x` 即可，下次在应用菜单中运行就生效了

:::

安装 `gnome-tweaks` 后可调整字体大小。