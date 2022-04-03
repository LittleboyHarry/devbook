---
title: 安装
---

使用需同意微软产品相关条款

下载安装包：

<p>

<a className="button button--lg button--primary" href="https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64" target="_blank">Debian or Ubuntu</a>

<span style={{width:16,display:'inline-block'}}> </span>

<a className="button button--lg button--primary" href="https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user" target="_blank" style={{cursor:'help'}} title="PowerShell 内置的 Start-BitsTransfer 命令支持 P2P 加速下载">Windows</a>

</p>

rpm:

```shell
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/vscode.repo'
dnf check-update
sudo dnf install code -y
```

from: [官方说明](https://code.visualstudio.com/docs/setup/linux#_rhel-fedora-and-centos-based-distributions)
