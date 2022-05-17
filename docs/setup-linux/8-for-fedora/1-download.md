---
title: 获取 Fedora
---

<Container>
    <cards.FedoraWorkstation />
    {/* <cards.FedoraKdePlasma /> */}
</Container>

<br/>

<LinkButton outline icon name="镜像站下载汇表" href="https://mirrorz.org/os/fedora"/>
含有:

- [其他桌面环境](https://spins.fedoraproject.org/zh_Hans_CN/)
- [服务器、非主流 CPU 版](https://getfedora.org/zh_Hans_CN/server/download/)

:::caution 下载后，务必校验文件完整性

指纹校验：
[Workstation 版信息](https://getfedora.org/zh_Hans_CN/security/) 与
[其他版本信息](https://pagure.io/fedora-web/websites/blob/master/f/sites/getfedora.org/static/checksums)

:::

<!--
## Ubuntu

<Container>
    <cards.Ubuntu />
    <cards.Kubuntu />
</Container>

<br/>

[Kubuntu 指纹信息](https://kubuntu.org/alternative-downloads/#:~:text=Checksums)
、
[镜像站的所有 Ubuntu 衍生版](https://mirrorz.org/os/Ubuntu%E8%A1%8D%E7%94%9F%E7%89%88)
 -->

<!-- - Ubuntu 是 Debian 同构品，如无例外则，两术语等效或近似。Fedora 与 CentOS 等同理 -->

import { Container, cards } from './oscards';
import { HtmlA, LinkButton } from '@theme/links';
