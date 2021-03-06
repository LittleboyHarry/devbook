---
sidebar_position: 66
---

# libvirt 虚拟化平台

# libvirt

## 安装

import {
PreferPkgMgr,
ForApt,
ForDnf,
ForPacman
} from '@theme/unique/PreferPkgMgr'

 <PreferPkgMgr dnf apt pacman>
<ForDnf>

    sudo dnf in -y @virtualization

</ForDnf>
<ForApt>

    sudo apt install -y virt-manager gnome-boxes

</ForApt>
<ForPacman>

    sudo pacman -S virt-manager gnome-boxes virt-viewer

</ForPacman>
</PreferPkgMgr>

## 配置

### 解锁虚拟机 XML 编辑器

    dconf write /org/virt-manager/virt-manager/xmleditor-enabled true

### 桥接网卡

为了宿主机与虚拟机通讯，配置 `virbr0` 虚拟桥接网卡：

 <Tabs className="tabs--block" groupId="linux-distro">
<TabItem value="debian" label="Ubuntu / Debian">

```shell
sudo mkdir -p /etc/qemu
echo "allow virbr0" | sudo tee -a /etc/qemu/bridge.conf > /dev/null
sudo chmod u+s /usr/lib/qemu/qemu-bridge-helper
```

  </TabItem>
  <TabItem value="centos" label="Fedora">

    sudo systemctl enable --now virtnetworkd

  </TabItem>
  <TabItem value="arch" label="Arch Linux">

```shell
sudo virsh net-autostart default
sudo virsh net-start default
```

  </TabItem>
</Tabs>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip 创建 Linux 虚拟机的门道

[巧用云镜像机制，快速部署虚拟机！](/docs/manual/linux/cloud-init)

:::

Windows 官方虚拟机：https://developer.microsoft.com/zh-cn/microsoft-edge/tools/vms/
