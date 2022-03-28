---
title: 小技巧
---

- `sudo` 时须禁用中文输入模式，否则输入密码总是错误

## 关机等待时间过长

改 90s 为 10s

    sudo sed -i '/DefaultTimeoutStopSec/{s/#//;s/=90s/=10s/}' /etc/systemd/system.conf

详情分析：https://zhuanlan.zhihu.com/p/256481066

<!-- todo: select text copy -->

## Debian

### python 缺失

使用 python3 代替

    sudo apt install python-is-python3

## 其它

- [Debian 包流行度调查](https://popcon.debian.org/)，数据可供参考

      curl https://popcon.debian.org/by_inst | less
