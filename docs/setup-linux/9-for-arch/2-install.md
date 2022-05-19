---
title: 使用 archinstall
---

插入 U 盘，进入启动盘

:::info 界面字体太小？

```shell
ls /usr/share/kbd/consolefonts/ter-v*b*
setfont ter-i24b
showconsolefont
```

:::

:::info 提升下载速度

```shell
sed -i '/#Para/ s/^#//' /etc/pacman.conf
echo '-c cn' >>/etc/xdg/reflector/reflector.conf
systemctl restart reflector
```

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

```bash
mkfs.ext4 /dev/... # boot 与数据分区通用格式
mkfs.btrfs /dev/... # 数据分区的新格式，支持快照备份

# 重置 EFI 分区并清除所有启动项，请使用 mkfs.vfat /dev/...
```

 <details className="let-details-to-gray">
<summary>加密分区的方法</summary>

```bash
cryptsetup luksFormat -q /dev/...
cryptsetup open /dev/... cryptlvm
# cryptlvm 是约定的名称，不一定需要 LVM

# ?: ext4 btrfs
mkfs.? /dev/mapper/cryptlvm
```

评估其它算法的速度：`cryptsetup benchmark`

更多细节和参数请见资料：[Arch Wiki](https://wiki.archlinux.org/title/Dm-crypt/Device_encryption)

</details>

 <details className="let-details-to-gray">
<summary>timeshift 支持的 Btrfs 分区方法</summary>

假设加密的 Btrfs 分区路径为 `/dev/mapper/cryptlvm`

```shell
# 创建卷
mkdir /mnt/btrfs
cd /mnt/btrfs
mount /dev/mapper/cryptlvm .
btrfs subvol create @
btrfs subvol create @home

# 挂载
mkdir /mnt/archinstall
cd /mnt/archinstall
mount -o relatime,compress=zstd:1,space_cache=v2,subvol=@ /dev/mapper/cryptlvm .
cd .
mkdir home
mount -o relatime,compress=zstd:1,space_cache=v2,subvol=@home /dev/mapper/cryptlvm home
umount /mnt/btrfs
```

</details>

ext4 分区的挂载

```shell
mkdir /mnt/archinstall
cd /mnt/archinstall
mount /dev/... .
cd .
```

挂载启动分区和 EFI 分区

```shell
mkdir boot
mount /dev/... ./boot

mkdir boot/efi
mount /dev/... ./boot/efi

```

:::note [检查 GRUB 安装器 BUG](https://github.com/archlinux/archinstall/issues/1189)

    nano +837 /usr/lib/python*/site-packages/archinstall/lib/installer.py

`--efi-directory=/boot` 改为 `--efi-directory=/boot/efi`

:::

开始安装

    archinstall --script swiss --mode only_os

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

9. **Configure network**

   选择 `NetworkManager`，用于图形化系统

10. **Select timezone**

    搜索 `hai` 选择 Asia/Shanghai

完成配置后，可选择保存配置。随后安装

## 备份系统

安装完成后，切入新系统

    arch-chroot /mnt/archinstall

备份一下启动分区：

```shell
cd /boot
tar -zcvf boot.tgz .
```

非 btrfs 文件系统，只能使用 tar 全量备份跟文件系统

:::note 对于 btrfs 文件系统

可使用更简单的 timeshift 备份，需要修改一下文件表 `/etc/fstab` 删除 `subvolid` 字段

:::
