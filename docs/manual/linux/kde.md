# 桌面环境 KDE 技巧

## 小技巧

- 在任务栏托盘图标上鼠标滚轮操作，可以调整音量、电池和亮度（即屏幕亮度）

## 快捷键

 <div className="no-table-header">
<div className="left-float-scope">
<div>

### 窗口管理

|          |                  |
| -------- | ---------------- |
| 窗口菜单 | Alt + F3         |
| 杀死程序 | Ctrl + Alt + Esc |
| 最大化   | Super + PageUp   |
| 最小化   | Super + PageDown |

窗口菜单高级功能：置顶

</div><div>

### 通用行为

|            |                  |
| ---------- | ---------------- |
| 任务管理器 | Ctrl + Esc       |
| 配置应用   | Ctrl + Shift + , |
| 退出       | Ctrl + Q         |

</div></div>

 <div className="left-float-scope">
<div>

### 文件管理器

程序名 `dolphin`

|                  |            |
| ---------------- | ---------- |
| 低边栏中打开终端 | F4         |
| 新窗口中打开终端 | Shift + F4 |
| 新建文件夹       | F10        |
| 左右分割视图     | F3         |

</div><div>

### KWrite

Vi 模式：按下 `Ctrl + Alt + V` 切换

</div></div></div>

## 菜单编辑器

安装并输入 `kmenuedit` 命令打开

:::note 取消隐藏条目

“菜单编辑器”应用本体就可能被隐藏了。以此为例，解除隐藏的方法：

`Ctrl + Shift + ,` 勾选“显示隐藏条目”，确定。搜索”菜单编辑器“，取消”隐藏条目“的勾选。

其它应用类似操作。如果感兴趣，你还可以找到一些有用的隐藏功能。

:::

## 界面消失、卡住？

会话内 pty 终端重启会话（`Alt+Space` 激活 KRunner 粘贴执行 ）

    killall plasmashell;kstart plasmashell

会话外 tty 终端杀死会话（ `Ctrl+Alt+F3~6` 切换 ）

    killall plasma_session
