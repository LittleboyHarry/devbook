---
title: 分区加密
---

对于空分区表的硬盘，各种安装器都支持自动分区，填写密码后无需手工介入。

但对保留多分区的分区加密操作，除了 Fedora 安装器做得好外，很多安装器均需要手工执行命令来介入操作：

## Kubuntu

一个 Ubiquity 安装器年旧欠修的 bug [^1] [^2]，解决方法：

[^1]: https://bugs.launchpad.net/ubuntu/+source/ubiquity/+bug/1066480
[^2]: https://bugs.launchpad.net/ubuntu/+source/ubiquity/+bug/1510731

1. 进入“试用 Ubuntu”模式，打开 KDE 分区管理器（ 搜索 `parti` ）执行分区规划

   - 至少创建一个的加密分区、一个启动分区
   - 文件系统都先选“未格式化”（ 列表内快捷键 `End` ）

2. 打开终端 `sudo -i` 提权执行：

   1. 输入设备信息

      ```shell
      lsblk
      read -p "boot part name: " BOOTPART_NAME
      export BOOT_NAME
      read -p "encrypt part name: " ENCRPART_NAME
      export ENCRYPT_NAME
      read -p "mapper name (default=encryproot): " MAPPER_NAME
      export MAPPER_NAME=${MAPPER_NAME:-encryproot}
      ```

   2. 创建并挂载加密分区

      ```shell
      cryptsetup luksFormat -q /dev/$ENCRPART_NAME
      cryptsetup luksOpen /dev/$ENCRPART_NAME $MAPPER_NAME
      mkfs /dev/mapper/$MAPPER_NAME
      ```

3. 不要关闭终端窗口，运行系统安装器
4. 其他安装流程与 Ubuntu 相同，手动分区：

   1. 更改已解锁的根目录分区：推荐 `ext4` 或 `btrfs` 文件格式
   2. 更改启动分区：`ext4` 格式、挂载到 `/boot`
   3. 选择安装启动器的设备

5. **安装完成后“继续试用”**，回到终端内执行：

   1. 挂载新系统的根目录

      普通文件系统：

      ```shell
      mount /dev/mapper/$MAPPER_NAME /target
      ```

      Btrfs 文件系统：

      ```shell
      mount /dev/mapper/$MAPPER_NAME /mnt && mount -B /mnt/@ /target
      ```

   2. 特殊挂载并 chroot 至新系统

      ```shell
      mount /dev/$BOOTPART_NAME /target/boot

      export BOOTPART_UUID=`blkid -s UUID -o value /dev/$BOOTPART_NAME`
      export ROOTPART_UUID=`blkid -s UUID -o value /dev/$ENCRPART_NAME`

      for i in /dev /proc /sys /run; do sudo mount -B $i /target$i; done
      chroot /target
      ```

   3. 写入并更新解锁信息：

      ```shell
      echo $MAPPER_NAME UUID=$ROOTPART_UUID none luks > /etc/crypttab
      update-initramfs -u -k all -v > /tmp/initrd.log
      update-grub
      ```

   4. ( 验证信息 )：

      ```shell
      echo
      echo encrypt mapper name: $MAPPER_NAME
      echo boot uuid: $BOOTPART_UUID
      echo
      echo "PRINT: /etc/fstab"
      cat /etc/fstab | grep "^[^#]"
      echo
      echo "TEST: crypt in initrd?"
      lsinitramfs /boot/initrd* | grep cryptroot/crypttab
      echo
      echo "LOG: less /tmp/initrd.log"
      ```

6. 关机，取出介质后重启

方法摘录自 [artmg 的文档](https://github.com/artmg/lubuild/blob/master/help/configure/LxQt-Kubuntu-Ubiqity-manual-encryption-bug.md)

附：StackOverflow 的[相关讨论](https://askubuntu.com/questions/293028)
