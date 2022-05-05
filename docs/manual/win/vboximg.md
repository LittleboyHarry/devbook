---
title: VirtualBox 云镜像
---

:::info

vbox 会根据系统名称猜测发行版

:::

由于字符串界面支持共享剪切板数据。为了方便把代码粘贴到虚拟机，这里提供 AHK 辅助小脚本：

import { faScroll } from '@fortawesome/free-solid-svg-icons';

<FileItem button name="vboxpaste.ahk" path="/ahk/vboxpaste.ahk" icon={<FontAwesomeIcon icon={faScroll} />}/>

使用方法：

- 使用前，请先在“全局设定”中关闭“热键”的“自动独占键盘”。
- 下载后打开脚本执行，右键托盘图标 `suspend` 挂起。

## Ubuntu 云镜像配置

这些镜像体积很小、适合虚拟化使用。且下载后，不需要手动安装即可使用

下载 [Ubuntu 22.04](https://cloud-images.ubuntu.com/jammy/current/jammy-server-cloudimg-amd64.ova) 为例，如何使用？

1. 打开下载得到的 ova 文件，导入虚拟机（ 导入参数基本不变，可以适当增加资源
2. \* 要支持主机 SSH 连接：在启动虚拟机前，设置激活网卡 2、连接方式为“Host-Only”

云镜像无法正常登录，因为缺乏用户登录凭证信息。只能在 Grub 中启动：

1. 虚拟机启动时，按住 `Shift` 键弹出 Grub 界面
2. 选择高级启动 ( recovery mode )
3. 选择菜单项 root 并两次回车确定获取特权

默认的系统只识别 2GB 空间大小，我们需要调整。
扩容方法：

    growpart /dev/sda 1 && resize2fs /dev/sda1

然后，解决网络连接问题并更系统。确保右下角小图标(桥接网卡)正常后执行：

1.  编辑 netplan

    ```bash
    vi /etc/netplan/config.yaml
    # 阻止 vim 粘贴格式问题，命令为 :set paste
    ```

    enp0s3 确保可以通过 NAT 访问网络，enp0s8 用于主机通讯

    ```yaml
    network:
      version: 2
      renderer: networkd
      ethernets:
        enp0s3:
          dhcp4: true
        enp0s8:
          dhcp4: true
    ```

2.  配置 SSH 信息

    ```bash
    ssh-keygen -A &&
    sed -i "/PasswordAuthentication/ s/no$/yes/" /etc/ssh/sshd_config # 允许密码登录

    ```

3.  为了系统的正常登录，需要创建一个用户：

    ```bash
    adduser <username>
    usermod -aG sudo <username>
    ```

4.  `reboot` 重启后登录
5.  <a target="_blank" href="/docs/linux/mustdo/mirror-update#ubuntu">更改镜像源</a>
6.  升级

    ```bash
    sudo apt purge -y snapd && # 我这边不用，删除加快升级速度
    sudo apt upgrade -y &&
    sudo apt autoremove -y

    ```

7.  `hostname -I` 查看 ip，使用 git bash 的 `ssh-copy-id` 可以配置免密登录
8.  关闭虚拟机后，回到主界面，按下 `Ctrl + D` 打开“虚拟介质管理器”
9.  类型改为“多重加载”应用

ok，我们获得了可以不断克隆的虚拟机模板。

:::note 扩充虚拟硬盘的最大空间

仍可以在“虚拟介质管理器”内适当修改，然后启动虚拟机执行扩容命令：

    growpart /dev/sda 1 && resize2fs /dev/sda1

:::

## Arch 云镜像

import { faCompactDisc, faFingerprint } from '@fortawesome/free-solid-svg-icons';

<FileItem name="from TUNA" path="https://mirrors.tuna.tsinghua.edu.cn/archlinux/images/latest/Arch-Linux-x86_64-basic.qcow2" icon={<FontAwesomeIcon icon={faCompactDisc} />}/>
<FileItem name="验证信息" path="https://geo.mirror.pkgbuild.com/images/latest/Arch-Linux-x86_64-basic.qcow2.SHA256" icon={<FontAwesomeIcon icon={faFingerprint} />}/>

<!--
跟 Debian 差不太多：

1. “虚拟介质管理器”注册下载所得
 -->
<!-- https://www.onitroad.com/jc/linux/otherlinux/sysadmin/passwd/how-to-reset-root-password-in-arch-linux.html -->

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FileItem from '@theme/FileItem'
import { HtmlA, LinkButton } from '@theme/links';
