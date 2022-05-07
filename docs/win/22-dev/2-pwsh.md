---
title: PowerShell
---

import {MstoreButton} from '@theme/links';

**PowerShell 是最好的 Windows Shell !!!**

## 安装

系统内置的第 5 版已不再更新，推荐使用 PowerShell7：其图标色彩由蓝变黑）

<MstoreButton id="9MZ1SNWT0N5D" name="从应用商店安装" />&lt; 支持自动更新

 <details className="let-details-to-gray" role="alert">
<summary>其他渠道</summary>

渠道二：从 GitHub 下载

    winget install Microsoft.PowerShell

渠道三：<LinkButton outline href="https://mirrors.tuna.tsinghua.edu.cn/github-release/PowerShell/PowerShell/LatestRelease/#:~:text=win%2Dx64.msi" name="清华镜像站" />

</details>

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

记录切换的工作目录，<a href="/docs/dev/modern-cli/zoxide" target="_blank" >参见</a>

## psutil

<GetPkg name="psutils" choco scoop />

import GetPkg from '@theme/GetPkg';
import { LinkButton } from '@theme/links';
