---
title: 为笔记本优化
sidebar_position: 17
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

## 数据防盗

使用 [VeraCrypt](https://www.veracrypt.fr/en/Downloads.html) 加密

<GetPkg name="veracrypt" choco winget />

:::note 附：[自动登录器](https://docs.microsoft.com/zh-cn/sysinternals/downloads/autologon)

Autologon 是微软官方提供的非自由软件，可设置免输入密码

<GetPkg choco="autologon" />

:::

## 调音器

## 模拟数字键盘

针对 14 寸一下小电脑键盘，为 `jkluio7890` 映射为 1~9 0 数字键。依赖 AutoHotKey

<FileItem name="numpad.ahk" path="/scripts/numpad.ahk" icon={<ScriptIcon />}/>

import { ScriptIcon } from '@theme/fai';
import FileItem from '@theme/FileItem'
import {MstoreButton} from '@theme/links';
