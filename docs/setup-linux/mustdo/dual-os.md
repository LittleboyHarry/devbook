---
sidebar_position: 8
---

# 对于双系统

## 注意事项

- 请关闭 Windows 系统的 “快速启动” 功能，<a href="/docs/setup-mswin/firstrun#双系统" target="_blank" >详情方法</a>
- 对于 VeraCrypt, 打开主界面菜单“设置” > “系统加密 ...” >
  “高级选项” | “自动修复引导配置问题……” 关闭确定

## 分区自动挂载

<PreferXde gnome kde noSelector><ForKde>
<GetPkg name='gnome-disk-utility' pacman dnf />
</ForKde></PreferXde>

为其它数据分区设置自动挂载，以免每次启动后需要手动挂载。
推荐搜索关键词 `disk` 打开 GNOME 硬盘，配置：

1.  选择对应分区
2.  菜单按钮 > 编辑挂载选项
3.  关闭“用户会话默认值”
4.  禁用“显示用户界面”
5.  命名挂载点路径
6.  添加挂载参数

    推荐一种保守的权限参数：允许默认用户读写文件（ 仅 root 可执行文件，拒绝无关用户访问 ）

        ,uid=1000,fmask=107

7.  重启文件服务以生效

        sudo systemctl daemon-reload
        sudo systemctl restart local-fs.target

附：`/etc/fstab` 详细参考 [ArchWiki](https://wiki.archlinux.org/title/Fstab)

:::note 需要引导苹果操作系统？

推荐使用 [rEFInd](/docs/manual/win/refind) 引导器

:::

## 多系统的卸载方法

卸载 GPT/UEFI 的 Linux 系统，满足条件为：

- EFI 分区下的相关文件夹
- EFI 启动项
- grub 引导分区
- Linux 相关数据分区

如果还用了 rEFInd 启动器, 请注意修改配置或删除

Windows 使用 `diskmgmt.msc` 来删除分区，内容编辑：

 <CodeType admin>

    mountvol i: /s

</CodeType>

:::note 命令行用法

Linux 下 efibootmgr 使用

- 列出启动顺序

      efibootmgr

- 调整启动顺序

      sudo efibootmgr -o 1,2,3,...

- 删除启动项

      sudo efibootmgr -b <id> -B

:::

<!--
## 其它

启动切换助手 [Inokinoki/QEFIEntryManager](https://github.com/Inokinoki/QEFIEntryManager)
[下载](https://github.com/Inokinoki/QEFIEntryManager/releases/latest)
-->

import {
PreferXde,
ForGnome,
ForKde
} from '@theme/PreferXde';
import GetPkg from '@theme/GetPkg';
import CodeType from '@theme/CodeType'
