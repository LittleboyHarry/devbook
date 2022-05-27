---
title: VSC 下载
---

## 免费商业版

使用后代表你同意微软公司的相关条款。[从官方网站下载](https://code.visualstudio.com/)

:::note 从世纪互联国区 CDN 下载

Debian:

```bash
wget -c $(curl -ILsw %{url_effective} -o /dev/null "https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64" | sed "s#//az764295.vo.msecnd.net/#//vscode.cdn.azure.cn/#")
```

RPM:

```bash
wget -c $(curl -ILsw %{url_effective} -o /dev/null "https://code.visualstudio.com/sha/download?build=stable&os=linux-rpm-x64" | sed "s#//az764295.vo.msecnd.net/#//vscode.cdn.azure.cn/#")
```

:::

<!--
**RPM:**

```shell
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/vscode.repo'
dnf check-update
sudo dnf install code -y
```

摘自 [官方文档](https://code.visualstudio.com/docs/setup/linux#_rhel-fedora-and-centos-based-distributions)
 -->

## 开源社区版

缺点：[部分插件（ 如微软 VSCode 远程连接服务 ）](https://github.com/VSCodium/vscodium/wiki/Extensions-Compatibility)
不受支持

<GetPkg pacman="code" />

[... 从国内镜像站下载](https://mirrorz.org/app/VSCodium)

import { LinkButton } from '@theme/links';
import GetPkg from '@theme/GetPkg';
