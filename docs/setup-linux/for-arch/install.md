---
sidebar_position: 2
---

# archinstall 安装器

插入 U 盘，进入启动盘

:::note 界面字体太小？

```shell
# 展示字体
ls /usr/share/kbd/consolefonts/ter-v*b*
showconsolefont
# 设置
setfont ter-i24b
```

:::

import {
PreferNetShore,
OffshoreNet,
InshoreNet,
} from '@theme/unique/PreferNetShore'

:::note 自动安装脚本

 <PreferNetShore>

<br/>

<OffshoreNet>

```shell
cd `mktemp -d`;curl -fsSL https://raw.githubusercontent.com/LittleboyHarry/archinstall-scripts/main/fetchme | tee a
# 确定执行：
source a
```

</OffshoreNet>
<InshoreNet>

```shell
cd `mktemp -d`;curl -fsSL https://gitcode.net/lbh/ais/-/raw/main/fetchme-c | tee a
# 确定执行：
source a
```

</InshoreNet>

推荐事项：

- 开启并发支持，加速下载

<InshoreNet>

- 自动选择国内最快的镜像源

</InshoreNet>

</PreferNetShore>

:::

## 自动分区安装

适用于单系统空硬盘自动分区。执行，然后见 [配置选项](#推荐的选项配置)

    archinstall

## 手动分区安装

适用于：双系统多分区、数据加密

启动分区管理器，参考 <a href="../part" target="_blank" >前文的分区建议</a>

1.  使用分区工具进行分区

        lsblk -nd -o name;cgdisk

    输入 /dev/ 内的存储设备路径全名，按 w 输入 yes 写入分区表，按 q 退出（ EFI 分区号为 ef00，其它分区默认 8300 即可 ）

2.  格式化分区

    若要重建 EFI 分区，用 `mkfs.vfat`

    若是 boot 分区与数据分区，建议用 `mkfs.ext4` 格式化

    :::note 创建可被加密的 BTRFS 分区

        ./btrfshelper

    默认使用带有硬件加速的 AES 加密算法，

    要评估各种算法速度可执行：`cryptsetup benchmark`

    更多细节和参数请见资料：[Arch Wiki](https://wiki.archlinux.org/title/Dm-crypt/Device_encryption)

    :::

3.  使用检查助手：检查并挂载系统所需分区（ 含 EFI 分区、启动分区、根分区 ）

        ./mounthelper

4.  执行安装脚本：

        ./archinstall-m

## 推荐的选项配置

\* 仅适用于自动分区安装

1. **Mirror region**

   软件源：按 **/** 键搜索 `ina` 选择 **China**

2. \* **Drive(s)**

   选择目标硬盘

3. \* **Disk layout**

   （ 仅“向导分区安装”时可见 ）如果不保留硬盘数据，全盘安装 Arch，则可以选择 **wipe all ...**

4. **Bootloader**

   选择 yes 使用 GRUB

5. **Hostname**

   主机标识名

5. **User account**

   录入帐号密码，设置 sudo 权限

6. **Profile**

   选择安装内容，如桌面、显卡等

7. **Audio**

   选择 **pipewire**, 是后者的改进版

8. **Kernels**

   选择 **linux-lts**, 若新设备不兼容则改用 linux (最新版)

9. **Network configuration**

   选择 **NetworkManager**，用于图形化系统

10. **Timezone**

    搜索 `hai` 选择 **Asia/Shanghai**

其它保持默认，确定安装

## 完成安装

安装结束后，不要立刻关机、不要 chroot 子系统。执行：

    ./postinstall
    ./postinstall-c # 中文环境支持

最后，注册存储设备，激活并优化 Grub, 写入 EFI 启动项：

    ./setup-efigrub

<!-- ## 系统备份与恢复 -->

:::caution 系统恢复的方法

如果需要用 LiveCD 挂载硬盘的系统进行修复，可借助 `./btrfshelper` `./mounthelper` `./setup-efigrub` 三个脚本进行处理

:::
