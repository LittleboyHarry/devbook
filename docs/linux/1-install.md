---
title: 安装
---

## 镜像校验

Fedora

指纹验证：https://getfedora.org/zh_Hans_CN/security/

所有哈希码：https://pagure.io/fedora-web/websites/blob/master/f/sites/getfedora.org/static/checksums

## 准备

:::warn 安装前，务必校验系统镜像的完整性

:::

[Ventoy](https://www.ventoy.net/cn/download.html):
多系统镜像支持的启动盘制作器

    scoop install ventoy

少数其它发行版仅支持单一启动盘制作器：

    scoop install rufus

若在线安装，需要有线网或已知 WiFi 密码，其它特用网络工具自备

## 提示

- 为防笔记本丢失导致数据泄露，建议全盘加密
- 手动分区：
  - 每个 Windows 系统分区后都保留着一个 MSR 恢复分区，微软建议不要删除
  - Fedora 手动分区时，为支持多系统启动，必须载入 EFI 分区以刷入启动项
  - 启动分区难以加密，全盘加密前必须额外划定 /boot 分区并挂载
- 若安装前手动挂载过任何硬盘分区，需先卸载
- 对专业用户而言 Ubuntu 优先选择最小化安装，速度更快
- 用户名不建议太长，避免日后输入命令行的麻烦

:::caution 建议

保留好 LiveCD U 盘，以便日后之需

:::

## 首次运行

第三方软件源含有：N 卡驱动、Chrome 浏览器、PyCharm、Steam。按需开启。
稍后可在 `gnome-software` 中菜单的软件仓库页尾处禁用第三方源，以避免多余耗时的网络请求

打开终端的方法

- GNOME: 点击左上角 “活动” 按钮，输入 “terminal” 打开
- KDE: 开始菜单，选择 “Konsole”

:::info 作者留言

在 GNOME 中，按住 Super 键 + 鼠标滚轮可以切换工作区，以方便整理多应用窗口

可选的优化：

- <a target="_blank" href="/docs/dev/keymap">键位重映射调整</a>

  需要一段适应时间以提高操作效率

- 推荐 <a target="_blank" href="/docs/dev/zsh">使用 Zsh 作为默认 Shell</a>
- 推荐 <a target="_blank" href="/docs/browser/edge-for-linux">使用微软 Edge 浏览器</a>

:::

<br/>

### 第一步：备份

打开终端备份系统默认的 `/etc` 配置文件

    mkdir backup && cd backup
    sudo tar cpzf etc.tar.gz /etc

### 第二步：更新系统

<div className="let-tipbg-to-yellow no-admonition-uppercase-title">

:::tip 简易的 Ubuntu 图形化操作

1. 打开 “软件和更新” ( 搜索关键词 `sof` )，选择合适的下载源

   Ubuntu 下载 -> 下载自 ( 默认“中国的服务器”指的是 cn.archive.ubuntu.com )

2. 打开 “软件更新器” ( 搜索关键词 `upd` ) 更新系统

其它系统见下文，以 Fedora 为例：

:::

</div>

激活镜像源，加速下载[^1]

    echo "fastestmirror=1" | sudo tee -a /etc/dnf/dnf.conf > /dev/null

:::note 不需要的更新

```shell
# 如果不需要开源版 office
sudo dnf remove libreoffice*
```

:::

<br/>

保持网络畅通，安装更新过程中避免其它操作、待其完成后自动重启[^2]

方法一：通过命令行

    sudo dnf upgrade -y

方法二：

打开 GNOME 软件中心更新

[^1]: 若镜像站发生故障，可修改 `/etc/hosts` 将其域名屏蔽 `127.0.0.1`
[^2]: 若发生 Linux 内核故障，请看[内核问题](./kernel)文档
