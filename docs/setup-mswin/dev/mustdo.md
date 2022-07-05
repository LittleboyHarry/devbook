---
sidebar_position: 3
---

# Windows 开发必做

为开发用途适配 Windows

## 剪贴板收集器

`Win + V` 启动剪贴板历史记录

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

## 网络问题

解决微软商店下载困难的方法：

1. 设置 114 抗干扰 DNS
2. <HtmlA href="ms-settings:delivery-optimization">开启“传递优化”</HtmlA> 提高下载速度
3. 管理员运行：使微软商店支持全局代理

   ```
   CheckNetIsolation LoopbackExempt -a -n="Microsoft.WindowsStore_8wekyb3d8bbwe"
   ```

## Windows Terminal

安装或检查更新：<StoreButton to={mslink`9N0DX20HK701`} text='Get' />

推荐固定到任务栏，以便可以通过 Win + 数字键打开终端

推荐设置：

- 配置文件 | 默认值 > 外观 >
  - 配色方案：推荐 `One Half Dark`
  - 字号
  - 光标形状：实心框
  - 背景不透明度：推荐 80 左右

## Git For Windows

- [GitHub 官方源](https://github.com/git-for-windows/git/releases/latest#:~:text=64%2Dbit.exe)
- 从阿里镜像站下载到桌面：

  ```powershell
  $g4w_metainfo = (Invoke-WebRequest https://registry.npmmirror.com/-/binary/git-for-windows/).Content | ConvertFrom-Json
  $g4w_latest_info = (Invoke-WebRequest ($g4w_metainfo | Where-Object name -NotMatch 'rc|pre' | Sort-Object -p date -b 1).url).Content | ConvertFrom-Json
  $g4w_latest_binary = ($g4w_latest_info | Where-Object { $_.name -match "64-bit.exe" }).url
  iwr -o "$([Environment]::GetFolderPath("Desktop"))\install-git.exe" $g4w_latest_binary

  ```

import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { ConfigIcon } from '@theme/unique/fai';

:::note 自动安装

由作者编写的自动安装脚本，
放到同安装器目录下：

<FileItem button name="install-git.ini" path="/scripts/install-git.ini" icon={<FontAwesomeIcon icon={faFileLines} />}/>
<FileItem button name="install-git.bat" path="/scripts/install-git.bat" icon={<ConfigIcon />}/>

:::

import MinttyRc from './_minttyrc.md'

<div className="no-admonition-uppercase-title">

:::note 调整 Mintty 终端

方法一（ 自动调整 ）：运行

    notepad %userprofile%/.minttyrc

输入内容：

<MinttyRc/>

:::

</div>

:::note 配置 SSH 密钥

参考<a href="/docs/devenv/git" target="_blank" >其它章节</a>

:::

:::note 能长期记住口令的 `ssh-agent` 服务

提权运行：

```powershell
Get-Service ssh-agent | Set-Service -StartupType Automatic
Start-Service ssh-agent

ssh-add

git config --global core.sshCommand C:/Windows/System32/OpenSSH/ssh.exe

```

详见：https://docs.microsoft.com/zh-cn/windows-server/administration/openssh/openssh_keymanagement#user-key-generation

:::

## 开发神器

### <a href="/docs/devenv/vscode/settings" target="_blank">VSCode</a>

安装包：<FileItem name="官网下载" path="https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user" button icon={<FontAwesomeIcon icon={faBox} />}/>

或从国内 CDN 下载 VSCode 安装包到桌面：

```powershell
iwr "https://vscode.cdn.azure.cn$((iwr "https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user" -method head).BaseResponse.RequestMessage.RequestUri.AbsolutePath)" -o "$([Environment]::GetFolderPath("Desktop"))\install-vscode.exe"
```

### Visual Studio

<StoreButton to={mslink`XPDCFJDKLZJLP8`} text='在线安装器' />

## [字体](/docs/devenv/font)

修复“管理控制台”模糊问题：

    reg add "HKCU\Software\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers" /v C:\Windows\System32\mmc.exe /t REG_SZ /d "~ HIGHDPIAWARE" /f

## 虚拟机

VirtualBox 是自由的虚拟机

    winget install virtualbox -i

<!--
import { faStar } from '@fortawesome/free-solid-svg-icons';

<LinkButton outline href="https://www.virtualbox.org/wiki/Downloads" name="官网下载" icon={<FontAwesomeIcon icon={faStar} />}/>
-->

import { faCircleNodes } from '@fortawesome/free-solid-svg-icons';

从镜像站下载：<FileItem name="清华镜像站" path="https://mirrors.tuna.tsinghua.edu.cn/virtualbox/virtualbox-Win-latest.exe" button icon={<FontAwesomeIcon icon={faCircleNodes} />}/>
或
&nbsp;<HtmlA href="https://mirrorz.org/list/virtualbox">其他</HtmlA>

:::note 自动化管理 vbox

添加管理程序 `VBoxManage.exe` 到 PATH 中：

    shim "C:\Program Files\Oracle\VirtualBox\VBoxManage.exe"
    # require: scoop install shim

:::

<!-- <LinkButton outline href="https://mirrors.tuna.tsinghua.edu.cn/virtualbox/virtualbox-osx-latest.dmg" name="OSX 版" /> -->

:::info 商用虚拟机

系统专业版支持的 Hyper-V :

    DISM /Online /Enable-Feature /All /FeatureName:Microsoft-Hyper-V

VMware Workstation Pro :

    winget install --id=VMware.WorkstationPro  -e

:::

:::tip 建议

Linux 系统内有 libvrit-qemu-KVM 更好的[虚拟化开源方案](/docs/setup-linux/recommend/libvirt)

:::

import { LinkButton } from '@theme/unique/links';
import FileItem from '@theme/unique/FileItem'
import { faBox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DownloadButton, HtmlA, StoreButton, mslink } from '@theme/unique/links';
