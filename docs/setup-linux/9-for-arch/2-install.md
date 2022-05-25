---
title: 使用 archinstall
---

插入 U 盘，进入启动盘

:::info 界面字体太小？

```shell
# 展示
ls /usr/share/kbd/consolefonts/ter-v*b*
showconsolefont

# 设置
setfont ter-i24b
```

:::

:::info 作者推荐脚本

```shell
curl -L https://gitcode.net/lbh/dwe/-/archive/main/dwe-main.tar.gz | tar xz --strip 1
# 上游版：
# curl -L https://github.com/LittleboyHarry/deployworkenv/tarball/main | tar xz --strip 1

# 审查代码 ( :n 查看下一文件 )
less archinst/*
```

:::

:::info 改进国内下载速度

    cn/arch-faster

:::

## 自动安装

执行，[配置选项](#推荐的选项配置)

    archinstall

## 手动安装

适用于：双系统多分区、数据加密

启动分区管理器，参考 <a href="../part" target="_blank" >前文的分区建议</a>

    lsblk && cgdisk
    # 输入硬盘设备名：/dev/...
    # 操作确定后，按 w 输入 yes 写入分区表，按 q 退出

格式化分区

    # boot 与数据分区通用格式
    mkfs.ext4 /dev/...

重置 EFI 分区并清除所有启动项，请使用 `mkfs.vfat /dev/...`

:::info 加密分区

自动配置脚本：若不要加密，配置 `export noEncrypt=1`

    archinst/makebtrfs

评估各种算法的速度：`cryptsetup benchmark`

更多细节和参数请见资料：[Arch Wiki](https://wiki.archlinux.org/title/Dm-crypt/Device_encryption)

:::

挂载分区

    archinst/mount

:::caution [检查 GRUB 安装器 BUG](https://github.com/archlinux/archinstall/issues/1189)

    archinst/fixbug

:::

:::info 安装

检查分区挂载点，确保 EFI 分区、启动分区、根分区已挂载

    mount | grep /mnt

开始安装

    archinst/start

:::

## 推荐的选项配置

1. **Select mirror region**

   软件源：按 `/` 键搜索选择 China

2. **Select harddrives**

   选择目标硬盘

3. **Select disk layout**

   如果不保留硬盘数据，全盘安装 Arch，则可以选择 `wipe all ...`

4. **Select bootloader**

   选择 yes 使用 GRUB

5. **Specify superuser account**

   录入管理员帐号密码

6. **Specify profile**

   选择安装内容，如桌面、显卡等

7. **Select audio**

   选择 `pipewire`, 是后者的改进版

8. **Select kernels**

   选择 `linux-lts`, 若新设备不兼容则改用 linux (最新版)

9. **Additional packages to install**

   对需要防火墙的个人或家用设备，建议填入 ufw ( 或图形化版 gufw )

10. **Configure network**

    选择 `NetworkManager`，用于图形化系统

11. **Select timezone**

    搜索 `hai` 选择 Asia/Shanghai

完成配置后，可选择保存配置。随后安装

## 备份系统

安装完成后，不要进入子系统。执行：

    archinst/postfix

作用：

- 备份 /boot 启动分区到 boot.tgz
- 为 btrfs 调整以支持 timeshift

对非 btrfs 文件系统，想要备份，只能使用 tar 全量备份根文件系统
