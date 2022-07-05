# 推荐软件

import { HtmlA, StoreLink, mslink } from '@theme/unique/links';

## 付费软件

<div className='no-table-border no-table-header full-width-table'>

|                                                                 |      |
| --------------------------------------------------------------- | ---- |
| <StoreLink to={mslink`9NBLGGH35LXN`} text='Afinity Photo' />    | 修图 |
| <StoreLink to={mslink`9NBLGGH35LRM`} text='Afinity Designer' /> | 制图 |

</div>

## Win 11 安卓子系统

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

附：[国内正版代理商索引](https://zhuanlan.zhihu.com/p/93284719)
