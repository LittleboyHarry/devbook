---
title: 搜索引擎推荐
sidebar_position: 70
---

绝大部分网站都会自动添加搜索引擎，访问网站后输入网址 + `Tab` or `Space` 即可搜索。

这里收录一些需要手动收录的搜索引擎。此外，可参考前文 Vimium-C 扩展添加其它搜索引擎

<!--
自带搜索引擎，关键字修改推荐：

<ul className="pills pills--block">
  <li className="pills__item">必应 .bi</li>
  <li className="pills__item">百度 .b</li>
  <li className="pills__item">搜狗 .s</li>
</ul>
-->

:::note

- Firefox 会把符合条件的书签视作地址栏可用的搜索引擎
- Chromium 搜索配置页

      about:settings/searchEngines

:::

## 推荐手动添加

<div className="autoselect-cell-of-table">

对于 Firefox 请在关键字末尾补 `/`，输入时按右方向键补全域名、按空格后填入搜索词

| 搜索引擎 | 关键字       | 查询网址                                            |
| -------- | ------------ | --------------------------------------------------- |
| BiliBili | bilibili.com | `https://search.bilibili.com/all?keyword=%s`        |
| 京东     | jd.com       | `https://search.jd.com/Search?enc=utf-8&keyword=%s` |

对于 Chromium 类，还有：

| 搜索引擎 | 关键字    | 查询网址                                         |
| -------- | --------- | ------------------------------------------------ |
| 必应     | bing.com  | `https://www.bing.com/search?q=%s`               |
| 知乎     | zhihu.com | `https://www.zhihu.com/search?type=content&q=%s` |

</div>
