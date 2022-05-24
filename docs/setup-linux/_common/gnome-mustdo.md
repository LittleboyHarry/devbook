`deployworkenv` 自动部署

```shell
./gnome/optimize-cn
# 默认部署：yes | ./gnome/optimize-cn
```

:::note 巧用触摸板调整窗口大小

设置 `Super + Z` 触发，自行摸索适应一下~

    dconf write /org/gnome/desktop/wm/keybindings/begin-resize "['<Super>z']"

:::

### 推荐的快捷键

来自 Windows 风格的快捷键：

<div className="autoselect-cell-of-table">

| 作用       | 命令                           | 按键              |
| ---------- | ------------------------------ | ----------------- |
| 打开终端   | gnome-terminal                 | Super + X         |
| 文件管理器 | nautilus                       | Super + E         |
| 设置       | gnome-control-center           | Super + I         |
| 截图 \*    | gnome-screenshot --interactive | Super + Shift + S |

</div>

\*注：GNOME 42 已移除 `gnome-screenshot` 并强化了 `PrtScr` 截图键的功能、支持录屏

    ./gnome/winkey
