---
sidebar_position: 17
---

# 为笔记本优化

import {HtmlA} from '@theme/links';

## 设置

- 解锁方式：
  <HtmlA href='ms-settings:signinoptions'>设置登录方式</HtmlA>
  （ 如：
  <HtmlA href="ms-settings:signinoptions-launchfingerprintenrollment">指纹</HtmlA>
  &nbsp;）
- <HtmlA href="ms-settings:batterysaver-settings">节省电量</HtmlA>

### 触摸板

<p><HtmlA href="ms-settings:devices-touchpad">设置“三指手势”点击作为“鼠标中键”</HtmlA> 或使用作者推荐手势：</p>

import { ConfigIcon } from '@theme/fai';

<p>
    <FileItem button name='gestures.reg' path="/config/win/gestures.reg" icon={<ConfigIcon />}/>
</p>

- 三指同时左右滑动：降低/提高音量
- 三指同时上下滑动：最大/最小化窗口
- 四指同时向下滑动：关闭窗口
- 四指同时向上滑动：任务视图
- 四指同时左右滑动：切换桌面

:::caution 重新登陆后生效！
:::

<!--

## BitLocker

仅专业版可用，防盗加密。veracrypt 是开源替代品

<details>
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

:::info 若要备份系统，先留步并留到后期加密
:::

:::note 附：[自动登录器](https://docs.microsoft.com/zh-cn/sysinternals/downloads/autologon)

Autologon 是微软官方提供的非自由软件，可设置免输入密码

<GetPkg choco="autologon" />

:::

## 调音器

## 模拟数字键盘

针对 14 寸一下小电脑键盘，为 `jkluio7890` 映射为 1~9 0 数字键。依赖 AutoHotKey

import { ScriptIcon } from '@theme/fai';

<FileItem name="numpad.ahk" path="/scripts/numpad.ahk" icon={<ScriptIcon />}/>

import FileItem from '@theme/FileItem'
import GetPkg from '@theme/GetPkg';
