---
title: 下载发行版
---

# 获取镜像

:::note 发行版解释

- Fedora 是 RedHat 牵头的社区操作系统试验田，
  是 CentOS stream 的上游源码、最终沉淀为 RHEL 系统
- [Debian 和 Ubuntu 的对比](https://www.toutiao.com/article/7003371708354658852/),
  简言之：前者是开放社区的产物，后者是免费开源的商业技术
<!-- - Debian 与 [Ubuntu LTS](https://www.toutiao.com/article/6872706707538051588/) 交替迭代提供三到五年的稳定支持服务 -->

:::

**国内高校综合镜像站：https://mirrorz.org/**

<div className="alert alert--warning">
非官方 https 渠道下载后，务必校验文件完整性
</div>

## Fedora

<Container>
    <cards.FedoraWorkstation />
    {/* <cards.FedoraKdePlasma /> */}
</Container>

<br/>


更多版本:
[其他桌面环境](https://spins.fedoraproject.org/zh_Hans_CN/) 、
[服务器、小众 CPU 等](https://getfedora.org/zh_Hans_CN/server/download/)

<LinkButton outline icon name="镜像站汇总表" href="https://mirrorz.org/os/fedora"/>

指纹校验：
[Workstation 版信息](https://getfedora.org/zh_Hans_CN/security/) 与
[其他版本信息](https://pagure.io/fedora-web/websites/blob/master/f/sites/getfedora.org/static/checksums)

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
---

注：

<!-- - Ubuntu 是 Debian 同构品，如无例外则，两术语等效或近似。Fedora 与 CentOS 等同理 -->
- Arch 系统安装请见左侧目录的专栏

import { Container, cards } from './oscards';
import { HtmlA, LinkButton } from '@theme/links';
