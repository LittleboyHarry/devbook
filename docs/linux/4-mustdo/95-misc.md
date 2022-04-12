---
title: 其他
---

## 关机等待时间过长

改 90s 为 10s

    sudo sed -i '/DefaultTimeoutStopSec/{s/#//;s/=90s/=10s/}' /etc/systemd/system.conf

详情分析：https://zhuanlan.zhihu.com/p/256481066

<!-- todo: select text copy -->
