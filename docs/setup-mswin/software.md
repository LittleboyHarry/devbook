---
sidebar_position: 16
---

# 推荐软件

import { HtmlA, StoreLink, mslink } from '@theme/links';
import GetPkg from '@theme/GetPkg';
import CodeType from '@theme/CodeType'

 <CodeType pwsh admin>

## 使用 Chocolatey 包管理器<input type='checkbox'/>

</CodeType>

import GetChoco from '/docs/setup-mswin/\_getchoco.md'

<GetChoco />

## BT 下载器<input type='checkbox'/>

## 常用软件<input type="checkbox" />

下载自高校镜像站:

<div className={cs('no-table-border full-width-table')}>

| 自由软件 | 用途         |                                 获取链接和推荐版 | 可信发布商 |
| -------: | :----------- | -----------------------------------------------: | :--------- |
|      VLC | 多媒体播放器 | [选择 `win64, msi`](https://mirrorz.org/app/VLC) | VideoLAN   |

<div className={cs('no-table-header')}>

创作类：

|      |      |                                                  |     |
| ---: | :--- | -----------------------------------------------: | :-- |
| GIMP | 修图 | [选择 `win64, msi`](https://mirrorz.org/app/VLC) |

</div>

</div>

## 数据加密

BitLocker 仅专业版可用，
[VeraCrypt](https://www.veracrypt.fr/en/Downloads.html) 是开源替代品

<GetPkg name="veracrypt" choco winget />

:::caution 若要备份系统，请备份后再开始加密
:::

## 商店安装

import cs from 'clsx'
import st from './store.module.scss'

<div className={cs('no-table-border no-table-header full-width-table',st.fixedTableColsRatio)}>

必备类：

|                                                            |          |
| ---------------------------------------------------------- | -------- |
| <StoreLink to={mslink`XPDM1ZW6815MQM`} text='VLC' />       | 播放器   |
| <StoreLink to={mslink`9N93MRMSXBF0`} text='KDE Connect' /> | 连接手机 |

功能类：

|                                                                 |                          |
| --------------------------------------------------------------- | ------------------------ |
| <StoreLink to={mslink`9N8G7TSCL18R`} text='NanoZip' />          | 7zip 改进版，支持 win11  |
| <StoreLink to={mslink`XP8JK4HZBVF435`} text='Auto Dark Mode' /> | 护眼：自动深色模式       |
| <StoreLink to={mslink`9PLJWWSV01LK`} text='Twinkle Tray' />     | 护眼：调节外接显示屏亮度 |
| <StoreLink to={mslink`9NBLGGH516XP`} text='EarTrumpet' />       | 更好的音量调节器         |
| <StoreLink to={mslink`9PFXCD722M2C`} text='KDE Filelight' />    | 硬盘空间分析             |
| <StoreLink to={mslink`XP89DCGQ3K6VLD`} text='PowerToys' />      | 微软出品的系统增强工具   |

</div>
