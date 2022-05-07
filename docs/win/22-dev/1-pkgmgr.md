---
title: Windows 包管理器
---

## **winget**

Win 11 已内置：仅需在商店中更新可用

Win 10 安装方法：<MstoreButton id="9NBLGGH4NNS1" name="从商店获取" />
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

### Scoop 安装

依赖：`git`

官方方法：( 其过程需要畅通访问 GitHub )

```powershell
Set-ExecutionPolicy RemoteSigned -scope CurrentUser
iwr -useb get.scoop.sh | iex

```

<details>
  <summary>手动安装</summary>

通过各种途径，获取到 scoop 的源码包：

- https://github.com/ScoopInstaller/Scoop/archive/master.zip 保存名为 `scoop.zip`
- https://github.com/ScoopInstaller/Main/archive/master.zip 保存名为 `scoop-main.zip`

```powershell
$to="$env:USERPROFILE\scoop\apps\scoop\current"
mkdir -f $to
cp scoop.zip $to
$to="$env:USERPROFILE\scoop\buckets\main"
mkdir -f $to
cp scoop-main.zip $to
curl -L https://cdn.jsdelivr.net/gh/scoopinstaller/install@master/install.ps1 | sls -Pattern '$downloader.downloadFile($SCOOP_' -SimpleMatch -NotMatch > install.ps1
./install.ps1
rm install.ps1
```

</details>

### 代理下载配置

```
# 配置网络代理
scoop config proxy 127.0.0.1:<http_proxy_port>
# 升级以测试网络状态
scoop update

```

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

:::caution 重启终端后生效

:::

### 获取内容

全网包索引：https://rasa.github.io/scoop-directory/

<details>
  <summary>手动装包</summary>

首先，列出包的下载地址：

```powershell
icm {
$app = Read-Host "应用标识名"

$metadata = scoop cat $app | ConvertFrom-Json
echo ""
echo "CHECKVER:" $metadata.checkver
echo ""
echo "LINKS:" $metadata.url
}

```

手动下载好包，然后执行：

```powershell
icm {
. "$(scoop prefix scoop)\lib\core.ps1"
$null = mkdir $cachedir -f
cp (Read-Host "下载的文件路径（可拖入）") (cache_path $app $metadata.version (Read-Host "原下载链接"))
}

```

</details>

import { MstoreButton } from '@theme/links';
