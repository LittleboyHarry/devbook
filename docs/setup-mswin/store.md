---
title: 商店推荐
sidebar_position: 16
---

 <div className="no-table-border no-table-header">

## 自由软件

必备类：

|                                                            |          |
| ---------------------------------------------------------- | -------- |
| <StoreLink to={mslink`XPDM1ZW6815MQM`} text='VLC' />       | 播放器   |
| <StoreLink to={mslink`9N93MRMSXBF0`} text='KDE Connect' /> | 连接手机 |

功能类：

|                                                                 |                          |
| --------------------------------------------------------------- | ------------------------ |
| <StoreLink to={mslink`XP8JK4HZBVF435`} text='Auto Dark Mode' /> | 护眼：自动深色模式       |
| <StoreLink to={mslink`9PLJWWSV01LK`} text='Twinkle Tray' />     | 护眼：调节外接显示屏亮度 |
| <StoreLink to={mslink`9NBLGGH516XP`} text='EarTrumpet' />       | 更好的音量调节器         |
| <StoreLink to={mslink`9PFXCD722M2C`} text='KDE Filelight' />    | 硬盘空间分析             |
| <StoreLink to={mslink`XP89DCGQ3K6VLD`} text='PowerToys' />      | 微软出品的系统增强工具   |

创作类：

|                                                         |              |
| ------------------------------------------------------- | ------------ |
| <StoreLink to={mslink`9PD9BHGLFC7H`} text='Inkscape' /> | 矢量图编辑器 |

## 付费软件

|                                                                 |      |
| --------------------------------------------------------------- | ---- |
| <StoreLink to={mslink`9NBLGGH35LXN`} text='Afinity Photo' />    | 修图 |
| <StoreLink to={mslink`9NBLGGH35LRM`} text='Afinity Designer' /> | 制图 |

</div>

附：[国内正版代理商索引](https://zhuanlan.zhihu.com/p/93284719)

 <details><summary>Win 11 安卓子系统</summary>

截至 2022 年，子系统仅在美区可以安装

打开<HtmlA href="ms-settings:regionlanguage">“语言和区域”设置</HtmlA>，
更改“国家或地区”为美国[^1]，
然后 <StoreLink to={mslink`9P3395VX91NR`} text="从应用商店安装" />

[^1]: 从列表末 `PageUp` 上翻约 9\~10 次可以找到

:::note ADB 安装应用

1. 安装 ADB 工具
2. 搜索开始菜单 Android 打开子系统设置
3. 激活“开发人员模式”
4. 运行连接指令：

   adb connect 127.0.0.1:58526

安装指令：`adb install ./*.apk`

:::

</details>

import GetPkg from '@theme/GetPkg';
import { HtmlA, StoreLink, mslink } from '@theme/links';
