# 网络问题

解决国内开发遇到的网络问题

import GetPkg from '@theme/GetPkg';

<GetPkg name="proxychains-ng" dnf apt pacman/>

配置:

```shell
# fedora
sudo vi +$ /etc/proxychains.conf

# debian
sudo vi +$ /etc/proxychains4.conf
```

替代品：tsocks

Windows：<https://sourceforge.net/projects/sockscap64/files/latest/download>
