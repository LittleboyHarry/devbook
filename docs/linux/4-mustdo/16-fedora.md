---
title: Fedora
---

初始向导中“第三方软件源”包括：N卡闭源驱动、Chrome 浏览器、PyCharm、Steam

我们也可以在 `gnome-software` 中启动或关闭，以免更新时访问 copr 拖慢速度

<details className="let-details-to-gray">
  <summary>
可以删除的捆绑应用
</summary>

开源版 Office:

    sudo dnf remove libreoffice*

已经 <a href="/docs/browser/edge-for-linux" target="_blank" >安装 Edge</a> 来代替 Firefox

    sudo dnf remove firefox

删除之上述大型应用后，系统更新将更快完成！

</details>

## 更新系统

激活功能：自动选择加速镜像源的

    sudo dnf config-manager --save --setopt=fastestmirror=True

**保持网络畅通，安装更新过程中尽量避免其它操作、待其完成后重启[^2]**

方法一：执行命令

    sudo dnf upgrade -y

<!-- todo:? send notify after update -->

方法二：使用“GNOME 软件”更新

[^1]: 若镜像站发生故障，导致下载中断，可修改 `/etc/hosts` 将其域名屏蔽 `127.0.0.1`
[^2]: 若经常发生 Linux 内核故障，请看[内核问题](/docs/linux/kernel#fedora)文档


### 软件仓补充

<details>
  <summary>添加非自由软件仓</summary>

非自由软件仓 != 第三方软件源。前者是指如 ffmpeg 等可能具有版权争议程序的包仓库

```shell
sudo dnf in -y \
  https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm
sudo dnf in -y \
  https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

</details>

### DNF 调优

像 apt 那样回车确认安装（系统默认会取消行为

    echo "defaultyes=1" | sudo tee -a /etc/dnf/dnf.conf > /dev/null

:::caution bug

因 PackageKit 不完美支持 DNF 的问题。 [Github 反馈](https://github.com/PackageKit/PackageKit/issues/201)

临时解决方法，执行：

    sudo sed -i '/^SingleInstall/ s/=ask/=warn/' /etc/PackageKit/CommandNotFound.conf

如果你对磁盘空间紧张且频繁安装卸载大型软件，不要使用基于 PackageKit 的 Discover 和 GNOME 商店安装软件

<details>
  <summary>内部技术解释</summary>
  在 Fedora 中、CommandNotFound 模块使用 PackageKit 自动安装时，不会恰当处理 DNF 依赖关系，导致包移除时无法处理依赖而有效释放磁盘空间，推荐 dnf 命令行手动安装。
</details>

:::

### 使用 KDE

对于 Fedora Workspace 版，安装 KDE 的命令：

    sudo dnf in -y @kde-desktop-environment

或者推荐改用 [Fedora Spins - KDE Plasma 桌面环境版](https://spins.fedoraproject.org/zh_Hans_CN/kde/) 系统
