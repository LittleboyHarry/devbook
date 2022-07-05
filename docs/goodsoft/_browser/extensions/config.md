
<div style={props.firefox&&{display: 'none'}} className="no-table-header no-table-border">

## 设置适用网站范围

打开扩展设置：

|               |                              |
| ------------- | ---------------------------- |
| Dark Reader   | 所有站点：无痕模式、本地文件 |
| uBlock Origin | 所有站点：无痕模式、本地文件 |
| Vimium C      | 所有站点：无痕模式、本地文件 |

<div className="autoselect-item-of-list">

Gitako:

- github.com

Linkclump:

- www.baidu.com
- www.google.com
- www.google.com.hk

</div>

</div>

## 绑定快捷键

 <div className="left-float-scope">
<div>

Dark Reader:

`Alt + Shift + A` 切换当前网站

<div style={props.firefox&&{display: 'none'}}>

`Alt + Shift + S` 弹出调整面板

</div>

<!-- `Alt + Shift + D` 全局禁用 -->

</div>

<div>
Vimium C:

`Alt + V` 激活扩展

uBlock Origin:

`Alt + Delete` 进入临时移除元素模式

</div>
</div>

## 具体配置

### Vimium C

import { ScriptIcon } from '@theme/unique/fai';

<p>可导入：
<FileItem button name="vimium_c.json" path="/config/vimium_c.json" icon={<ScriptIcon />}/></p>

### uBlock Origin

自动忽略 Cookies 许可协议：

    https://www.i-dont-care-about-cookies.eu/abp/

<iframe src="https://ghbtns.com/github-btn.html?user=littleboyharry&repo=adbrules&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="180" height="32" title="GitHub" style={{float:'right'}}></iframe>

我的过滤规则集：[adbrules](https://github.com/LittleboyHarry/adbrules)

### Cookie AutoDelete

搭配 Firefox 容器（ 激活 “启用容器标签支持” ）或 Chromium 身份使用。

设置重启浏览器后自动清理：添加表达式 * 为灰名单，激活“启用自动清理”

 <div style={props.chromium?{}:{display: 'none'}}>

### Linkclump

- 默认 z 键激活
- 推荐勾选 `open tabs at the end`

</div>

import FileItem from '@theme/unique/FileItem'
