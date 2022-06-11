:::note 自动部署

使用 `deployworkenv`

    gnome/optimize

内容：

1. 激活触摸板轻触点击
2. 显示最小最大化窗口按钮
3. 跳过 60s 关机前确认
4. 按下键盘电源键关机
5. 允许 `Super + 右键` 拖拽更改窗口大小
6. 限制应用切换器作用于当前工作区
7. 关闭干扰的字符搜索支持
8. `Super + D` 键显示桌面
9. 使用树视图的任务管理器
10. 强化同应用窗口切换 Alt + \` 键

:::

:::note 巧用触摸板调整窗口大小

设置 `Super + Z` 触发，自行摸索适应一下~

    dconf write /org/gnome/desktop/wm/keybindings/begin-resize "['<Super>z']"

:::

### 推荐的快捷键

来自 Windows 风格的快捷键：

<div className="autoselect-cell-of-table no-table-border">

| 作用       | 按键               |
| ---------- | ------------------ |
| 文件管理器 | Super + E          |
| 设置       | Super + I          |
| 系统监视器 | Ctrl + Shift + Esc |
| 截图 \*    | Super + Shift + S  |

</div>

\*注：

- F1 打开终端
- GNOME 42 已移除 `gnome-screenshot` 并强化了 `PrtScr` 截图键的功能、支持录屏

```shell
gnome/addkeymap
```
