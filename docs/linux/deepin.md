---
title: 国产软件
---

:::info 推荐在专用虚拟机内安装国产软件，兼容性好、折腾少！

deepin 深度系统是一款优秀的国产图形化操作系统，本文适用于 libvirt 虚拟机环境下安装。

:::

清华镜像站下载：https://mirrors.tuna.tsinghua.edu.cn/deepin-cd/
（[官方来源](https://www.deepin.org/zh/download/)

安装虚拟环境

    sudo dnf in -y @virtualization

打开 virt-manager 选择安装 ISO 镜像安装。推荐配置：

- 连接非管理员权限的 `qemu:///session`，创建新虚拟系统
- 把本地安装镜像放到统一的目录下
- 配置“文件系统目录”存储池并添加卷，操作系统的架构应为 `Debian 10`
- 为虚拟机创建磁盘镜像至少需要 64GiB 存储空间（ 动态磁盘，尚未使用的空间不会实际占用 ）
- 完成前，别忘了给 deepin 虚拟机取个喜欢的名称

开始安装（ 安装时取消勾选额外备份，因为已有快照功能可用。其他的按默认设置安装即可 ）

安装完成后，需要重启并作初始化设置。建议设置后关机打一个初始快照以备份，这样就完成安装了

## Spice 图形优化

关机设置：

- 显卡型号改 Virtio, 启动 3D 加速
- 显示协议 -> 监听类型选“无”，启动 OpenGL

桌面右键“在终端中打开”运行（ 按 Tab 自动补充 ）

```shell
sudo apt update
sudo apt install -y libvirglrenderer0 spice-client-gtk spice-vdagent
# 需要重启
sudo reboot
```

tips: 菜单 “查看”->“缩放显示” 可激活 “自动调整虚拟系统窗口大小”

## SSH

宿主机：

```bat
sudo systemctl start virtnetworkd
sudo systemctl enable virtnetworkd # 设置自动启动
```

需要设置网络为桥接模式，填入 virbr0 设备。在虚拟机执行：

    sudo service ssh start
    ip a

在主机使用 `ssh-copy-id user@ip` 复制指纹信息后，即可使用

## 其他

- [修改键盘映射](https://wiki.deepin.org/index.php?title=%E4%BF%AE%E6%94%B9%E9%94%AE%E7%9B%98%E6%98%A0%E5%B0%84&language=zh)
