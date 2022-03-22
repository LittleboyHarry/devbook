---
title: FAQ 答疑
---

## 新内核无法启动，导致黑屏死机？

死机后关闭电源重启出现内核选择菜单，尝试过往可成功启动的内核启动。成功启动后，更换可用的内核：

```shell
# 内核列表
ls /boot/vmlinuz-*

sudo grubby --set-default <kernel_path>
```

[详见](https://ask.fedoraproject.org/t/fedora-new-kernel-not-working-after-dnf-upgrade-refresh/2222/3)

```shell
# 列出历史版本
dnf --showduplicates list kernel

# 阻止更新
sudo dnf in 'dnf-command(versionlock)'
sudo dnf versionlock add kernel-5.14.10-300.fc35
# add 为锁定模式，exclude 为排除模式，delete 解除锁定
```
