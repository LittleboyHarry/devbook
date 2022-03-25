---
title: 小技巧
---

## dnf 包管理

下载升级，缓存以备使用

    dnf upgrade --downloadonly

列出配置状态，方便调试或导出状态

    dnf config-manager --dump

## dpkg 包管理

日志记录：`/var/log/dpkg.log`


## 关机等待时间过长

改 90s 为 10s

    sudo sed -i '/DefaultTimeoutStopSec/{s/#//;s/=90s/=10s/}' /etc/systemd/system.conf

详情分析：https://zhuanlan.zhihu.com/p/256481066

<!-- todo: select text copy -->

## Debian

### python 缺失

使用 python3 代替

    sudo apt install python-is-python3
