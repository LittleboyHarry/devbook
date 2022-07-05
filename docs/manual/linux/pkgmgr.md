---
description: ...
---

# 包管理器速查表

<!--
:::info 查看包内容

安装 apt-file:

    sudo apt install -y apt-file
    sudo apt-file update

用法：

    apt-file list <pkgname>

:::
 -->

部分摘自：[Arch Wiki 文档](https://wiki.archlinux.org/title/Pacman/Rosetta)

import { WebIcon } from '@theme/unique/fai';

import {
  PreferPkgMgr,
  ForApt,
  ForDnf,
} from '@theme/unique/PreferPkgMgr'

 <PreferPkgMgr dnf apt>
<ForApt>

## debian 包管理器

### 查看日志

    less /var/log/dpkg.log

### 图形化助手

    sudo apt install -y synaptic

</ForApt>
<ForDnf>

## RedHat 包管理器

下载升级，缓存以备使用

    dnf upgrade --downloadonly

列出配置状态，方便调试或导出状态

    dnf config-manager --dump


### 远程软件仓

枚举

    dnf repolist

禁用

    sudo dnf config-manager --set-disabled <repo>

### 组管理

列出包组

    dnf grouplist --ids

### 包降级

可避免软件新版出现的 bug，[摘自](https://unix.stackexchange.com/q/266888)

```shell
sudo dnf downgrade <package>

# 方法二：

# 列出其它可用版本
dnf --showduplicates list <package>

sudo dnf install <package>-<version>
```

</ForDnf>
</PreferPkgMgr>

import { LinkButton } from '@theme/unique/links';
