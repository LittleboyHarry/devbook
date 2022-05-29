---
title: Debian on WSL
sidebar_position: 4
---

import {MstoreLink} from '@theme/links';

作者推荐 <MstoreLink id="9MSVKQC78PK6" name="安装 Debian on WSL"/>，其他发行版均可在<a href="https://aka.ms/wslstore">微软商店</a>下载

初始化时输入用户名密码，如 `me` - `'`

:::info 配置国内加速镜像源

1. 获取缺失的软件包：
   [可信证书](https://packages.debian.org/stable/all/ca-certificates/download)
   及 [openssl](https://packages.debian.org/stable/amd64/openssl/download)
2. ```shell
   wsl sudo apt install -y ./ca-certificates_*.deb ./openssl_*.deb
   ```
3. <a href="/docs/setup-linux/for-debian#国内镜像软件仓" target="_blank">
   设置镜像源并更新</a>

:::

```bash
# 开发必装
sudo apt install -y git curl wget python3 man neovim

# 转换 Windows 格式的换行符
sudo apt install -y dos2unix

# 命令缺失提示
sudo apt install -y command-not-found
sudo apt update

# 其他推荐
sudo apt install -y tree unzip tig

exec $SHELL
```

使用 <a href="/docs/devenv/deployworkenv" target="_blank">deployworkenv</a> 自动配置

zsh, git, neovim, bat, fzf, rg, fd, pipx 等请见：<a
  target="_blank" href="/docs/devenv#命令行工具">
开发环境 - 命令行工具</a>
