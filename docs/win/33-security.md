---
title: 安全
---

## 提权管理员验证

管理员权限运行

    reg add HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System /v ConsentPromptBehaviorAdmin /t REG_DWORD /f /d 1

0 禁用
5 默认形式
1 可以设置登录(指纹)验证
