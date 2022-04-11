---
title: Ubuntu
---

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

例如使用连接显示器、关机时可能会触发 bug

:::

```shell
sudo apt install -y plasma-workspace-wayland

# 相关推荐：
sudo apt install -y wl-clipboard
```

设置为自动登陆：搜索 `sddm` 打开“登陆画面”的 `行为设置`，更改 `使用会话`

然后注销会话，左下角选择 wayland 登陆以生效。
