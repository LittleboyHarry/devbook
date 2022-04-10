---
title: 笔记本优化
---

## 登陆解锁方式

设置 PIN 或指纹

## 触摸板设置

    ms-settings:devices-touchpad

推荐：“三指手势”点击为“鼠标中键”

## BitLocker

<details>
    <summary>错误：系统找不到制定的文件</summary>

管理员运行：

    mv C:\Windows\System32\Recovery\ReAgent.xml C:\Windows\System32\Recovery\ReAgent.xml.old

</details>

## 节电

按需调整：

    ms-settings:batterysaver-settings

<!-- confirm?: ms-settings:batterysaver -->

## 硬件问题

入手的机器 BIOS 可能不是最新版，去厂家官网安装最新的 BIOS 固件升级包，也许可以缓解硬件 bug

## 调音器

源码：https://github.com/File-New-Project/EarTrumpet

    ms-windows-store://pdp?productId=9nblggh516xp&mode=mini

## 模拟数字键盘

针对 14 寸一下小电脑键盘，为 `jkluio7890` 映射为 1~9 0 数字键。依赖 AutoHotKey

<a className="button button--primary" href="/ahk/numpad.ahk" target="_blank" download>下载脚本</a>
