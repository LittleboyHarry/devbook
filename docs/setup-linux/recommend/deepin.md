---
sidebar_position: 67
---

# virtual 深度系统

:::info 推荐在专用虚拟机内安装国产软件，兼容性好、折腾少！

deepin 深度系统是一款优秀的国产图形化操作系统，本文适用于 libvirt 虚拟机环境下安装。

:::

官网下载：https://www.deepin.org/zh/download/

清华镜像站：https://mirrors.tuna.tsinghua.edu.cn/deepin-cd/

**依赖前文的 [libvirt 虚拟化基础平台](libvirt)**

打开 `gnome-boxes` 创建虚拟机：

- 选择 deepin 安装镜像
- 操作系统类型为 `Debian 10`
- 最大磁盘容量至少 70 GB

安装选项：

- 安装时取消勾选额外备份，因为虚拟机可用快照备份
- 如果不满意自动分区，则手动分区，但至少存在写入引导器的 EFI 分区和主分区
- 其它按默认设置安装即可

安装后，立即重启以初始化系统配置

登陆系统配置 Spice 图形加速：在桌面右键 “在终端中打开” 运行 `sudo -i`，输入（ 按 Tab 自动补充 ）

```shell
apt update
apt install -y spice-vdagent spice-client-gtk libvirglrenderer0
shutdown now
```

:::note 使用虚拟系统管理器

virt-manager 管理方法：菜单 “文件” > “添加连接” 选择 “QEMU/KVM 用户会话”

（ 老版本也可选择 “自定义 URI ...” `qemu:///session` ）

:::

然后我们打开“虚拟系统管理器”，调整虚拟硬件详情：

- 卸载安装盘
- “显卡 QXL” 改为 Virtio 型, 激活 “3D 加速”
- “显示协议 Spice” 激活 “OpenGL”

应用上述修改，切换到快照管理、打一个备份快照。这样就完成安装了

:::info 自动调整虚拟系统窗口大小

在 “虚拟系统管理器” 菜单 “查看”->“缩放显示” 中

:::

## SSH

虚拟机 “添加硬件” “桥接设备” “设备名称” 填入 `virbr0` 。在虚拟机内执行：

    sudo systemctl start ssh
    # sudo systemctl enable ssh
    hostname -I

在主机使用 `ssh-copy-id user@ip` 复制指纹信息后，即可使用

## 其它

[修改键盘映射](https://wiki.deepin.org/zh/%E4%BF%AE%E6%94%B9%E9%94%AE%E7%9B%98%E6%98%A0%E5%B0%84):
[作者专用映射](/docs/devenv/keymap)

    gsettings set com.deepin.dde.keyboard layout-options ...
