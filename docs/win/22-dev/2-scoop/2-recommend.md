---
title: 推荐必装
---

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
