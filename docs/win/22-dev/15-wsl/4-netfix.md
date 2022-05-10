---
title: WSL 小技巧
---

## 虚拟硬盘瘦身

https://www.cnblogs.com/enrio/p/14222648.html

## 端口

### 端口转发

安装 `socat`

    sudo apt install -y socat

写入 `.bashrc` 或 `.zshrc`

```shell
forwardport(){
    local ports=(...) # 端口转发
    local host=`cat /etc/resolv.conf | grep nameserver | cut -d ' ' -f 2`
    for port in ${ports[@]}; do
        socat TCP4-LISTEN:$port,fork TCP4:$host:$port & disown
    done
}
```

这样每次打开 WSL 时，（或写入 `.zshrc` 自动执行）
执行一下 `forwardport` 即可转发虚拟机内的指定端口到宿主机 `127.0.0.1` 上

### 代理

确保端口监听 `0.0.0.0`

为解除防火墙保护，先以管理员身份 PowerShell 运行：

```powershell
# 关闭先前的规则：
Disable-NetFirewallRule -DisplayName "<进程名>.exe"

New-NetFirewallRule -DisplayName "WSL" -Direction Inbound  -InterfaceAlias "vEthernet (WSL)"  -Action Allow
```

设置代理监听 `0.0.0.0`，禁用防火墙相关规则

在端口转发的基础上，配置 <a href="/docs/dev/modern-cli/network" target="_blank" >proxychains</a>。

### proxychains

```shell
sudo sed -i -e "\$asocks5 $(cat /etc/resolv.conf |grep -oP '(?<=nameserver\ ).*') <本地端口>" -e '/^socks/d' /etc/proxychains4.conf
```
