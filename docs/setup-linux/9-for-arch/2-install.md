---
title: 使用 archinstall
---

插入 U 盘，进入启动盘

:::info 界面字体太小？

```
ls /usr/share/kbd/consolefonts/ter-v*b*
setfont ter-i24b
showconsolefont
```

:::

## 自动安装

执行，[配置选项](#配置选项)

    archinstall

## 手动安装

适用于：双系统多分区、数据加密

启动分区管理器，参考 <a href="./advice#手动分区" target="_blank" >前文的分区建议</a>

    lsblk && cgdisk
    # 输入硬盘设备名：/dev/...
    # 操作确定后，按 w 输入 yes 写入分区表，按 q 退出

格式化分区

```bash
mkfs.ext4 /dev/... # boot 与数据分区通用格式
mkfs.btrfs /dev/... # 数据分区的新格式，支持快照备份

# 重置 EFI 分区并清除所有启动项，请使用 mkfs.fat /dev/...
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

挂载分区

```bash
mkdir /mnt/archinstall
cd /mnt/archinstall
mount /dev/mapper/cryptlvm .
# OR: mount /dev/... .
cd .

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

## 配置选项

- `Select mirror region`

  软件源：
  按 / 搜索 China 选择

- `Select harddrives`

  选择目标硬盘

- `Select disk layout`

  如果不保留硬盘数据，全盘安装 Arch，则可以选择 wipe all ...

- `Select bootloader`

  推荐输入 yes 使用 GRUB

- `Specify superuser account`

  录入管理员帐号密码

- `Specify profile`

  选择安装内容，如桌面、显卡等

- `Select audio`

  推荐 pipewire, 是后者的改进版

- `Select kernels`

  推荐 linux-lts, 若新设备不兼容则改用 linux (最新版)

- `Configure network`

  推荐 NetworkManager，用于图形化系统

- `Select timezone`

  搜索 hai 选择 Asia/Shanghai

完成配置后，可选择保存配置。随后安装