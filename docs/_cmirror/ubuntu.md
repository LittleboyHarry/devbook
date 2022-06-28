```shell
sudo cp -n /etc/apt/sources.list /etc/apt/sources.list.old # 备份

# 使用腾讯云 Ubuntu 镜像源:
sudo sed -i -E "s#http://((cn.)?archive|security).ubuntu.com#https://mirrors.cloud.tencent.com#g" /etc/apt/sources.list

sudo apt update     # 更新源
sudo apt upgrade -y # 更新系统
```
