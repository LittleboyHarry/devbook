---
title: 扩展推荐
---

## 获取

| 扩展名        | 作用               | Chrome 商店 | Edge 外接程序 |
| ------------- | ------------------ | :---------: | :-----------: |
| Dark Reader   | 护眼模式           | [Get][dd1]  |  [Get][dd2]   |
| uBlock Origin | 去广告             | [Get][uo1]  |  [Get][uo2]   |
| Linkclump     | 框选多开           |  [Get][lc]  |
| Vimium C      | 免鼠标、键盘侠专用 | [Get][vc1]  |  [Get][vc2]   |

[dd1]: https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh
[dd2]: https://microsoftedge.microsoft.com/addons/detail/dark-reader/ifoakfbpdcdoeenechcleahebpibofpc
[uo1]: https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm
[uo2]: https://microsoftedge.microsoft.com/addons/detail/ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak
[lc]: https://chrome.google.com/webstore/detail/linkclump/lfpjkncokllnfokkgpkobnkbkmelfefj
[vc1]: https://chrome.google.com/webstore/detail/vimium-c-all-by-keyboard/hfjbmagddngcpeloejdejnfgbamkjaeg
[vc2]: https://microsoftedge.microsoft.com/addons/detail/vimium-c-all-by-keyboar/aibcglbfblnogfjhbcmmpobjhnomhcdo

专用插件：

- Gitako: GitHub 导航栏 ( [Chrome 商店][g1] | [Edge 外接程序][g2] )

[g1]: https://chrome.google.com/webstore/detail/gitako-github-file-tree/giljefjcheohhamkjphiebfjnlphnokk
[g2]: https://microsoftedge.microsoft.com/addons/detail/gitako-github-file-tree/alpoloddcggjhakjemghahlkofjekbca

## 绑定快捷键

设置地址

    about:extensions/shortcuts

Dark Reader:

`Alt + Shift + A` 激活扩展

`Alt + Shift + D` 切换当前网站

Vimium C:

`Alt + V` 激活扩展

uBlock Origin:

`Alt + Delete` 进入临时移除元素模式

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

## 配置

### uBlock Origin

<iframe src="https://ghbtns.com/github-btn.html?user=littleboyharry&repo=oh-my-blockrules&type=star&count=true&size=large" frameborder="0" scrolling="0" width="180" height="32" title="GitHub" style={{float:'right'}}></iframe>

我的过滤规则集：[oh-my-blockrules](https://github.com/LittleboyHarry/oh-my-blockrules)

### Vimium C

推荐映射：

```vim
" 复制当前标签页
map yt duplicateTab active=false

" 键盘打开多条链接
map f LinkHints.activateWithQueue
" 单次点击模拟
map F LinkHints.activate
" 在新标签页打开
map <a-f> LinkHints.activateOpenInNewForegroundTab

" 分离当前标签页到新窗口
map w moveTabToNewWindow

" 复制链接标题文本
map <a-c> LinkHints.activateCopyLinkText
```

### Linkclump

配置：

- 默认 z 键激活
- 推荐勾选 `open tabs at the end`