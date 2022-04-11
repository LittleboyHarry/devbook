---
title: 安装
---

## 开源社区版

https://mirrorz.org/app/VSCodium

## 免费商业版

使用后代表你同意微软公司的相关条款。下载安装包：

<p>

<a className="button button--lg button--primary" href="https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64" target="_blank">Debian 安装包</a>

<span style={{width:16,display:'inline-block'}}> </span>

</p>

**RPM:**

```shell
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/vscode.repo'
dnf check-update
sudo dnf install code -y
```

摘自 [官方文档](https://code.visualstudio.com/docs/setup/linux#_rhel-fedora-and-centos-based-distributions)
