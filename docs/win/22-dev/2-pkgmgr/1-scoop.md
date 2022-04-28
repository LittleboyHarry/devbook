---
title: 使用 Scoop
---

依赖：`git`

官方方法：( 其过程需要畅通访问 GitHub )

```powershell
Set-ExecutionPolicy RemoteSigned -scope CurrentUser
iwr -useb get.scoop.sh | iex

```

## 手动安装

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

## 下载代理

```
# 配置网络代理
scoop config proxy 127.0.0.1:<http_proxy_port>
# 升级以测试网络状态
scoop update

```

全网包索引：https://rasa.github.io/scoop-directory/

<details>
  <summary>手动下载并安装的方法</summary>

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

## sudo 提权指令

    scoop install sudo

### scoop 自动补全

```powershell
scoop bucket add extras
scoop install scoop-completion
echo "Import-Module '$($(Get-Item $(Get-Command scoop.ps1).Path).Directory.Parent.FullName)\modules\scoop-completion'" >> $PROFILE

```

### scoop 搜索优化

默认的搜索算法反应很慢

```powershell
scoop install scoop-search
echo "Invoke-Expression (&scoop-search --hook)" >> $PROFILE

```

:::info 重启终端后生效

:::
