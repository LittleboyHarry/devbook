# 小技巧

## 存储修复

对于少量存储数据故障，备份重要数据后，执行：

    chkdsk c:

检查 C 盘数据错误，随后在指令后加上 `/f` 执行修复

## 机械硬盘擦除遗留数据

出手机械硬盘前，运行

    cipher /w:<盘符>

 <CodeType cmd admin>

## 提权需要密码

</CodeType>

    reg add HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System /v ConsentPromptBehaviorAdmin /t REG_DWORD /f /d 1

- 0 禁用
- 5 默认
- 1 强制登录验证 (指纹)

import CodeType from '@theme/CodeType'
