---
title: Cockpit
---

# Linux 机座舱

本地访问：

    http://localhost:9090/

## 安装

:::danger 开启防火墙

安装前，请确认防火墙能够拦截外部设备的恶意访问。或者
[绑定本地端口](https://cockpit-project.org/guide/latest/listen)：

    sudo systemctl edit cockpit.socket --full

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs className="tabs--block" groupId="linux-distro">
  <TabItem value="debian" label="Ubuntu / Debian">

```shell
. /etc/os-release
sudo apt install -t ${VERSION_CODENAME}-backports cockpit
```

  </TabItem>
  <TabItem value="centos" label="Fedora">

    sudo dnf install cockpit
    sudo systemctl enable --now cockpit.socket

  </TabItem>
</Tabs>

## 插件

import GetPkg from '@theme/GetPkg';

### podman 容器

<GetPkg name="cockpit-podman" apt dnf />

<GetPkg name="cockpit-machines" apt dnf />
