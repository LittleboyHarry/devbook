---
sidebar_position: 1
---

# Windows 包管理器

## **winget**

Win 11 已内置：仅需在商店中更新可用

Win 10 安装方法：<StoreButton to={mslink`9NBLGGH4NNS1`} text='从商店获取' />
or&nbsp;<a href="https://github.com/microsoft/winget-cli/releases/latest#:~:text=.msixbundle">从 Github 获取</a>

## **Chocolatey**

安装：以管理员权限运行

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# 信任所有安装程序的脚本
choco feature enable -n allowGlobalConfirmation
```

包搜索：https://community.chocolatey.org/packages

## **Scoop**

### 安装

前置依赖 `git`，从官方渠道：

```powershell
Set-ExecutionPolicy RemoteSigned -scope CurrentUser
iwr -useb get.scoop.sh | iex

```

**从国内渠道获取见[下文](#国服版)**

### 自动补全支持

```powershell
scoop bucket add extras
scoop install scoop-completion
echo "Import-Module '$($(Get-Item $(Get-Command scoop.ps1).Path).Directory.Parent.FullName)\modules\scoop-completion'" >> $PROFILE

```

### 搜索优化

加快 `scoop search` 查询速度

```powershell
scoop install scoop-search
echo "Invoke-Expression (&scoop-search --hook)" >> $PROFILE

```

:::note 重启终端以生效，或：

    . $profile

:::

### 获取内容

全网包索引：https://rasa.github.io/scoop-directory/

 <details className="rawstyl">
<summary>手动装包</summary>

```powershell
& {
$app = Read-Host '请输入应用标识名'
$metadata = scoop cat $app | ConvertFrom-Json
$version = $metadata.version
Write-Output ''
Write-Output '自行下载的相关链接：'
(scoop cat $app) -split '\n' |
Where-Object { $_ -match 'http' -and -not ($_ -match '\$version') } |
ForEach-Object { $_.trim() -split '"' | Where-Object { $_ -match '://' } }
Write-Output ''

if ($null -eq $version) { $version = Read-Host '请输入版本号' }
if ($null -eq $target) { $target = Read-Host '（可拖入文件）请输入下载文件的路径' }
if ($null -eq $url) { $url = Read-Host '请输入原下载链接' }
. "$(scoop prefix scoop)\lib\core.ps1"
$null = mkdir $cachedir -f
Copy-Item $target (cache_path $app $version $url)
}

```

</details>

### 国服版

<p><a href="https://gitcode.net">gitcode.net</a> 提供国内镜像服务。</p>

安装方法：

```powershell
Set-ExecutionPolicy RemoteSigned -scope CurrentUser

$scoopdir="$env:USERPROFILE\scoop\apps\scoop\current"
mkdir -f $scoopdir | Out-Null
iwr -useb https://gitcode.net/mirrors/ScoopInstaller/Scoop/-/archive/master/Scoop-master.zip -o "$scoopdir\scoop.zip"

$maindir="$env:USERPROFILE\scoop\buckets\main"
mkdir -f $maindir | Out-Null
iwr -useb https://gitcode.net/mirrors/ScoopInstaller/Main/-/archive/master/Main-master.zip -o "$maindir\scoop-main.zip"

(iwr -useb https://gitcode.net/mirrors/ScoopInstaller/Install/-/raw/master/install.ps1).Content -creplace '\s*\$downloader\.downloadFile\(\$SCOOP_.+','' | iex

```

若要使用原版 github 上游仓库源，请<a href="/docs/devenv/git#网络问题" target="_blank">设置 git 代理</a>

否则使用国内镜像仓库源：( 只镜像元数据、加快升级和检索速度，不含二进制文件镜像 )

```shell
scoop bucket rm main
scoop bucket add main https://gitclone.com/github.com/ScoopInstaller/Main

# 其它 scoop 官方镜像源：
scoop bucket add versions https://gitclone.com/github.com/ScoopInstaller/Versions
scoop bucket add java https://gitclone.com/github.com/ScoopInstaller/Java
scoop bucket add extras https://gitclone.com/github.com/ScoopInstaller/Extras

```

import { StoreButton, mslink } from '@theme/links';
