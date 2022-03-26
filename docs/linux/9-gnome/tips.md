---
title: 小技巧
---

## 快捷键

通用

| 键          | 作用           |
| ----------- | -------------- |
| Alt + Tab   | 切换窗口       |
| Super + Tab | 应用间切换窗口 |

gedit 文本编辑器：

| 键       | 作用   |
| -------- | ------ |
| Ctrl + D | 删除行 |

## 为具体应用单独设置缩放的方法

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