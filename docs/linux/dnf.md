---
title: 包管理器
---

## 软件仓库管理

枚举

    dnf repolist

禁用

    sudo dnf config-manager --set-disabled <repo>

## 小技巧

### 包降级

可避免软件新版出现的 bug，摘抄自：https://unix.stackexchange.com/q/266888

```shell
sudo dnf downgrade <package>

# 方法二：

# 列出其它可用版本
dnf --showduplicates list <package>

sudo dnf install <package>-<version>
```
