---
sidebar_position: 4
---

# Debian on WSL

import { StoreLink, mslink } from '@theme/links';

推荐安装 <StoreLink to={mslink('9MSVKQC78PK6')} text="Debian on WSL" />，
其他发行版均可在 <a href="https://aka.ms/wslstore">微软商店</a> 下载

初始化时输入用户名密码，如 `me` `'`

:::info 配置国内加速镜像源

1. 获取缺失的软件包：[可信证书](https://packages.debian.org/stable/all/ca-certificates/download)
   及 [openssl](https://packages.debian.org/stable/amd64/openssl/download)
2. 执行：

   ```powershell
   # 验证 SHA256 校验码
   get-filehash -a sha256 *.deb |%{$_.Hash=$_.Hash.ToLower();$_.Path=(ls $_.Path).Name;;$_}| fl path,hash

   # 安装
   wsl sudo apt install -y ./ca-certificates_*.deb ./openssl_*.deb
   ```

3. <a href="/docs/setup-linux/for-debian#国内镜像软件仓" target="_blank">
   设置镜像源并更新</a>

:::

```bash
# 开发必装
sudo apt install -y git curl wget python3 man neovim zsh

# 转换 Windows 格式的换行符
sudo apt install -y dos2unix

# 命令缺失提示
sudo apt install -y command-not-found
sudo apt update

# 其他推荐
sudo apt install -y tree unzip tig

exec $SHELL
```

import Require from '/docs/\_deployworkenv.md'

<Require />

import {BasicCatalog,DevEnvCatalog} from '/docs/devenv/Catalog'

配置开发环境：

<BasicCatalog />

<DevEnvCatalog />
