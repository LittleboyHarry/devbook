---
title: 开始
---

为开发用途适配 Windows

## 剪贴板收集器

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

- <a href="docs/dev/vscode/install" target="_blank" download>VSCode</a>
- Visual Studio

      winget install XPDCFJDKLZJLP8

## Git For Windows

<p><a className="button button--primary" href="https://mirrors.tuna.tsinghua.edu.cn/github-release/git-for-windows/git/LatestRelease/#:~:text=64%2Dbit.exe">清华镜像站</a></p>

:::note 自动化安装参数：

/silent /readinf=<a href="/inno-setup/git.ini" target="_blank" download>git.ini</a>

:::

### 配置 SSH 密钥

参考<a href="/docs/dev/git" target="_blank" >其它章节</a>

### 能长期记住口令的 `ssh-agent` 服务

管理员运行：

```powershell
Get-Service ssh-agent | Set-Service -StartupType Automatic
Start-Service ssh-agent

ssh-add

git config --global core.sshCommand C:/Windows/System32/OpenSSH/ssh.exe

```

详见：https://docs.microsoft.com/zh-cn/windows-server/administration/openssh/openssh_keymanagement#user-key-generation

## 字体

[参见](/docs/dev/font)
