---
title: Scoop
---

开启全局代理，安装：

```powershell
Set-ExecutionPolicy RemoteSigned -scope CurrentUser
iwr -useb get.scoop.sh | iex

```

## 指定代理端口

```
# 配置网络代理
scoop config proxy 127.0.0.1:<http_proxy_port>
# 升级以测试网络状态
scoop update

```

## 推荐安装

### sudo 提权器

    scoop install sudo

### 搜索优化

默认的搜索算法反应很慢

    scoop install scoop-search

    echo "Invoke-Expression (&scoop-search --hook)" >> $PROFILE

全网包索引：https://rasa.github.io/scoop-directory/

### 自动补全

    scoop bucket add extras
    scoop install scoop-completion
    echo "Import-Module '$($(Get-Item $(Get-Command scoop.ps1).Path).Directory.Parent.FullName)\modules\scoop-completion'" >> $PROFILE
