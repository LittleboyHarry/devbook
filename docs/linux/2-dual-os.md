---
title: 双系统配置
---

## 划分共享数据分区

### 推荐格式

exFAT 是一种仍对 Windows 和 Linux 兼容性均优的分区格式，尽管现代 Linux 对 NTFS 分区支持已改善很多。
推荐设置 exFAT 格式分区用于跨系统共享存储数据

### 自动挂载

为其他数据分区设置自动挂载，以免每次启动后需要手动挂载。设置方法：

使用 `gnome-disks` 或 KDE 的硬盘与分区管理器，设置 `挂载点` 和 `挂载参数`

一种保守的权限参数设置 `uid=1000,fmask=107`：笔者推荐，允许默认用户读写文件（ 仅 root 可执行文件，拒绝无关用户访问 ）

fstab 详细参考 [ArchWiki](https://wiki.archlinux.org/title/Fstab_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87))

## rEFInd

可用于 EFI 的多系统启动器，[获取下载](https://sourceforge.net/projects/refind/files/）

    rpm -Uvh refind-*.x86_64.rpm

### 配置

    sudo vi /boot/efi/EFI/refind/refind.conf

<div className="AutoSelectedTableContainer">

| 选项    | 说明         | 推荐值 |
| ------- | ------------ | ------ |
| timeout | 停留时间(秒) | 2      |
| scanfor | 扫描启动项   | manual |

</div>

通过配置 menuentry 来配置启动项

推荐主题：https://github.com/littleboyharry-like/refind-theme-regular

## 注意事项

- 请关闭 Windows 系统的 “快速启动” 功能，[详情方法](/docs/win/first-run#双系统)

:::caution 双系统的卸载方法

对于 GPT/UEFI 的 Linux 系统而言，删除下列项意味着卸载：

- EFI 分区下的 fedora 文件夹
- grub 引导分区
- Linux 相关数据分区


如果还用了 rEFInd 启动器, 请注意修改配置或删除。

附：[Windows EFI 分区挂载方法](https://jingyan.baidu.com/article/fc07f9893bef4353fee51905.html)
其他分区可使用 `diskmgmt.msc` 删除卷操作

:::

<!--
## 其他

启动切换助手 [Inokinoki/QEFIEntryManager](https://github.com/Inokinoki/QEFIEntryManager)
[下载](https://github.com/Inokinoki/QEFIEntryManager/releases/latest)
-->
