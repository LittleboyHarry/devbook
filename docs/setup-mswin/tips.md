---
title: 小技巧
---

## 任务栏

把常用的应用按顺序固定到任务栏上，按 `Win + 1 2 3 4` 键就能快速打开

## 截图

`Win + Shift + S` 键

## 机械硬盘擦除遗留数据

出手机械硬盘前，运行

    cipher /w:<盘符>

## 管理员提权需要密码

管理员权限运行

    reg add HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System /v ConsentPromptBehaviorAdmin /t REG_DWORD /f /d 1

0 禁用
5 默认形式
1 可以设置登录(指纹)验证
