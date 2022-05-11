---
title: GNOME of Ubuntu
---

## 隐藏未挂载的设备

    dconf write /org/gnome/shell/extensions/dash-to-dock/show-mounts-only-mounted true

## 扩展推荐

- 自定义主题 [User Themes](https://extensions.gnome.org/extension/19/user-themes/)

## 作者的桌面图标风格

```shell
cat << END | dconf load /org/gnome/shell/extensions/ding/
[/]
icon-size='large'
start-corner='top-right'
sort-special-folders=true
keep-arranged=true
END
```

<details className="let-details-to-yellow">
  <summary>希望 Ubuntu 隐藏壁纸外的桌面图标吗？</summary>

    gnome-extensions disable ding@rastersoft.com

</details>

<!--
## 喜欢紫色背景的登录界面吗？

作者不喜欢，作者更喜欢 GNOME 原生的灰色背景：

```shell
wget https://cdn.jsdelivr.net/gh/littleboyharry-misc/better-ubuntu-gdm@master/change-gdm-background
chmod +x change-gdm-background
sudo ./change-gdm-background
```

恢复

    sudo ./change-gdm-background restore

项目灵感来源：https://github.com/mendhak/change-gdm-background
-->
