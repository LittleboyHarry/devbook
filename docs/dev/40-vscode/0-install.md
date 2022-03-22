---
title: 安装
---

RPM Linux 安装：[源自官方说明](https://code.visualstudio.com/docs/setup/linux#_rhel-fedora-and-centos-based-distributions)

```shell
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/vscode.repo'
dnf check-update
sudo dnf install code
```
