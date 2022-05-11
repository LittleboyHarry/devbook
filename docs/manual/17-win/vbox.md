---
title: VirtualBox 的使用
---

Windows PATH 添加：

    shim "C:\Program Files\Oracle\VirtualBox\VBoxManage.exe"

## 自动化命令

列出虚拟机名称和 uuid

    vboxmanage list vms

## 快照管理

照相

    vboxmanage snapshot <uuid|vmname> take <snapshot-name>
    vboxmanage snapshot <uuid|vmname> take <snapshot-name> [--live]

恢复

    vboxmanage snapshot <uuid|vmname> restorecurrent
