---
title: 推荐扩展
---

## 获取

### 操作类

- 免鼠标、全键盘操作

  <ExtStoreLink name='Vimium C'
  chrome='https://chrome.google.com/webstore/detail/vimium-c-all-by-keyboard/hfjbmagddngcpeloejdejnfgbamkjaeg'
  edge='https://microsoftedge.microsoft.com/addons/detail/vimium-c-all-by-keyboar/aibcglbfblnogfjhbcmmpobjhnomhcdo'
  firefox='https://addons.mozilla.org/zh-CN/firefox/addon/vimium-c/'
  />

- 鼠标手势

  <ExtStoreLink name='Gesturefy'
  firefox='https://addons.mozilla.org/zh-CN/firefox/addon/gesturefy/' />
  &nbsp;
  <ExtStoreLink name='smartUp'
  chrome='https://chrome.google.com/webstore/detail/smartup-gestures/bgjfekefhjemchdeigphccilhncnjldn?hl=zh'
  edge='https://microsoftedge.microsoft.com/addons/detail/smartup%E6%89%8B%E5%8A%BF/elponhbfjjjihgeijofonnflefhcbckp'
  />

- 框选多开

  <ExtStoreLink name='Snap Links Plus'
  firefox='https://addons.mozilla.org/zh-CN/firefox/addon/snaplinksplus/' />
  &nbsp;
  <ExtStoreLink name='Linkclump'
  chrome='https://chrome.google.com/webstore/detail/linkclump/lfpjkncokllnfokkgpkobnkbkmelfefj' />

### 体验类

- 本地优化 CDN

  <ExtStoreLink name='Decentraleyes'
  firefox='https://addons.mozilla.org/zh-CN/firefox/addon/decentraleyes/'
  chrome='https://chrome.google.com/webstore/detail/decentraleyes/ldpochfccmkkmhdbclfhpagapcfdljkj'
  edge='https://microsoftedge.microsoft.com/addons/detail/lmijmgnfconjockjeepmlmkkibfgjmla'
  />

- 对条款自动处理 Cookies

  <ExtStoreLink name="I don't care about cookies"
  firefox='https://addons.mozilla.org/addon/i-dont-care-about-cookies/'
  chrome='https://chrome.google.com/webstore/detail/i-dont-care-about-cookies/fihnjjcciajhdojfnbdddfaoknhalnja'
  edge='https://microsoftedge.microsoft.com/addons/detail/oholpbloipjbbhlhohaebmieiiieioal'
  />

- 按规则自动清理 Cookies ( 推荐搭配[火狐身份容器](https://addons.mozilla.org/zh-CN/firefox/addon/multi-account-containers/)使用 )

  <ExtStoreLink name="Cookie AutoDelete"
  firefox='https://addons.mozilla.org/en-US/firefox/addon/cookie-autodelete/'
  chrome='https://chrome.google.com/webstore/detail/cookie-autodelete/fhcgjolkccmbidfldomjliifgaodjagh'
  edge='https://microsoftedge.microsoft.com/addons/detail/djkjpnciiommncecmdefpdllknjdmmmo'
  />

- 跟踪器智能拦截

  <ExtStoreLink name='Privacy Badger'
  firefox='https://addons.mozilla.org/firefox/downloads/latest/privacy-badger17/'
  chrome='https://chrome.google.com/webstore/detail/privacy-badger/pkehgijcmpdhfbdbbnkijodmdjhbjlgp'
  edge='https://microsoftedge.microsoft.com/addons/detail/mkejgcgkdlddbggjhhflekkondicpnop'
  />

- 广告规则拦截

  <ExtStoreLink name='uBlock Origin'
  firefox='https://addons.mozilla.org/zh-CN/firefox/addon/ublock-origin/'
  chrome='https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm'
  edge='https://microsoftedge.microsoft.com/addons/detail/ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak'
  />

### 显示类

- 护眼模式

  <ExtStoreLink name='Dark Reader'
  chrome='https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh'
  edge='https://microsoftedge.microsoft.com/addons/detail/dark-reader/ifoakfbpdcdoeenechcleahebpibofpc'
  firefox='https://addons.mozilla.org/zh-CN/firefox/addon/darkreader/'
  />

### 专用类

- GitHub 文件树视图

  <ExtStoreLink name='Gitako'
  chrome='https://chrome.google.com/webstore/detail/gitako-github-file-tree/giljefjcheohhamkjphiebfjnlphnokk'
  edge='https://microsoftedge.microsoft.com/addons/detail/gitako-github-file-tree/alpoloddcggjhakjemghahlkofjekbca'
  firefox='https://addons.mozilla.org/zh-CN/firefox/addon/gitako-github-file-tree/'
  />

- Chromium 插件管理助手

  <ExtStoreLink name='Extension Manager'
  chrome='https://chrome.google.com/webstore/detail/extension-manager/gjldcdngmdknpinoemndlidpcabkggco'
  edge='https://microsoftedge.microsoft.com/addons/detail/bhahgfgngfghgjhnpplmemebhenieijb'
  />

- URL 自定重定向

  <ExtStoreLink name='Gooreplacer'
  chrome='https://chrome.google.com/webstore/detail/gooreplacer/jnlkjeecojckkigmchmfoigphmgkgbip'
  edge='https://microsoftedge.microsoft.com/addons/detail/gooreplacer/cidbonnpjopamnhfjdgfcmjmlmehjnej'
  firefox='https://addons.mozilla.org/firefox/addon/gooreplacer/'
  />

---

附：[自编译打包扩展](https://gitee.com/littleboyharry-crx/ohmycrx/blob/master/README.md)，可省去下文手动配置的部分过程

## 配置文件

import { ScriptIcon } from '@theme/fai';

可导入：
<FileItem button name="vimium_c.json" path="/config/vimium_c.json" icon={<ScriptIcon />}/>

## 适用范围

打开扩展设置：

<div className="no-table-header no-table-border">

|               |                              |
| ------------- | ---------------------------- |
| Dark Reader   | 所有站点：无痕模式、本地文件 |
| uBlock Origin | 所有站点：无痕模式、本地文件 |
| Vimium C      | 所有站点：无痕模式、本地文件 |

</div>

<div className="autoselect-item-of-list">

Gitako:

- github.com

Linkclump:

- www.baidu.com
- www.google.com
- www.google.com.hk

</div>

## 绑定快捷键

 <div className="left-float-scope">
<div>

Dark Reader:

`Alt + Shift + A` 激活扩展

`Alt + Shift + D` 切换当前网站

</div>

<div>
Vimium C:

`Alt + V` 激活扩展

uBlock Origin:

`Alt + Delete` 进入临时移除元素模式

</div>
</div>

## 其它配置

### uBlock Origin

<iframe src="https://ghbtns.com/github-btn.html?user=littleboyharry&repo=oh-my-blockrules&type=star&count=true&size=large" frameborder="0" scrolling="0" width="180" height="32" title="GitHub" style={{float:'right'}}></iframe>

我的过滤规则集：[oh-my-blockrules](https://github.com/LittleboyHarry/oh-my-blockrules)

### Linkclump

- 默认 z 键激活
- 推荐勾选 `open tabs at the end`

import FileItem from '@theme/FileItem'
import ExtStoreLink from './ExtStoreLink'
