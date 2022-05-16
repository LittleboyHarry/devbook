---
title: 系统备份
---

对于 BTRFS 文件系统，我们可用具有图形化界面的自动备份助手：

import GetPkg from '@theme/GetPkg';

<GetPkg name="timeshift" apt dnf />

AUR: `timeshift`

---

对于其他普通文件系统，我们打开终端备份系统默认的 `/etc` 配置文件

    mkdir backup && cd backup
    sudo tar cpzf etc.tar.gz /etc
