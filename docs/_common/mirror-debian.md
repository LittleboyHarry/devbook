
Debian 10 及以上版本内置的 `apt-transport-https` 模块支持 HTTPS 协议

```shell
sudo cp -n /etc/apt/sources.list /etc/apt/sources.list.old # 备份

# 使用腾讯云 Debian 镜像源:
sudo sed -i -E "s#http://(deb|security|ftp).debian.org#https://mirrors.cloud.tencent.com#g" /etc/apt/sources.list
# 不需要检索源码包
sudo sed -i "/deb-src/ s/^/#/" /etc/apt/sources.list

sudo apt update     # 更新源
sudo apt upgrade -y # 更新系统
```
