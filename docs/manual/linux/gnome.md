---
description: ...
---

# 桌面环境 GNOME 技巧

- 按住 Super 键 + 鼠标滚轮可以切换工作区，以方便整理多应用窗口

## 快捷键

 <div className="no-table-header">
<div className="left-float-scope">
<div>

### 通用

|             |                |
| ----------- | -------------- |
| Alt + Tab   | 切换窗口       |
| Super + Tab | 应用间切换窗口 |

</div><div>

### gedit 文本编辑器

|          |        |
| -------- | ------ |
| Ctrl + D | 删除行 |

</div></div></div>

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
