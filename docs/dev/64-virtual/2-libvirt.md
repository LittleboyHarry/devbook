---
title: libvirt
---

## 安装

import {
  PreferPkgMgr,
  ForApt,
  ForDnf,
} from '@theme/PreferPkgMgr'

 <PreferPkgMgr dnf apt>
<ForDnf>

    sudo dnf in -y @virtualization

</ForDnf>
<ForApt>

    sudo apt install -y virt-manager gnome-boxes

</ForApt>
</PreferPkgMgr>

解锁虚拟机 XML 编辑器：

    dconf write /org/virt-manager/virt-manager/xmleditor-enabled true

:::tip 创建 Linux 虚拟机有什么门道？

看[巧用云镜像快速部署虚拟机](/docs/manual/linux/cloud-init)

:::
