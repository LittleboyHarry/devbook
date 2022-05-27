---
title: 防火墙
---

## ufw

状态

    sudo ufw status verbose

放开端口

    sudo ufw allow 80

阻断端口

    sudo ufw deny 25

## firewalld

红帽系

列出开放的端口（ 默认 1024 以上

    firewall-cmd --list-ports

开放端口访问

    sudo firewall-cmd --permanent --add-port=22/tcp

屏蔽端口访问

    sudo firewall-cmd --permanent --remove-port=2017/tcp

:::caution 重载以生效

    sudo firewall-cmd --reload

:::
