---
title: Debian for WSL
---

## 初始化

输入用户名密码来初始化，推荐 `me` : `'`

:::note 使用 HTTPS 协议的镜像源

Debian for WSL 缺少需下载安装的依赖：
[可信证书](https://packages.debian.org/search?keywords=ca-certificates&exact=1)
及 [openssl](https://packages.debian.org/search?keywords=openssl&exact=1)

    wsl sudo apt install -y ./ca-certificates_*.deb ./openssl_*.deb

随后<a href="/docs/linux/mustdo/for-debian#国内镜像软件仓" target="_blank">
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
exec $SHELL

# 其他推荐
sudo apt install -y tree unzip tig
```

zsh, git, deploy-my-dotfiles, neovim, bat, fzf, rg, fd, pipx 等请见：

<a target="_blank"
href="/docs/dev/intro#命令行工具">开发环境 - 命令行工具</a>

## 建议

尽量把文件存储在 WSL 文件系统内。若非必要，开发时尽量不使用 Windows 文件系统。

目前兼容机制 BUG 多不完善：不能监听文件修改、文件管理器交换文件时产生碎片文件等

---

扩展阅读：https://dowww.spencerwoo.com/
