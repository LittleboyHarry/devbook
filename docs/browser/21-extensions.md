---
title: 扩展
---

### 护眼模式

Dark Reader:

- [Chrome 商店](https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh)
- [Edge 商店](https://microsoftedge.microsoft.com/addons/detail/dark-reader/ifoakfbpdcdoeenechcleahebpibofpc)

适用范围：所有站点、无痕模式、本地文件

### 去广告

uBlock Origin：

- [Chrome 商店](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm)
- [Edge 商店](https://microsoftedge.microsoft.com/addons/detail/ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak)

<iframe src="https://ghbtns.com/github-btn.html?user=littleboyharry&repo=create-my-dotfiles&type=star&count=true&size=large" frameborder="0" scrolling="0" width="180" height="32" title="GitHub" style={{float:'right'}}></iframe>

我的过滤规则集：[oh-my-blockrules](https://github.com/LittleboyHarry/oh-my-blockrules)

适用范围：所有站点、无痕模式

### GitHub 导航栏

Gitako：

- [Chrome 商店](https://chrome.google.com/webstore/detail/gitako-github-file-tree/giljefjcheohhamkjphiebfjnlphnokk)
- [Edge 商店](https://microsoftedge.microsoft.com/addons/detail/gitako-github-file-tree/alpoloddcggjhakjemghahlkofjekbca)

适用范围：

- https://github.com

### 框选多开

Linkclump: [Chrome 商店](https://chrome.google.com/webstore/detail/linkclump/lfpjkncokllnfokkgpkobnkbkmelfefj)

配置：

- 默认 z 键激活
- 推荐勾选 `block repeat links in selection`
- 推荐勾选 `open tabs at the end`

适用范围：

- https://www.baidu.com
- 其他搜索引擎

### 免鼠标、键盘侠专用

Vimium C:

- [Chrome 商店](https://chrome.google.com/webstore/detail/vimium-c-all-by-keyboard/hfjbmagddngcpeloejdejnfgbamkjaeg)
- [Edge 商店](https://microsoftedge.microsoft.com/addons/detail/vimium-c-all-by-keyboar/aibcglbfblnogfjhbcmmpobjhnomhcdo)

适用范围：所有站点、无痕模式、本地文件

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

## 推荐配置的快捷键

    about:extensions/shortcuts

Dark Reader:

`Alt + Shift + A` 激活扩展

`Alt + Shift + D` 切换当前网站

Vimium C:

`Alt + V` 激活扩展

uBlock Origin:

`Alt + Delete` 进入临时移除元素模式
