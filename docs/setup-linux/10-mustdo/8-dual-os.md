---
title: 对于双系统
---

:::caution 多系统的卸载方法

卸载 GPT/UEFI 的 Linux 系统，满足条件为：

- EFI 分区下的相关文件夹
- EFI 启动项
- grub 引导分区
- Linux 相关数据分区

如果还用了 rEFInd 启动器, 请注意修改配置或删除

Windows 使用 `diskmgmt.msc` 来删除分区，挂载 ESP 分区的管理员指令：
（ 仅管理员身份可操作该分区 ）

    mountvol x: /s

 <details className="alert--warning">
<summary>Linux 下 efibootmgr 命令用法</summary>

列出启动顺序：

    efibootmgr

调整启动顺序

    sudo efibootmgr -o 1,2,3,...

删除启动项：

    sudo efibootmgr -b <id> -B

</details>

:::

## 注意事项

- 请关闭 Windows 系统的 “快速启动” 功能，<a href="/docs/setup-mswin/first-run#双系统" target="_blank" >详情方法</a>
- VeraCrypt 用户打开主界面菜单“设置” > “系统加密 ...” > “高级选项” >

  关闭 “强制 VeraCrypt 引导项作为 EFI 固件启动菜单的第一项” ，确定

## 分区自动挂载

为其它数据分区设置自动挂载，以免每次启动后需要手动挂载。
推荐使用 `gnome-disks` 或 KDE 的图形化硬盘分区管理器，配置：

1.  关闭“用户会话默认值”
2.  禁用“显示用户界面”
3.  命名挂载点路径
4.  添加挂载参数

    推荐一种保守的权限参数：允许默认用户读写文件（ 仅 root 可执行文件，拒绝无关用户访问 ）

        ,uid=1000,fmask=107

5.  重启文件服务以生效

        sudo systemctl daemon-reload
        sudo systemctl restart local-fs.target

附：`/etc/fstab` 详细参考 [ArchWiki](https://wiki.archlinux.org/title/Fstab)

:::note 需要引导苹果操作系统？

推荐使用 [rEFInd](/docs/manual/win/refind) 引导器

:::

<!--
## 其它

启动切换助手 [Inokinoki/QEFIEntryManager](https://github.com/Inokinoki/QEFIEntryManager)
[下载](https://github.com/Inokinoki/QEFIEntryManager/releases/latest)
-->
