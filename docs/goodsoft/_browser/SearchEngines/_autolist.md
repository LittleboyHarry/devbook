中文服务：

- [百度](https://baidu.com/)
- [Google 翻译](https://translate.google.cn/)

<!-- https://weixin.sogou.com/ -->
<!-- - [必应中国版](https://cn.bing.com/) -->

<details>
<summary>程序员常用：</summary>

- [GitHub](https://github.com/)
- [Google 翻译 (国际版)](https://translate.google.com/)

包搜索：

- [Arch Packages](https://archlinux.org)
- [Chocolatey](https://community.chocolatey.org/): Windows 社区包管理器
- [npm](https://www.npmjs.com/)
- [Repology](https://repology.org)

文档：
- [ArchWiki (en)](https://wiki.archlinux.org/)

源码：
- [Sourcegraph](https://sourcegraph.com/search): 代码搜索引擎

<!--
<ChromiumOnly when={props.chromium}>

</ChromiumOnly>
-->

</details>

export const ChromiumOnly = ({children,when})=>when?children:null;
