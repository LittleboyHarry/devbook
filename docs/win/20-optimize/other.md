---
title: 其他
---

## 配置自动清理

使用“存储感知”功能

    ms-settings:storagepolicies

## 作者的偏好

自带输入法外观优化

```
reg add HKCU\Software\Microsoft\InputMethod\CandidateWindow\CHS\1 /v MaxCandidates /t REG_DWORD /d 5 /f
reg add HKCU\Software\Microsoft\InputMethod\CandidateWindow\CHS\1 /v FontStyleTSF3 /t REG_SZ /d "18.00pt;Regular;;Microsoft YaHei UI" /f

```
