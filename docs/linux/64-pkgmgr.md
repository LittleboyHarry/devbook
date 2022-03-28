---
title: 包管理器
---

<!--
:::info 查看包内容

安装 apt-file:

    sudo apt install -y apt-file
    sudo apt-file update

用法：

    apt-file list <pkgname>

:::
 -->

import {
  PreferPkgMgrScope,
  PkgMgrSelector,
  ForApt,
  ForDnf,
} from '@theme/PreferPkgMgr'

 <PreferPkgMgrScope dnf apt>
<PkgMgrSelector />

 <ForApt>

## dpkg

:::info 日志记录

    less /var/log/dpkg.log

:::

### 图形化助手 synaptic

    sudo apt install -y synaptic

</ForApt>

 <ForDnf>

## RPM

下载升级，缓存以备使用

    dnf upgrade --downloadonly

列出配置状态，方便调试或导出状态

    dnf config-manager --dump


:::note 远程软件仓

枚举

    dnf repolist

禁用

    sudo dnf config-manager --set-disabled <repo>

:::

### 组管理

列出包组

    dnf grouplist --ids

### 包降级

可避免软件新版出现的 bug，摘抄自：https://unix.stackexchange.com/q/266888

```shell
sudo dnf downgrade <package>

# 方法二：

# 列出其它可用版本
dnf --showduplicates list <package>

sudo dnf install <package>-<version>
```

</ForDnf>
</PreferPkgMgrScope>
