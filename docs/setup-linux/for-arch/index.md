---
title: 安装 Arch Linux
---

:::caution 准备好流畅的网络环境

使用网线最为方便，
[wifi 配置](<https://wiki.archlinux.org/title/Iwd_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)#%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95>)略为麻烦

:::

import LogoCard from '@theme/LogoCard';
import useBaseUrl from '@docusaurus/useBaseUrl';

<LogoCard
name="从镜像站获取"
to="https://mirrorz.org/os/archlinux"
logo={<img src={useBaseUrl('/img/icons/arch.svg')} />}
/>

<br/>

import FileItem from '@theme/FileItem'
import { ChecksumIcon } from '@theme/fai';
import { LinkButton } from '@theme/links';
import { WebIcon } from '@theme/fai';

<p>
<FileItem button name="校验信息" path="https://archlinux.org/iso/latest/sha256sums.txt" icon={<ChecksumIcon />}/>
&nbsp;
<LinkButton outline href="https://wiki.archlinux.org/title/Installation_guide_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)" name="安装 Wiki" icon={<WebIcon />} />
</p>

<HtmlA href="bootable" target="_blank">

:::note 下一步，见制作启动盘
:::

</HtmlA>

附：[参考资料](https://archlinuxstudio.github.io/ArchLinuxTutorial/#/)

import { HtmlA } from '@theme/links';
