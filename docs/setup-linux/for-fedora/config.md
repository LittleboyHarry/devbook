---
title: 配置 Fedora
sidebar_position: 2
---

import {
PreferXde,
ForGnome,
ForKde
} from '@theme/PreferXde';

 <PreferXde gnome kde>
<ForGnome>
<details className="let-details-to-gray" role="alert">
<summary>欢迎向导中的 “第三方软件源” 是什么？</summary>

包括：

- N 卡闭源驱动
- Chrome 浏览器
- PyCharm
- Steam

不建议开启，因为上游源 copr 下载速度很慢。可以在 GNOME 商店中关闭

</details>
</ForGnome>
</PreferXde>

## 基础配置

<!--
方法二：使用“GNOME 软件”更新

[^2]: 若经常发生 Linux 内核故障，请看[内核问题](/docs/setup-linux/kernel#fedora)文档
-->

import SearchMethod from '/docs/setup-linux/\_common/de/search.md'

<SearchMethod />

### 调优

<!--
:::info 更换安全组件

Fedora 内置了 RHEL 采用的 SELinux 和 firewalld 技术，
这两项安全技术复杂繁琐。对于个人电脑，作者推荐关闭并换用 ufw

```shell
sudo sed -i "/SELINUX/ s/=enforcing/=disabled/" /etc/sysconfig/selinux
sudo dnf install -y ufw
sudo ufw enable
sudo systemctl disable --now firewalld
# 完成后记得重启
```

:::
-->

### 更新系统

```shell
sudo dnf upgrade -y # 更新系统
```

:::caution

- 安装过程中应避免其他操作、安装后尽快重启
- 若镜像站发生故障，导致下载中断。
  可修改 `/etc/hosts` 将相关域名映射为 `127.0.0.1` 以屏蔽

:::

<details className="alert--warning">
  <summary>若 Fedora &lt;= 35 且磁盘空间紧张且频繁卸载大型软件</summary>

不要使用 PackageKit， 不要使用 Discover 和 GNOME 商店安装软件

<details className="alert--warning">
  <summary>内部技术解释</summary>

在 Fedora 中、CommandNotFound 模块使用 PackageKit 自动安装时，不会恰当处理 DNF 依赖关系，导致包移除时无法处理依赖而有效释放磁盘空间，推荐 dnf 命令行手动安装。
[bug](https://github.com/PackageKit/PackageKit/issues/201)

</details>

</details>

### 自动优化

    fedora/optimze

1. 锁定内核版本？

   使用一段时间的 Fedora 后，如果显示、声音、键鼠、待机等硬件不出问题，
   可以锁定 Linux 内核版本，避免不必要的升级。

2. Grub 调整：记住上次选择的启动项、降低等待时间
3. 让系统寻找访问速度最快的镜像源

### 调整桌面环境

import BaseDeCfg from '/docs/setup-linux/\_common/de/base.md';

<BaseDeCfg />

import GnomeCfg from '/docs/setup-linux/\_common/de/gnome.md';
import KdeCfg from '/docs/setup-linux/\_common/de/kde.md';

<PreferXde gnome kde noSelector>
    <ForGnome><GnomeCfg /></ForGnome>
    <ForKde><KdeCfg /></ForKde>
</PreferXde>

<!--
<details className="let-details-to-gray">
  <summary>
如果不需要内置的大体积应用，更新过程会更快：
</summary>

删除开源版 Office:

    sudo dnf remove libreoffice*

计划使用 <a href="/docs/goodsoft/browser/edge-for-linux" target="_blank" >Edge</a> 来代替 Firefox

    sudo dnf remove firefox

</details>
-->

<!-- todo:? send notify after update -->

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

### 软件仓补充

添加非自由软件仓：不同于第三方软件源，前者指如 ffmpeg 等具有版权争议软件仓

```shell
sudo dnf in -y \
  https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm
sudo dnf in -y \
  https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
sudo dnf check-update
```

### Firefox 浏览器

import { LinkButton } from '@theme/links';

<p><LinkButton outline name="推荐的配置" href="/docs/goodsoft/browser/firefox" newTab /></p>

打开设置，找到语言，选择“简体中文”

### VLC 播放器

 <PreferAppstream appstream pkgmgr noSelector>
<WithAppstream>
  <StoreButton to='appstream://org.videolan.vlc' text='一键安装' />
</WithAppstream>
<WithoutAppstream>

    sudo dnf install -y vlc

</WithoutAppstream>
</PreferAppstream>

### 开发环境

安装 ohmyzsh:

    cn/setup-zsh

import {BasicCatalog,DevEnvCatalog} from '/docs/devenv/Catalog'

<BasicCatalog />
<DevEnvCatalog hidePl />

<!--
### 使用 KDE

对于 Fedora Workspace 版，安装 KDE 的命令：

    sudo dnf in -y @kde-desktop-environment

或者推荐改用 [Fedora Spins - KDE Plasma 桌面环境版](https://spins.fedoraproject.org/zh_Hans_CN/kde/) 系统
 -->

## 结束配置

系统备份工具：

    sudo dnf install -y timeshift

:::caution 可能需要重启以完成更改
:::
