---
sidebar_position: 16
---

# WSL 网络问题

## DNS 问题

WSL 默认会自动选择 DNS 服务器，可能存在 DNS 干扰问题。若要固定，执行：

```shell
DNS_SERVERS=(8.8.8.8 8.8.4.4)

cat << END | sudo tee -a /etc/wsl.conf > /dev/null
[network]
generateResolvConf = false
END
sudo rm /etc/resolv.conf
for DNS_SERVER in ${DNS_SERVERS[@]}; do
    echo "nameserver $DNS_SERVER" | sudo tee -a /etc/resolv.conf > /dev/null
done
sudo chattr +i /etc/resolv.conf
```

## 解除防火墙拦截

<!--
Disable-NetFirewallRule -DisplayName "<进程名>.exe"
 -->

先以管理员身份 PowerShell 运行：重启失效

    New-NetFirewallRule -DisplayName "WSL" -Direction Inbound  -InterfaceAlias "vEthernet (WSL)"  -Action Allow

:::info [重启后自动激活的推荐办法](https://github.com/microsoft/WSL/issues/4139#issuecomment-778428577)

见：`Automate adjusting of firewall rule (only works if you have admin rights):`

:::

## 方法一：使用 ohmyzsh 的 `shell-proxy` 插件

    echo 'export SHELLPROXY_URL="http://`cat /etc/resolv.conf | grep nameserver | cut -d" " -f 2`:20172"' >> ~/.zshrc
    exec $SHELL

输入 `proxy enable` 激活

## 方法二：使用 proxychains

### 自动获取主机 IP

```shell
echo 'export WSL_HOST_IP=`cat /etc/resolv.conf | grep nameserver | cut -d" " -f 2`' | tee -a ~/.bashrc ~/.zshrc > /dev/null
exec $SHELL
```

在解除防火墙拦截后，测试连通性：

    bash -ic 'sudo timeout 2s ping $WSL_HOST_IP'

### 端口转发

<GetPkg name='socat' apt pacman />

```shell
printf '主机端口(空格分开): '
read YOUR_PORTS
cat << END | tee -a ~/.zshrc ~/.bashrc > /dev/null

wslfp(){
    for port in \${WIN_HOST_PORTS[@]}; do
        socat TCP4-LISTEN:\$port,fork TCP4:\$WSL_HOST_IP:\$port & disown
    done
}
WIN_HOST_PORTS=($YOUR_PORTS)
END
exec $SHELL
```

这样每次打开 WSL 时，
执行一下 `wslfp` 即固定监听虚拟机 `127.0.0.1` 端口，转发报文到宿主机对应的端口上

### 配置代理

确保宿主机端口监听到 `0.0.0.0`，在端口转发的基础上配置：

<GetPkg name="proxychains-ng" apt pacman/>

```shell
CONFIG=/etc/proxychains.conf
[ -f "$CONFIG" ] || CONFIG=/etc/proxychains4.conf

sudo sed -i '/^\[ProxyList\]$/,/^[^#]/ s/^[^\[#].*//' "$CONFIG"
printf '主机代理端口：'
read WIN_HOST_PORT
```

SOCKS5 代理：

```shell
echo "socks5 127.0.0.1 $WIN_HOST_PORT" | sudo tee -a "$CONFIG" > /dev/null
```

HTTP 代理：

```shell
echo "http 127.0.0.1 $WIN_HOST_PORT" | sudo tee -a "$CONFIG" > /dev/null
```

import GetPkg from '@theme/GetPkg'
