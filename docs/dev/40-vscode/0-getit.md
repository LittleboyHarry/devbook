---
title: 下载安装
---

## 免费商业版

使用后代表你同意微软公司的相关条款。下载安装包：

Windows: 保存到下载文件夹

```powershell
Start-BitsTransfer "https://vscode.cdn.azure.cn$((iwr "https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user" -method head).BaseResponse.RequestMessage.RequestUri.AbsolutePath)" -dest [Environment]::GetFolderPath("MyDocuments") + "\Downloads"
```

Debian:

```bash
wget -c $(curl -ILsw %{url_effective} -o /dev/null "https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64" | sed "s#//az764295.vo.msecnd.net/#//vscode.cdn.azure.cn/#")
```

RPM:

```bash
wget -c $(curl -ILsw %{url_effective} -o /dev/null "https://code.visualstudio.com/sha/download?build=stable&os=linux-rpm-x64" | sed "s#//az764295.vo.msecnd.net/#//vscode.cdn.azure.cn/#")
```

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

<LinkButton outline href="https://mirrorz.org/app/VSCodium" name="从国内镜像站下载" />

[不兼容的插件](https://hub.fastgit.xyz/VSCodium/vscodium/wiki/Extensions-Compatibility):
远程开发类插件基本不支持

import { LinkButton } from '@theme/links';