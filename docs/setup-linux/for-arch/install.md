---
title: archinstall 安装器
sidebar_position: 2
---

插入 U 盘，进入启动盘

:::note 界面字体太小？

```shell
# 展示
ls /usr/share/kbd/consolefonts/ter-v*b*
showconsolefont

# 设置
setfont ter-i24b
```

:::

:::note 作者推荐脚本

```shell
# 国内镜像：
curl -fsSL https://s.nxw.so/arc > i
# cat i
bash i

# 上游版：
curl -fsSL https://t.ly/Fud- > i
# cat i
bash i

# 代码审查
find ais -type f -exec less {} \;
```

:::

:::note 改进国内下载速度

    ais/cn/preinit

:::

## 向导分区安装

执行，[配置选项](#推荐的选项配置)

    archinstall

## 手动分区安装

适用于：双系统多分区、数据加密

启动分区管理器，参考 <a href="../part" target="_blank" >前文的分区建议</a>

    lsblk && cgdisk
    # 输入硬盘设备名：/dev/...
    # 操作确定后，按 w 输入 yes 写入分区表，按 q 退出

格式化分区

    # boot 与数据分区通用格式
    mkfs.ext4 /dev/...

重置 EFI 分区并清除所有启动项，请使用 `mkfs.vfat /dev/...`

:::note 加密分区

自动配置脚本：若不要加密，配置 `export NOENCRYPT=y`

    ais/makebtrfs

评估各种算法的速度：`cryptsetup benchmark`

更多细节和参数请见资料：[Arch Wiki](https://wiki.archlinux.org/title/Dm-crypt/Device_encryption)

:::

挂载分区

    ais/mount

:::caution [检查 GRUB 安装器 BUG](https://github.com/archlinux/archinstall/issues/1189)

    ais/fixbug

:::

:::info 安装

检查分区挂载点，确保 EFI 分区、启动分区、根分区已挂载

    mount | grep /mnt

开始安装

    ais/start

:::

## 推荐的选项配置

1. **Mirror region**

   软件源：按 `/` 键搜索选择 China

2. **Drive(s)**

   选择目标硬盘

3. **Disk layout** \*

   （ 仅“向导分区安装”时可见 ）如果不保留硬盘数据，全盘安装 Arch，则可以选择 `wipe all ...`

4. **Bootloader**

   选择 yes 使用 GRUB

5. **User account**

   录入管理员帐号密码

6. **Profile**

   选择安装内容，如桌面、显卡等

7. **Audio**

   选择 `pipewire`, 是后者的改进版

8. **Kernels**

   选择 `linux-lts`, 若新设备不兼容则改用 linux (最新版)

9. **Network configuration**

   选择 `NetworkManager`，用于图形化系统

10. **Timezone**

    搜索 `hai` 选择 `Asia/Shanghai`

完成配置后，可选择保存配置。随后安装

## 备份系统

安装完成后，退出子系统。执行：

    ais/postinit
    ais/cn/postinit # 中文支持

作用：

- 备份 `/boot` 启动分区到 boot.tgz
- 为 btrfs 调整以支持 timeshift

对非 btrfs 文件系统，想要备份，只能使用 tar 全量备份根文件系统

重启机器后正式进入 Arch 系统
