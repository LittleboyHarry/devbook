---
title: 开始
---

为开发用途适配 Windows

## 小技巧

`Win + V` 启动剪贴板历史记录

## 解决微软商店下载困难

1. 设置 114 抗干扰 DNS
2. `ms-settings:delivery-optimization` 开启“传递优化”来提高下载速度
3. 启动代理支持，管理员运行：

   ```
   CheckNetIsolation LoopbackExempt -a -n="Microsoft.WindowsStore_8wekyb3d8bbwe"
   ```

## 安装 winget

升级一下，激活 winget 使用能力

    ms-windows-store://pdp?productId=9NBLGGH4NNS1&mode=mini

手动升级：https://github.com/microsoft/winget-cli/releases/latest#:~:text=.msixbundle

## 升级 `Windows Terminal`

    winget install 9N0DX20HK701

## 避免快捷键冲突

解除微软拼音对 `Ctrl + Space` 的占用：

```
reg add "HKCU\Control Panel\Input Method\Hot Keys\00000010" /v "Key Modifiers" /t REG_BINARY /d 00c00000 /f
reg add "HKCU\Control Panel\Input Method\Hot Keys\00000010" /v "Virtual Key" /t REG_BINARY /d ff000000 /f
reg add "HKCU\Control Panel\Input Method\Hot Keys\00000070" /v "Key Modifiers" /t REG_BINARY /d 00c00000 /f
reg add "HKCU\Control Panel\Input Method\Hot Keys\00000070" /v "Virtual Key" /t REG_BINARY /d ff000000 /f

```

解除简繁体切换 `Ctrl + Shift + F` 的占用：

    reg add HKCU\Software\Microsoft\InputMethod\Settings\CHS /v EnableSimplifiedTraditionalOutputSwitch /t REG_DWORD /d 0 /f

其他输入法快捷键冲突自行解决

系统捆绑，也可能默认绑定了一些快捷键需要被解除：

- Nvidia/AMD 显卡设置程序
- 各种土产软件

## Git

下载 Git for Windows:

    https://mirrors.tuna.tsinghua.edu.cn/github-release/git-for-windows/git/LatestRelease/#:~:text=64%2Dbit.exe

:::note 自动化安装：命令行参数

/silent /readinf=<a href="/inno-setup/git.ini" target="_blank" download>git.ini</a>

:::

注销再登录后，Git 命令行可用

## 配置 SSH 密钥

见[其他章节](/geekbook/docs/dev/git)

### 能长期记住口令的 `ssh-agent` 服务

管理员运行：

```powershell
Get-Service ssh-agent | Set-Service -StartupType Automatic
Start-Service ssh-agent

ssh-add

```

<!--
Git 支持：

    git config --global core.sshCommand "'C:\Windows\System32\OpenSSH\ssh.exe'"
-->

详见：https://docs.microsoft.com/zh-cn/windows-server/administration/openssh/openssh_keymanagement#user-key-generation

## 开发神器

VSCode:

    winget install XP9KHM4BK9FZ7Q

## 字体

[参见](/geekbook/docs/dev/font)
