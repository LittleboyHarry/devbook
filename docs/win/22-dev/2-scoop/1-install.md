---
title: 安装
---

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
