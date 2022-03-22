---
title: WSL2
---

## 安装

首先，管理员身份运行

```powershell
dism /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism /online /enable-feature /featurename:VirtualMachinePlatform /all

```

重启完成后，管理员身份运行：

    wsl --update

安装内核后，挑选喜欢的发行版：https://aka.ms/wslstore

:::note 配置内核自动更新

打开更新设置 `ms-settings:windowsupdate-options`，
启动“接收其他 Microsoft 产品的更新”。

:::

### Win11 对 WSLg 图形化功能的支持

下载安装：

https://github.com/microsoft/wslg/releases/latest/download/wsl_graphics_support_x64.msi

性能测试工具 [`glxgears`](https://command-not-found.com/glxgears)

附：关于 WSL2 系统需求和其他安装细节的官方说明
https://docs.microsoft.com/zh-cn/windows/wsl/install-manual#step-2---check-requirements-for-running-wsl-2

### Debian

    winget install 9MSVKQC78PK6

启动 Debian，初始化用户名密码。

使用[清华镜像源](https://mirrors.tuna.tsinghua.edu.cn/help/debian/) testing 版本并更新系统

```bash
cd /etc/apt/
sudo mv sources.list sources.list.initial
cat <<EOF | sudo tee sources.list
deb http://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free
deb http://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free
deb http://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free
deb http://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free
EOF
cd -

sudo apt update
sudo apt dist-upgrade -y
```

推荐必装包 `sudo apt install`:

- `zsh` 设置默认： `chsh -s /bin/zsh` 参见[配置](/geekbook/docs/dev/zsh)
- `tree` 文件树打印
- `unzip` 解压
- `man-db` man 手册
- `git` `curl` `wget` `python3`
- `lsof`
- `virt-manager`: 虚拟化平台

更多推荐命令参考 “开发” -> “命令行” 章节


### Ubuntu 20.04

同理

    ms-windows-store://pdp/?productid=9N6SVWS3RX71&mode=mini

[清华镜像源](https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/)

```bash
cd /etc/apt/
sudo mv sources.list sources.list.initial
cat <<EOF | sudo tee sources.list
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverseEOF
EOF
cd -

sudo apt update
sudo apt dist-upgrade
```

## 技巧

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

### 端口代理

确保端口监听 `0.0.0.0`

为解除防火墙保护，先以管理员身份 PowerShell 运行：

```powershell
# 关闭先前的规则：
Disable-NetFirewallRule -DisplayName "<进程名>.exe"

New-NetFirewallRule -DisplayName "WSL" -Direction Inbound  -InterfaceAlias "vEthernet (WSL)"  -Action Allow
```

设置代理监听 `0.0.0.0`，禁用防火墙相关规则

在端口转发的基础上，配置 [proxychains](/geekbook/docs/dev/cli/network)。

### proxychains

```shell
sudo sed -i -e "\$asocks5 $(cat /etc/resolv.conf |grep -oP '(?<=nameserver\ ).*') <本地端口>" -e '/^socks/d' /etc/proxychains4.conf
```
