---
title: Node.js
---

nodejs 偶数版号代表稳定性，我们应该选择偶数版。
请见[发行时间表](https://nodejs.org/en/about/releases/)

## 安装到 Linux

import {
PreferPkgMgr,
ForApt,
ForDnf,
ForPacman
} from '@theme/PreferPkgMgr'

 <PreferPkgMgr dnf apt pacman>
<ForDnf>

    dnf module list nodejs

Fedora 35 默认为 16 版。若要切换其它版本：

```shell
sudo dnf module enable -y nodejs:X
sudo dnf in -y nodejs
```

</ForDnf>

 <ForApt>

Debian 默认提供的 nodejs 12 版本太低，很多 npm 依赖包不支持。

在 Debian 中，推荐使用 nvm 安装 LTS 新版：

 <PreferMirror origin gitee>
<FromOrigin>

```shell
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
bash -i -c "nvm install --lts"
exec $SHELL
```

</FromOrigin>
<FromGitee>

```shell
wget -qO- https://gitee.com/mirrors/nvm/raw/v0.39.1/install.sh | bash
( source ~/.nvm/nvm.sh && nvm install --lts )
exec $SHELL
```

</FromGitee>
</PreferMirror>

</ForApt>

 <ForPacman>

LTS 16:

 <GetPkg pacman="nodejs-lts-gallium"/>

LTS 14:

 <GetPkg pacman="nodejs-lts-fermium	"/>

最新版：

 <GetPkg pacman="nodejs"/>

</ForPacman>

</PreferPkgMgr>

<br/>

## 安装到 Windows

```bat
scoop bucket add versions
scoop search nodejs
scoop install nodejs*
```

## yarn 与 pnpm

比 npm 更快速的、高效的包管理工具

在 nodejs 14.19.0 和 16.9.0 以上版本已集成，开启：

    corepack enable

 <details className="let-details-to-gray">
<summary>其它版本</summary>

参考：https://github.com/pnpm/pnpm/tags

    corepack prepare pnpm@<新版> --activate

</details>

yarn for Windows:

```powershell
$newpath = [Environment]::GetEnvironmentVariable("PATH", "User") + ";$(yarn global bin)"
[Environment]::SetEnvironmentVariable("PATH", $newpath, "User")

```

- [PNPM 介绍](https://pnpm.io/zh/motivation)

## 国区加速

`.npmrc` :

    https://cdn.jsdelivr.net/gh/littleboyharry-contrib/hooks@master/example/taro/.npmrc

import {
PreferMirror,
FromOrigin,
FromGitee,
} from '@theme/PreferMirror'

import GetPkg from '@theme/GetPkg';
