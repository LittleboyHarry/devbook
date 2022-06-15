---
title: 配置 Arch
sidebar_position: 3
---

import {
PreferXde,
ForGnome,
ForKde
} from '@theme/PreferXde';

<PreferXde gnome kde />

import SearchMethod from '/docs/setup-linux/\_common/de/search.md'

<SearchMethod />

## 基础配置

### 启用防火墙

:::caution 除非在虚拟机内，建议家宿主用设备均激活防火墙

搜索 "gufw" 打开防火墙：添加常见白名单条目，如：KDE Connect

:::

### 中文支持

<p><PreferXde gnome kde noSelector>
<ForGnome>随后打开“语言与区域”设置，改为中文。注销生效</ForGnome>
<ForKde>

1. 搜索 "lang", 进入语言设置
2. 点击右下角按钮添加列表底部的“简体中文”并置顶
3. 选择 "format" 修改区域格式，搜索 "cn" 设置简中
4. 注销生效

</ForKde>
</PreferXde></p>

<br/>

<PreferXde gnome kde noSelector>
<ForGnome>

:::note 使用暗色终端主题

    dconf write /org/gnome/terminal/legacy/theme-variant "'dark'"

:::

</ForGnome>
</PreferXde>

### 配置桌面环境

import BaseDeCfg from '/docs/setup-linux/\_common/de/base.md';

<BaseDeCfg />

import GnomeCfg from '/docs/setup-linux/\_common/de/gnome.md';
import KdeCfg from '/docs/setup-linux/\_common/de/kde.md';

<PreferXde gnome kde noSelector>
    <ForGnome><GnomeCfg /></ForGnome>
    <ForKde><KdeCfg /></ForKde>
</PreferXde>

<br/>

### 引用内容

1. <a target="_blank" href="../mustdo/dual-os">双系统</a>
2. <a target="_blank" href="../mustdo/device">设备问题</a>
3. <a target="_blank" href="../mustdo/kernel">内核问题</a>
4. <OptimizeDe />
5. <a target="_blank" href="../mustdo/chinese">中文输入法</a>

export function OptimizeDe(){
return <PreferXde gnome kde noSelector>
<ForGnome><a href='../mustdo/gnome' target='_blank'>GNOME 配置</a></ForGnome>
<ForKde><a href='../mustdo/kde' target='_blank'>KDE 配置</a></ForKde>
</PreferXde>
}

## 推荐配置

import {
PreferAppstream,
WithAppstream,
WithoutAppstream
} from '@theme/PreferAppstream';
import { StoreButton, mslink } from '@theme/links';

<PreferAppstream appstream pkgmgr />

### Firefox 浏览器

import { LinkButton } from '@theme/links';

<p><LinkButton outline name="推荐的配置" href="/docs/goodsoft/browser/firefox" newTab /></p>

打开设置，找到语言，选择“简体中文”

### VLC 播放器

 <PreferAppstream appstream pkgmgr noSelector>
<WithAppstream>
<StoreButton to='appstream://org.videolan.vlc' text='一键安装' /> </WithAppstream>
<WithoutAppstream>

    sudo pacman -S --noconfirm vlc

</WithoutAppstream>
</PreferAppstream>

### 开发环境

安装 ohmyzsh:

    cn/setup-zsh

import {BasicCatalog,DevEnvCatalog} from '/docs/devenv/Catalog'

<BasicCatalog />
<DevEnvCatalog hidePl />

### AUR 助手 yay

原版：

    arch/getyay

:::note 国服加速安装：

由 https://goproxy.cn 提供代理

    cn/arch-yay

为下载构建源码，[fastgit](https://doc.fastgit.org/zh-cn/guide.html) 提供 GitHub 镜像服务

:::

 <PreferXde gnome kde noSelector>
<ForGnome>

:::note GNOME 优化

启用扩展支持：

    arch/aur-gnome-webext

推荐扩展：

    sudo pacman -S gnome-shell-extension-appindicator

Qt 主题修改器：

    arch/qtingnome

:::

</ForGnome>
</PreferXde>

### AUR 软件

:::note 离线安装

在网络通常的 VPS 内构建，其产物安装包是可迁移的

:::

#### VSCode 微软版

    yay visual-studio-code-bin

 <details className='let-details-to-gray'>
<summary>网络问题</summary>

```shell
yes | sudo pacman -S v2ray v2ray-domain-list-community v2ray-geoip

yay v2raya-bin
sudo systemctl enable v2raya --now
```

</details>

## 结束配置

推荐安装并使用 timeshift 备份系统：（ [依赖](#开发环境) ）

    arch/aur-timeshift

:::caution 可能需要重启以完成更改
:::
