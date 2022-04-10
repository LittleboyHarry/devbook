---
title: Debian or Ubuntu
---

## 更改软件源

使用 HTTPS 可以避免流量劫持、优化体验（ Debian 10 及以上版本内置的 `apt-transport-https` 模块支持 ）

```shell
sudo cp /etc/apt/sources.list /etc/apt/sources.list.old

# Debian 使用腾讯云镜像站:
sudo sed -i "s#http://\(deb\|security\)\.debian\.org#https://mirrors.cloud.tencent.com#g" /etc/apt/sources.list
# Ubuntu 使用腾讯云镜像站:
sudo sed -i "s#http://\(cn\.archive\|security\)\.ubuntu\.com#https://mirrors.cloud.tencent.com#g" /etc/apt/sources.list
# 不检索源码包：
sudo sed -i "/deb-src/ s/^/#/" /etc/apt/sources.list

sudo apt update
```

<details className="let-details-to-yellow">
<summary>或用 Ubuntu 图形化界面快速完成上述操作：</summary>

1. 打开 “软件和更新” ( 搜索关键词 `sof` )，选择合适的下载源

   Ubuntu 下载 -> 下载自 ( 默认“中国的服务器”指的是 cn.archive.ubuntu.com )

2. 打开 “软件更新器” ( 搜索关键词 `upd` ) 更新系统

</details>

## Ubuntu

### 防火墙

对个人或家用设备，强烈建议开启

    sudo ufw enable

可视化配置器：gufw

    sudo apt install -y gufw

我们打开 gufw 进行添加，搜索一些常用的如：KDE Connect

### 喜欢 Snap 吗？

- [一篇关于 Snap 的点评](https://www.toutiao.com/article/6331388216112972033/)
- [知乎社区对 Snap 的讨论](https://www.zhihu.com/question/47514122)

:::note 不使用并完全卸载 Snap 的方法

对于 Snap 版 Firefox，请<a target="_blank" href="/docs/browser/edge-for-linux">先安装 Edge</a> 或选择其他浏览器代替

```shell
sudo apt autoremove --purge snapd
rm -rf ~/snap/
```

:::


### Kubuntu Wayland

:::caution 这是 KDE 实验性技术，仍在开发完善中

:::

```shell
sudo apt install -y plasma-workspace-wayland

# 相关推荐：
sudo apt install -y wl-clipboard
```

设置为自动登陆：搜索 `sddm` 打开“登陆画面”的 `行为设置`，更改 `使用会话`

然后注销会话，左下角选择 wayland 登陆以生效。
