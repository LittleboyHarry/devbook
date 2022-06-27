# 小技巧

## 机械硬盘擦除遗留数据

出手机械硬盘前，运行

    cipher /w:<盘符>

## 管理员提权需要密码

管理员权限运行

    reg add HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System /v ConsentPromptBehaviorAdmin /t REG_DWORD /f /d 1

0 禁用
5 默认形式
1 可以设置登录(指纹)验证
