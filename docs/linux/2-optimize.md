---
title: 调优
---

## 使用 zsh

## 文本大小

为高分辨率屏调整

 <details>
  <summary>GNOME</summary>

我的 14 寸电脑缩放后所用的配置：大号缩放、字体字号、光标等属性

```shell
cat << END | dconf load /org/gnome/desktop/interface/
[/]
text-scaling-factor=1.33
document-font-name='Cantarell 13'
font-name='Cantarell 13'
monospace-font-name='DejaVu Sans Mono 12'
cursor-size=48
END
```

</details>

KDE 设置面板可统一调整字体，14寸屏推荐 15~18 之间

## Grub 菜单

降低 Grub 界面等待时间为 1 秒

    sudo sed -i "/GRUB_TIMEOUT/ s/=.*/=1/" /etc/default/grub

<details>
    <summary>选调：隐藏 Grub 菜单内的 Windows 等其他系统</summary>

    echo GRUB_DISABLE_OS_PROBER=true | sudo tee -a /etc/default/grub > /dev/null

</details>

更新 Grub 系统

    sudo grub2-mkconfig -o /etc/grub2-efi.cfg

## Debian

## Fedora

### 软件仓补充

添加非自由软件仓

```shell
sudo dnf in -y \
  https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm
sudo dnf in -y \
  https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

<!--
## 中文支持

包括：

- LibreOffice
- man 手册 ( `LANG=C man` 看回原版 )

```shell
sudo dnf in -y libreoffice-langpack-zh-Hans
```
-->

### DNF 调优

像 apt 那样回车确认安装（系统默认会取消行为

    echo "defaultyes=1" | sudo tee -a /etc/dnf/dnf.conf > /dev/null

:::caution bug

因 PackageKit 不完美支持 DNF 的问题。 相关讨论：https://github.com/PackageKit/PackageKit/issues/201

临时解决方法，执行：

    sudo sed -i '/^SingleInstall/ s/=ask/=warn/' /etc/PackageKit/CommandNotFound.conf

如果你对磁盘空间紧张且频繁安装卸载大型软件，不要使用基于 PackageKit 的 Discover 和 GNOME 商店安装软件

<details>
  <summary>内部技术解释</summary>
  在 Fedora 中、CommandNotFound 模块使用 PackageKit 自动安装时，不会恰当处理 DNF 依赖关系，导致包移除时无法处理依赖而有效释放磁盘空间，推荐 dnf 命令行手动安装。
</details>

:::
