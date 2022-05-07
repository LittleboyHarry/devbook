---
title: WSL 使用技巧
---

## 安装推荐

```bash
# 开发必装
sudo apt install -y git curl wget python3 man

# 转换 Windows 格式的换行符
sudo apt install -y dos2unix

# 其他推荐
sudo apt install -y tree unzip
```

zsh, git, deploy-my-dotfiles, bat, fzf, rg, fd, pipx 等请见：

<a target="_blank"
href="/docs/dev/intro#命令行工具">开发环境 - 命令行工具</a>

## 建议

尽量把文件存储在 WSL 文件系统内。若非必要，开发时尽量不使用 Windows 文件系统。

目前兼容机制 BUG 多不完善：不能监听文件修改、文件管理器交换文件时产生碎片文件等

---

扩展阅读：https://dowww.spencerwoo.com/
