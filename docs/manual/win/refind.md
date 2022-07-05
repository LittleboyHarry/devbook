# 万能引导器 refind

支持可配置的 Windows, Linux 和 Mac OS X 系统 EFI 引导器。

## 下载

import { LinkButton } from '@theme/unique/links';

<LinkButton outline href="https://sourceforge.net/projects/refind/files/latest/download" name="Windows 格式的安装包" />
<LinkButton outline href="https://sourceforge.net/projects/refind/files/" name="其他格式的安装包" />

## 安装

Windows 安装方法：https://www.rodsbooks.com/refind/installing.html#windows

<!--
RPM 安装方法：

    rpm -Uvh refind-*.x86_64.rpm
-->

## 配置

    sudo vi /boot/efi/EFI/refind/refind.conf

<div className="autoselect-cell-of-table">

| 选项    | 说明         | 推荐值 | 作用           |
| ------- | ------------ | ------ | -------------- |
| timeout | 停留时间(秒) | 1      | 不要停留       |
| scanfor | 扫描启动项   | manual | 手动配置启动项 |

</div>

默认的自动扫描常常失败，推荐通过手动配置 menuentry 来配置启动项

推荐主题：https://github.com/littleboyharry-like/refind-theme-regular

:::note 隐藏菜单内的其它系统

自动修改：随后更新 Grub

    echo GRUB_DISABLE_OS_PROBER=true | sudo tee -a /etc/default/grub > /dev/null

:::
