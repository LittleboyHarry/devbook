---
title: PowerShell
sidebar_position: 2
---

import {MstoreButton} from '@theme/links';

**PowerShell 是最好的 Windows Shell !!!**

## 安装

系统内置的第 5 版已不再更新，推荐使用 PowerShell7：其图标色彩由蓝变黑）

<p>
<MstoreButton id="9MZ1SNWT0N5D" name="从应用商店安装" />
&nbsp; ← 支持自动更新
</p>

 <details className="let-details-to-gray" role="alert">
<summary>其他渠道</summary>

渠道二：从 GitHub 下载

    winget install Microsoft.PowerShell

渠道三：<LinkButton outline href="https://mirrors.tuna.tsinghua.edu.cn/github-release/PowerShell/PowerShell/LatestRelease/#:~:text=win%2Dx64.msi" name="清华镜像站" />

</details>

:::caution 允许执行本地脚本，管理员权限运行：

    Set-ExecutionPolicy RemoteSigned

:::

## 基本配置

`$PROFILE` 推荐配置：

```powershell
mkdir -p ~\Documents\PowerShell

# Github
iwr -useb https://raw.githubusercontent.com/littleboyharry/deployworkenv/main/win/profile.ps1 >> $PROFILE
# GitCode
iwr -useb https://gitcode.net/lbh/deployworkenv/-/raw/main/win/profile.ps1 >> $PROFILE
```

## psutils

为开发者强烈推荐的[开源工具集](https://github.com/lukesampson/psutils)

<GetPkg name="psutils" choco scoop />

介绍：

- 由 scoop 包管理器作者 lukesampson 出品
- `sudo` - **仿 Unix 实现的 sudo 命令**
- `ln` - 仿 Unix 实现，创建链接
- `touch` - 仿 Unix 实现，创建文件
- `shasum` - 仿 Unix 实现
- `gitignore` - 从 gitignore.io 获取 .gitignore 文件模板，标准输出
- `say` - 仿 MacOS 实现的文本转语音指令

<!--
- `runat` - 微软已经废弃并在 Windows 2012 中删除的 at 命令的替代品
- `time` - Unix 时间命令的近似值
- `vimtutor` - Vim for Windows 附带的 vimtutor 不能与 Scoop 一起使用。这个可以
-->

## PSGallery 社区项目

:::info 信任社区代码源

激活 PSGallery:

    Set-PSRepository -Name 'PSGallery' -InstallationPolicy Trusted

:::

Git 支持，请安装 `posh-git`

```powershell
Install-Module posh-git -AllowClobber
# 推荐手动或配置懒加载，避免拖慢启动时间：
echo "
if ( Test-Path -Path .git -PathType Container ) {
    Import-Module posh-git
}

" >> $PROFILE

```

<details className="let-details-to-gray">
    <summary>增强的补全菜单</summary>

来自社区[开源项目 `GuiCompletion`](https://github.com/nightroman/PS-GuiCompletion),
增强 Tab 键弹出菜单

```powershell
Install-Module GuiCompletion
echo 'Install-GuiCompletion -Key Tab' >> $PROFILE

```

</details>

 <details className="let-details-to-gray">
<summary>zoxide</summary>

记录切换的工作目录，<a href="/docs/devenv/modern-cli/zoxide" target="_blank" >参见</a>

</details>

import GetPkg from '@theme/GetPkg';
import { LinkButton } from '@theme/links';
