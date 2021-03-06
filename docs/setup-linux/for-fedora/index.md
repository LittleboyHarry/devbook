# 安装 Fedora Linux

## 下载获取

<Container>
    <cards.FedoraWorkstation />
    {/* <cards.FedoraKdePlasma /> */}
</Container>

<br/>

<p><LinkButton outline icon={<WebIcon />} name="镜像站下载汇表" href="https://mirrorz.org/os/fedora"/>
&nbsp;含有:</p>

- [其它桌面环境](https://spins.fedoraproject.org/zh_Hans_CN/)
- [服务器、非主流 CPU 版](https://getfedora.org/zh_Hans_CN/server/download/)

:::caution 下载后，务必校验文件完整性

指纹校验：
[Workstation 版信息](https://getfedora.org/zh_Hans_CN/security/) 与
[其它版本信息](https://pagure.io/fedora-web/websites/blob/master/f/sites/getfedora.org/static/checksums)

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

## 安装

见前文内容：

1. [制作启动盘](bootable)
2. [规划硬盘分区](part)
3. [相关建议](advice)

安装系统前可以卸载一些不需要的捆绑应用，如 LibreOffice 以加快速度。打开终端执行：

    sudo dnf remove -y libreoffice*

import { WebIcon } from '@theme/unique/fai';
import { Container, cards } from './oscards';
import { HtmlA, LinkButton } from '@theme/unique/links';
