---
title: 安装
---

## 获取 Fedora

其他桌面版本：https://spins.fedoraproject.org/

服务器定制版安装：https://getfedora.org/en/server/download/

指纹验证：https://getfedora.org/en/security/

所有哈希码：https://pagure.io/fedora-web/websites/blob/master/f/sites/getfedora.org/static/checksums

## 准备

Ventoy —— 多系统镜像支持的启动盘制作器 [下载网址](https://www.ventoy.net/cn/download.html)

       scoop install ventoy

少数其它发行版仅支持单一启动盘制作器：

       scoop install rufus

网络：有线网或已知 WiFi 密码，其他特用网络工具自备

## 提示

- 用户名不建议太长，避免日后输入命令行的麻烦
- 为防笔记本丢失导致数据泄露，建议设置分区加密

自定义双系统分区配置时，请注意：

- 必须挂载上 EFI 分区，以刷入启动项
- 每个 Windows 系统分区后都会存在一个 MSR 保留的恢复分区，微软建议不要删除该分区

## 首次运行

第三方软件源含有：N卡驱动、Chrome 浏览器、PyCharm、Steam。按需开启。
稍后可在 `gnome-software` 中菜单的软件仓库页尾处禁用第三方源，以避免多余耗时的网络请求

打开终端的方法

- GNOME: 点击左上角 “活动” 按钮，输入 “terminal” 打开
- KDE: 开始菜单，选择 “Konsole”

<details>
    <summary>选调：键位重映射调整</summary>

笔者推荐，该[调整](/geekbook/docs/dev/keymap)需要一段适应时间，可提高操作效率。

</details>

:::caution 第一步：备份

打开终端备份系统默认的 `/etc` 配置文件：

```shell
# 切换至备份目录
mkdir ~/mybackup && cd ~/mybackup

sudo tar cpzf etc.tar.gz /etc
```

:::

:::caution 第二步：更新系统

激活镜像源，加速下载

    echo "fastestmirror=1" | sudo tee -a /etc/dnf/dnf.conf > /dev/null

保持网络畅通，安装更新过程中避免其他操作、待其完成后自动重启

    sudo dnf upgrade --refresh -y && sudo reboot

如果镜像站发生故障，可修改 `/etc/hosts` 将其域名屏蔽 `127.0.0.1`

:::

注意：若更新 Linux 内核后导致故障，请查阅 [FAQ 文档](./faq#新内核无法启动导致黑屏死机) 以解决
