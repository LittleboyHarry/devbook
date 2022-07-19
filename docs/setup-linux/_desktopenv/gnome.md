import st from './gnome.module.scss';

import {
PreferNetShore,
OffshoreNet,
InshoreNet,
} from '@theme/unique/PreferNetShore'

<div className={st.root}>

:::note GNOME 一键优化

<PreferNetShore>

下载优化脚本：

 <OffshoreNet>

```shell
git clone https://github.com/LittleboyHarry/setup-gnome
cd setup-gnome
```

</OffshoreNet>
 <InshoreNet>

```shell
git clone https://gitcode.net/lbh/ignome setup-gnome
cd setup-gnome
```

</InshoreNet>
</PreferNetShore>

编辑 `./Makefile`，然后运行 `make`

<div className="full-width-table">

| 目标                                                   | 作用                                                  |
| :----------------------------------------------------- | :---------------------------------------------------- |
| enable-touchpad-tap-to-click                           | 触摸板轻触发出单机信号                                |
| enable-resize-window-by-superkey-and-rightclk-drag     | Super 键 + 右键拖拽控制窗口大小                       |
| shutdown-when-pressed-powerbtn                         | 按电源键按钮关机                                      |
| restrict-alttab-to-current-app                         | 限制 Alt + Tab 仅在同应用内切换。应用间切换按 Alt + ` |
| shutdown-when-pressed-powerbtn                         | 按 Super + D 显示桌面                                 |
| show-process-tree-in-system-monitor                    | 显示进程树                                            |
| no-redundant-characters-on-search-result               | 不要在全局搜索中出现干扰人的 emoji 等字符结果         |
| add-minmaxbtn-to-windowbar                             | 显示窗口标题栏的最小最大化按钮                        |
| skip-confirm-before-60s-shutdown-confirm               | 省去 60s 关机确认                                     |
| optimize-alt-grave-app-switcher-appearance             | Alt + ` 外观优化                                      |
| show-battery-percentage-weekday-weekindex-in-top-panel | 在顶栏显示电池百分比、星期几、日历的周序              |

</div>

:::

:::note 推荐的快捷键

仿 Windows 风格的映射

    cat ./recommend-keymap.dconf | dconf load /

<div className="autoselect-cell-of-table full-width-table">

| 作用       | 按键               |
| ---------- | ------------------ |
| 文件管理器 | Super + E          |
| 设置       | Super + I          |
| 系统监视器 | Ctrl + Shift + Esc |
| 截图 \*    | Super + Shift + S  |

</div>

- **F1** 打开终端
- \* GNOME 42 已移除 `gnome-screenshot` 并强化了 `PrtScr` 截图键的功能、支持录屏

:::

</div>
