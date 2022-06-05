---
title: 配置 Arch
sidebar_position: 3
---

重新启动机器，进入 Arch 系统

<PreferXde gnome kde><ForKde>

:::note 搜索方法

`Alt + Space` 启动 KRunner 以搜索

:::

</ForKde></PreferXde>

## 重要配置

### 启用防火墙

搜索 `gufw` 打开防火墙：除非在虚拟机内，建议家宿主用设备均激活防火墙。添加常见白名单条目，如：KDE Connect

### 中文支持

<p><PreferXde gnome kde noSelector>
<ForGnome>随后打开“语言与区域”设置，改为中文。注销生效</ForGnome>
<ForKde>搜索 "lang", 点击右下角按钮添加列表底部的“简体中文”并置顶</ForKde>
</PreferXde></p>

<br/>

import OpenTerminal from '../\_common/openterminal.md'

<OpenTerminal />

<PreferXde gnome kde noSelector>
<ForGnome>

:::note 使用暗色终端主题

    dconf write /org/gnome/terminal/legacy/theme-variant "'dark'"

:::

</ForGnome>
<ForKde>

:::info 喜欢下拉式终端吗？

搜索 `autostart` 设置自动启动 ( 添加 | 添加应用程序 )。
随后搜索 `yakuake` 打开程序设置全局快捷键可用

:::

</ForKde>
</PreferXde>

### 作者推荐工具

import Require from '/docs/\_common/deployworkenv.md'

<Require />

### 配置桌面环境

import PrepareDe from '../\_common/preparede.md';

<PrepareDe />

import GnomeMustDo from '../\_common/gnome-mustdo.md';
import KdeMustDo from '../\_common/kde-mustdo.md';

<PreferXde gnome kde noSelector>
    <ForGnome><GnomeMustDo /></ForGnome>
    <ForKde><KdeMustDo /></ForKde>
</PreferXde>

:::caution 注销并重新登录以生效
:::

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

### Firefox 浏览器

import { LinkButton } from '@theme/links';

<p><LinkButton outline name="推荐的配置" href="/docs/goodsoft/browser/firefox" newTab /></p>

打开设置，找到语言，选择“简体中文”

### VLC 播放器

<GetPkg name='vlc' pacman />

### 开发环境

安装 ohmyzsh:

    cn/setup-zsh

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

打开设置，激活自动登录

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

- VSCode 微软版

      yay visual-studio-code-bin

### 网络问题

```shell
yes | sudo pacman -S v2ray v2ray-domain-list-community v2ray-geoip

yay v2raya-bin
sudo systemctl enable v2raya --now
```

## 结束配置

推荐安装并使用 timeshift: ( 依赖[#安装开发工具] )

    arch/aur-timeshift

:::caution 重启计算机后完成更改
:::

import {BasicCatalog,DevEnvCatalog} from '/docs/devenv/Catalog'
import {
PreferXde,
ForGnome,
ForKde
} from '@theme/PreferXde';
import GetPkg from '@theme/GetPkg';
