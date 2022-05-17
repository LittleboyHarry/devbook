---
title: 获取 Arch
---

:::caution 准备好流畅的网络环境

使用网线最为方便，
[wifi 配置](https://wiki.archlinux.org/title/Iwd_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)#%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95)略为麻烦

:::

## 下载镜像

import LogoCard from '@theme/LogoCard';
import useBaseUrl from '@docusaurus/useBaseUrl';

<LogoCard
  name="从镜像站获取"
  to="https://mirrorz.org/os/archlinux"
  logo={<img src={useBaseUrl('/img/icons/arch.svg')} />}
/>

<br/>

import { LinkButton } from '@theme/links';
import FileItem from '@theme/FileItem'
import { faFingerprint } from '@fortawesome/free-solid-svg-icons';

<FileItem button name="校验信息" path="https://archlinux.org/iso/latest/sha256sums.txt" icon={<FontAwesomeIcon icon={faFingerprint} />}/>

<LinkButton outline href="https://wiki.archlinux.org/title/Installation_guide_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)" name="安装 Wiki" icon />

<HtmlA href="../bootable" target="_blank">

:::note 下一步，见制作启动盘
:::

</HtmlA>

import { HtmlA } from '@theme/links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';