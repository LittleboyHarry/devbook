---
title: PowerShell 7
---

> PowerShell 是最好的 Windows Shell !!!

系统内置的第 5 版已不再更新，需要额外安装新版：（其图标色彩由蓝变黑）

:::info 安装方式

自动安装：（需要商店已登录，可自动升级）

    ms-windows-store://pdp?productId=9MZ1SNWT0N5D&mode=mini

命令行安装：从 GitHub 下载

    winget install Microsoft.PowerShell

手动安装：

[清华镜像包](https://mirrors.tuna.tsinghua.edu.cn/github-release/PowerShell/PowerShell/LatestRelease/#:~:text=win%2Dx64.msi)

:::

确保 Windows Terminal 为最新版，然后在其里设置默认终端

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

历史记录：

`r` 重做

`h` 会话输入的历史命令
