---
title: Win 开发者必做
---

为开发用途适配 Windows

import {HtmlA,DownloadButton,MstoreButton,MstoreLink} from '@theme/links';

## 剪贴板收集器

`Win + V` 启动剪贴板历史记录

## 网络问题

解决微软商店下载困难的方法：

1. 设置 114 抗干扰 DNS
2. <HtmlA href="ms-settings:delivery-optimization">开启“传递优化”</HtmlA> 提高下载速度
3. 管理员运行：使微软商店支持全局代理

   ```
   CheckNetIsolation LoopbackExempt -a -n="Microsoft.WindowsStore_8wekyb3d8bbwe"
   ```

## 软件更新

<MstoreButton id="9N0DX20HK701" name="Windows Terminal" />

<MstoreButton id="9NBLGGH4NNS1" name="winget" />

手动更新: [下载 winget](https://github.com/microsoft/winget-cli/releases/latest#:~:text=.msixbundle)

## 快捷键冲突

以默认的微软拼音输入法为例：

```powershell
# 解除 Ctrl+Shift+F 简繁切换键的占用
reg add HKCU\Software\Microsoft\InputMethod\Settings\CHS /v EnableSimplifiedTraditionalOutputSwitch /t REG_DWORD /d "0" /f

# 解除 Ctrl+Space 中英切换键的占用
reg add HKCU\Software\Microsoft\InputMethod\Settings\CHS /v "English Switch Key" /t REG_DWORD /d "4" /f

# 解除 Ctrl+. 标点切换键的占用
reg add HKCU\Software\Microsoft\InputMethod\Settings\CHS /v EnableChineseEnglishPunctuationSwitch /t REG_DWORD /d "0" /f

```

<!--
# 解除 Ctrl+Space 中英切换键的占用
reg add "HKCU\Control Panel\Input Method\Hot Keys\00000010" /v "Key Modifiers" /t REG_BINARY /d 00c00000 /f
reg add "HKCU\Control Panel\Input Method\Hot Keys\00000010" /v "Virtual Key" /t REG_BINARY /d ff000000 /f
reg add "HKCU\Control Panel\Input Method\Hot Keys\00000070" /v "Key Modifiers" /t REG_BINARY /d 00c00000 /f
reg add "HKCU\Control Panel\Input Method\Hot Keys\00000070" /v "Virtual Key" /t REG_BINARY /d ff000000 /f
 -->

自行解除其他输入法的快捷键占用，如果还有的话。

系统捆绑软件，也可能绑定了一些引起冲突的快捷键：

- Nvidia/AMD 显卡设置程序
- 各种土产软件

## 开发神器

<DownloadButton name="VSCode"
 hint="P2P 加速下载方法：使用 PowerShell 的 Start-BitsTransfer 命令"
 href="https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user" />

<MstoreButton id="XPDCFJDKLZJLP8" name="Visual Studio 安装器" />

## Git For Windows

<DownloadButton name="从清华镜像站下载"
 href="https://gitforwindows.org/download/releases/latest" />

:::note 自动化安装参数：

/silent /readinf=<a href="/inno-setup/git.ini" target="_blank" download>git.ini</a>

:::

### 配置 SSH 密钥

参考<a href="/docs/dev/git" target="_blank" >其它章节</a>

### 能长期记住口令的 `ssh-agent` 服务

提权运行：

```powershell
Get-Service ssh-agent | Set-Service -StartupType Automatic
Start-Service ssh-agent

ssh-add

git config --global core.sshCommand C:/Windows/System32/OpenSSH/ssh.exe

```

详见：https://docs.microsoft.com/zh-cn/windows-server/administration/openssh/openssh_keymanagement#user-key-generation

## 字体

[参见](/docs/dev/font)

修复“管理控制台”模糊问题，提权运行：

    reg add "HKCU\Software\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers" /v C:\Windows\System32\mmc.exe /t REG_SZ /d "~ HIGHDPIAWARE" /f

## 虚拟机

自由软件 VirtualBox

    winget install virtualbox -i

专业版 Hyper-V 虚拟机

    DISM /Online /Enable-Feature /All /FeatureName:Microsoft-Hyper-V

个人非商业版 WMware WorkstationPlayer

    winget install VMware.WorkstationPlayer -i
