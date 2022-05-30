---
title: 配置 Fedora
sidebar_position: 2
---

 <details className="let-details-to-gray" role="alert">
<summary>欢迎向导中的 “第三方软件源” 是什么？</summary>

包括：

- N 卡闭源驱动
- Chrome 浏览器
- PyCharm
- Steam

不建议开启，因为上游源 copr 下载速度很慢。可以在 GNOME 商店中关闭

</details>

<!--
方法二：使用“GNOME 软件”更新

[^2]: 若经常发生 Linux 内核故障，请看[内核问题](/docs/setup-linux/kernel#fedora)文档
-->

:::info 打开终端

光标置于左上角，激活活动概览后，搜索 `terminal` 打开

:::

## 调优

```shell
# 让 dnf 回车确认安装
echo "defaultyes=1" | sudo tee -a /etc/dnf/dnf.conf > /dev/null
```

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

## Grub

import ContentGrub from '../\_common/grub.md';

<ContentGrub />

更新 Grub：

    sudo update-grub

## 自动镜像源

让系统寻找访问速度最快的镜像源

```shell
sudo dnf config-manager --save --setopt=fastestmirror=True
sudo dnf makecache
```

## 调整桌面环境

import ContentDe from '../\_common/startde.md';

<ContentDe />

## 锁定内核版本

使用一段时间的 Fedora 后，如果显示、声音、键鼠、待机等硬件不出问题，
可以锁定 Linux 内核版本，避免不必要的升级。

```shell
sudo dnf in -y 'dnf-command(versionlock)'
sudo dnf versionlock add kernel{,-core,-headers} linux-firmware
```

## 更新系统

```shell
sudo dnf upgrade -y # 更新系统
```

:::caution

- 安装过程中应避免其他操作、安装后尽快重启
- 若镜像站发生故障，导致下载中断。
  可修改 `/etc/hosts` 将相关域名映射为 `127.0.0.1` 以屏蔽

:::

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

:::caution 留意 [bug](https://github.com/PackageKit/PackageKit/issues/201)

若 Fedora <= 35 且磁盘空间紧张且频繁卸载大型软件，

请不要使用 PackageKit， 不要使用 Discover 和 GNOME 商店安装软件

    sudo sed -i '/^SingleInstall/ s/=ask/=warn/' /etc/PackageKit/CommandNotFound.conf

<details className="alert--warning">
  <summary>内部技术解释</summary>
  在 Fedora 中、CommandNotFound 模块使用 PackageKit 自动安装时，不会恰当处理 DNF 依赖关系，导致包移除时无法处理依赖而有效释放磁盘空间，推荐 dnf 命令行手动安装。
</details>

:::

## 使用 Zsh

import { LinkButton } from '@theme/links';

<LinkButton outline name="见文档" href="/docs/devenv/zsh" newTab />

<!--
### 使用 KDE

对于 Fedora Workspace 版，安装 KDE 的命令：

    sudo dnf in -y @kde-desktop-environment

或者推荐改用 [Fedora Spins - KDE Plasma 桌面环境版](https://spins.fedoraproject.org/zh_Hans_CN/kde/) 系统
 -->

## 软件仓补充

添加非自由软件仓：不同于第三方软件源，前者指如 ffmpeg 等具有版权争议软件仓

```shell
sudo dnf in -y \
  https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm
sudo dnf in -y \
  https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
sudo dnf check-update
```
