---
sidebar_position: 8
---

# for Ubuntu

## 国内镜像软件仓

 <details>
<summary>方法一：图形界面的更新器</summary>

1. 搜索关键词 `sof`，选择 “软件和更新”，更改合适的“下载自”来源

<!-- ( 默认“中国的服务器”指的是 cn.archive.ubuntu.com ) -->

2. 搜索关键词 `upd`，打开 “软件更新器”，更新系统

</details>

方法二：命令行

import SetMirror from '/docs/\_cmirror/ubuntu.md'

<SetMirror />

## 防火墙

对个人或家用设备，强烈建议配置开启。
使用可视化配置器：

    sudo apt install -y gufw

打开 gufw 激活防火墙，随后添加条目，常用的如：KDE Connect

## 喜欢 Snap 吗？

- [一篇关于 Snap 的点评](https://www.toutiao.com/article/6331388216112972033/)
- [知乎社区对 Snap 的讨论](https://www.zhihu.com/question/47514122)

作者比较喜欢的几个 snap 独占应用：

- `multipass` Ubuntu 虚拟机自动管理平台
- `anbox` Android 模拟器

:::note 完全卸载 Snap 的方法

对于 Snap 版 Firefox，请<a target="_blank" href="/docs/goodsoft/chromium/linux">先安装 Edge</a> 或选择其他浏览器代替

```shell
sudo apt autoremove --purge snapd
rm -rf ~/snap/
```

:::
