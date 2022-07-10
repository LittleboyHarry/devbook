---
sidebar_position: 17
---

# 为笔记本优化

import {HtmlA} from '@theme/unique/links';

## 设置

- 解锁方式：
  <HtmlA href='ms-settings:signinoptions'>设置登录方式</HtmlA>
  （ 如：
  <HtmlA href="ms-settings:signinoptions-launchfingerprintenrollment">指纹</HtmlA>
  &nbsp;）
- <HtmlA href="ms-settings:batterysaver-settings">节省电量</HtmlA>

### 触摸板

import CodeType from '@theme/unique/CodeType'

<p>
<HtmlA href="ms-settings:devices-touchpad">设置“三指手势”点击作为“鼠标中键”</HtmlA>
</p>

<CodeType reg>
或使用作者推荐手势：
</CodeType>

- 三指同时左右滑动：降低/提高音量
- 三指同时上下滑动：最大/最小化窗口
- 四指同时向下滑动：关闭窗口
- 四指同时向上滑动：任务视图
- 四指同时左右滑动：切换桌面

import CodeBlock from '@theme/CodeBlock';
import gestureRegCode from '!!raw-loader!./gestures.reg';

<CodeBlock language="ini">{gestureRegCode}</CodeBlock>

:::caution 重新登陆后生效！
:::

## 硬件问题

入手的机器 BIOS 可能不是最新版，去厂家官网安装最新的 BIOS 固件升级包，也许可以缓解硬件 bug

## 调音器

## 模拟数字键盘

针对 14 寸一下小电脑键盘，为 `jkluio7890` 映射为 1~9 0 数字键。依赖 AutoHotKey

import { ScriptIcon } from '@theme/unique/fai';

<FileItem name="numpad.ahk" path="/scripts/numpad.ahk" icon={<ScriptIcon />}/>

import FileItem from '@theme/unique/FileItem'
