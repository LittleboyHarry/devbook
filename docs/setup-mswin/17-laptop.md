---
title: 为笔记本优化
---

import {HtmlA} from '@theme/links';

## 设置

- 解锁方式： 设置 PIN 或指纹
- <HtmlA href="ms-settings:devices-touchpad">配置触摸板</HtmlA>：建议“三指手势”点击作为“鼠标中键”
- <HtmlA href="ms-settings:batterysaver-settings">节省电量</HtmlA>

<!--

## BitLocker

仅专业版可用，防盗加密。veracrypt 是开源替代品

<details className="let-details-to-gray">
    <summary>错误：系统找不到制定的文件</summary>

管理员运行：

    mv C:\Windows\System32\Recovery\ReAgent.xml C:\Windows\System32\Recovery\ReAgent.xml.old

</details>
 -->

## 硬件问题

入手的机器 BIOS 可能不是最新版，去厂家官网安装最新的 BIOS 固件升级包，也许可以缓解硬件 bug

## 调音器

import {MstoreButton} from '@theme/links';

<MstoreButton id="9nblggh516xp" name="从商店安装 EarTrumpet" />

_来自[开源项目](https://github.com/File-New-Project/EarTrumpet)_

## 模拟数字键盘

针对 14 寸一下小电脑键盘，为 `jkluio7890` 映射为 1~9 0 数字键。依赖 AutoHotKey

import {faScroll} from '@fortawesome/free-solid-svg-icons'

<FileItem name="numpad.ahk" path="/scripts/numpad.ahk" icon={<FontAwesomeIcon icon={faScroll} />}/>

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FileItem from '@theme/FileItem'
