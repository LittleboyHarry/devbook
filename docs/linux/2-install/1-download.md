---
title: 下载发行版
---

## 获取镜像

**国内综合镜像站：https://mirrorz.org/**

<div className="alert alert--warning">
非官方 https 渠道下载后，务必校验文件完整性
</div>

### Arch Linux

<LinkButton href="https://mirrorz.org/os/archlinux" name="系统镜像"/>
<HtmlA href="https://archlinux.org/iso/latest/sha256sums.txt">校验信息</HtmlA>
<br/>
<LinkButton outline href="https://mirrorz.org/os/ArchLinuxGUI" name="图形化版安装器" hint="Arch Linux GUI"/>
<HtmlA href="https://osdn.net/projects/arch-linux-gui/releases/">校验信息</HtmlA>

### Fedora

<Container>
    <cards.FedoraWorkstation />
    <cards.FedoraKdePlasma />
</Container>

<br/>

更多版本:
[多种桌面](https://spins.fedoraproject.org/zh_Hans_CN/) +
[服务器及其他版本 ...](https://getfedora.org/zh_Hans_CN/server/download/)

:::note [校验信息](https://getfedora.org/zh_Hans_CN/security/) ( [其他版本 ...](https://pagure.io/fedora-web/websites/blob/master/f/sites/getfedora.org/static/checksums) )
:::

### Ubuntu

<Container>
    <cards.Ubuntu />
    <cards.Kubuntu />
</Container>

<br/>

[Kubuntu 指纹信息](https://kubuntu.org/alternative-downloads/#:~:text=Checksums)
、
[镜像站的所有 Ubuntu 衍生版](https://mirrorz.org/os/Ubuntu%E8%A1%8D%E7%94%9F%E7%89%88)

---

注：

- Ubuntu 是 Debian 同构品，如无例外则，两术语等效或近似。Fedora 与 CentOS 等同理

import { Container, cards } from './oscards';
import { HtmlA, LinkButton } from '@theme/links';
