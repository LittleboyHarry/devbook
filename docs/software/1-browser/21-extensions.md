---
title: 扩展推荐
---

## 获取

| 扩展名        | 作用               | Chrome 商店 | Edge 外接程序 |
| ------------- | ------------------ | :---------: | :-----------: |
| Vimium C      | 免鼠标、键盘侠专用 | [Get][vc1]  |  [Get][vc2]   |
| Dark Reader   | 护眼模式           | [Get][dd1]  |  [Get][dd2]   |
| uBlock Origin | 去广告             | [Get][uo1]  |  [Get][uo2]   |
| Linkclump     | 框选多开           |  [Get][lc]  |

[dd1]: https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh
[dd2]: https://microsoftedge.microsoft.com/addons/detail/dark-reader/ifoakfbpdcdoeenechcleahebpibofpc
[uo1]: https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm
[uo2]: https://microsoftedge.microsoft.com/addons/detail/ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak
[lc]: https://chrome.google.com/webstore/detail/linkclump/lfpjkncokllnfokkgpkobnkbkmelfefj
[vc1]: https://chrome.google.com/webstore/detail/vimium-c-all-by-keyboard/hfjbmagddngcpeloejdejnfgbamkjaeg
[vc2]: https://microsoftedge.microsoft.com/addons/detail/vimium-c-all-by-keyboar/aibcglbfblnogfjhbcmmpobjhnomhcdo

专用类：

| 扩展名 | 作用          |    Chrome 商店    |    Edge 外接程序    |
| ------ | ------------- | :---------------: | :-----------------: |
| Gitako | GitHub 导航栏 | [Get][g1] | [Get][g2] |

[g1]: https://chrome.google.com/webstore/detail/gitako-github-file-tree/giljefjcheohhamkjphiebfjnlphnokk
[g2]: https://microsoftedge.microsoft.com/addons/detail/gitako-github-file-tree/alpoloddcggjhakjemghahlkofjekbca

> 附：高级篇 - [自编译打包扩展](https://gitee.com/littleboyharry-crx/ohmycrx/blob/master/README.md)，可省去下文手动配置的部分过程

## 配置文件

import {faScroll} from '@fortawesome/free-solid-svg-icons'

可导入：<FileItem button name="vimium_c.json" path="/config/vimium_c.json" icon={<FontAwesomeIcon icon={faScroll} />}/>

## 适用范围

| 扩展          | 作用域                       |
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

## 绑定快捷键

Dark Reader:

`Alt + Shift + A` 激活扩展

`Alt + Shift + D` 切换当前网站

Vimium C:

`Alt + V` 激活扩展

uBlock Origin:

`Alt + Delete` 进入临时移除元素模式

## 其它配置

### uBlock Origin

<iframe src="https://ghbtns.com/github-btn.html?user=littleboyharry&repo=oh-my-blockrules&type=star&count=true&size=large" frameborder="0" scrolling="0" width="180" height="32" title="GitHub" style={{float:'right'}}></iframe>

我的过滤规则集：[oh-my-blockrules](https://github.com/LittleboyHarry/oh-my-blockrules)

### Linkclump

- 默认 z 键激活
- 推荐勾选 `open tabs at the end`

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FileItem from '@theme/FileItem'
