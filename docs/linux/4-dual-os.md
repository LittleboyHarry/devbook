---
title: 双系统配置
---

## 划分共享数据分区

### 推荐格式

exFAT 是一种仍对 Windows 和 Linux 兼容性均优的分区格式，尽管现代 Linux 对 NTFS 分区支持已改善很多。
推荐设置 exFAT 格式分区用于跨系统共享存储数据

### 自动挂载

为其它数据分区设置自动挂载，以免每次启动后需要手动挂载。
推荐使用 `gnome-disks` 或 KDE 的图形化硬盘分区管理器，配置：

1.  关闭“用户会话默认值”
2.  禁用“显示用户界面”
3.  命名挂载点路径
4.  添加挂载参数

    推荐一种保守的权限参数：允许默认用户读写文件（ 仅 root 可执行文件，拒绝无关用户访问 ）

        ,uid=1000,fmask=107

fstab 详细参考 [ArchWiki](<https://wiki.archlinux.org/title/Fstab_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)>)

## [rEFInd](https://www.rodsbooks.com/refind/getting.html)

可用于 EFI 的多系统启动器，

### 下载

下载 Windows 版：https://sourceforge.net/projects/refind/files/latest/download

其他版本：https://sourceforge.net/projects/refind/files/

### 安装

Windows 安装方法：https://www.rodsbooks.com/refind/installing.html#windows

RPM 安装方法：

    rpm -Uvh refind-*.x86_64.rpm

### 配置

    sudo vi /boot/efi/EFI/refind/refind.conf

<div className="autoselect-cell-of-table">

| 选项    | 说明         | 推荐值 | 作用           |
| ------- | ------------ | ------ | -------------- |
| timeout | 停留时间(秒) | 1      | 不要停留       |
| scanfor | 扫描启动项   | manual | 手动配置启动项 |

</div>

默认的自动扫描常常失败，推荐通过手动配置 menuentry 来配置启动项

推荐主题：https://github.com/littleboyharry-like/refind-theme-regular

## 注意事项

- 请关闭 Windows 系统的 “快速启动” 功能，<a href="/docs/win/first-run#双系统" target="_blank" >详情方法</a>

:::caution 双系统的卸载方法

卸载 GPT/UEFI 的 Linux 系统，满足条件为：

- EFI 分区下的 fedora 文件夹
- EFI 启动项
- grub 引导分区
- Linux 相关数据分区

如果还用了 rEFInd 启动器, 请注意修改配置或删除

附：[Windows EFI 分区挂载方法](https://jingyan.baidu.com/article/fc07f9893bef4353fee51905.html)
其它分区可使用 `diskmgmt.msc` 删除卷操作

<details className="let-details-to-yellow">
  <summary>efibootmgr 命令用法</summary>

列出启动顺序：

    efibootmgr

删除启动项：

    sudo efibootmgr -b <id> -B

</details>

:::

<!--
## 其它

启动切换助手 [Inokinoki/QEFIEntryManager](https://github.com/Inokinoki/QEFIEntryManager)
[下载](https://github.com/Inokinoki/QEFIEntryManager/releases/latest)
-->
