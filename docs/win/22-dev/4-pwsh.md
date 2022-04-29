---
title: PowerShell
---

import {MstoreButton} from '@theme/links';

**PowerShell 是最好的 Windows Shell !!!**

## 安装

系统内置的第 5 版已不再更新，推荐使用 PowerShell7：其图标色彩由蓝变黑）

方法一：登录商店安装，支持自动更新

<MstoreButton id="9MZ1SNWT0N5D" name="从应用商店安装" />

方法二：从 GitHub 下载

    winget install Microsoft.PowerShell

方法三：从
[清华镜像站](https://mirrors.tuna.tsinghua.edu.cn/github-release/PowerShell/PowerShell/LatestRelease/#:~:text=win%2Dx64.msi)
下载

## 配置

编辑配置文件

```powershell
mkdir ~\Documents\PowerShell
notepad $PROFILE
```

```powershell
# Emacs 模式
Set-PSReadLineOption -EditMode Emacs
# 历史预测，可按下 Ctrl + F 补全
Set-PSReadLineOption -PredictionSource History

```

### Git 集成支持

安装 `posh-git`

```powershell
Install-Module posh-git -AllowClobber
# 推荐手动或配置懒加载，避免拖慢启动时间：
echo "
if ( Test-Path -Path .git -PathType Container ) {
    Import-Module posh-git
}
" >> $profile

```

### Tab 键补全菜单

安装 `GuiCompletion` [项目](https://github.com/nightroman/PS-GuiCompletion)：

```powershell
Install-Module GuiCompletion
echo 'Install-GuiCompletion -Key Tab' >> $profile

```

### zoxide

记录切换的工作目录，<a href="/docs/dev/cli/zoxide" target="_blank" >参见</a>

## 内置的实用命令

- `r` 重复上一条命令
- `h` 历史记录（当前会话）