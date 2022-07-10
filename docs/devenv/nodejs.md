---
sidebar_position: 512
---

# Node.js

nodejs 偶数版号代表稳定性，我们应该选择偶数版。
请见[发行时间表](https://nodejs.org/en/about/releases/)

## 安装到 Linux

import {
PreferPkgMgr,
ForApt,
ForDnf,
ForPacman
} from '@theme/unique/PreferPkgMgr'

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

 <PreferNetShore>
<OffshoreNet>

```shell
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
( source ~/.nvm/nvm.sh && nvm install --lts )
exec $SHELL
```

</OffshoreNet>
<InshoreNet>

```shell
cn/nvm
( source ~/.nvm/nvm.sh && nvm install --lts )
exec $SHELL
```

</InshoreNet>
</PreferNetShore>

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

```powershell
scoop bucket add versions
scoop search nodejs
```

    scoop install nodejs?

## npmmirror 中国镜像站

    wget -qO- https://cdn.jsdelivr.net/gh/littleboyharry-contrib/hooks@master/example/taro/.npmrc >> ~/.npmrc

一次性参数：

    --registry=https://registry.npmmirror.com

## 使用 yarn

比 npm 更好的包管理工具

<GetPkg name="yarn" pacman choco scoop />

或者使用 npm 全局安装：

    sudo npm install --global yarn

手动 Windows 安装配置:

```powershell
$newpath = [Environment]::GetEnvironmentVariable("PATH", "User") + ";$(yarn global bin)"
[Environment]::SetEnvironmentVariable("PATH", $newpath, "User")

```

## 使用 [PNPM](https://pnpm.io/zh/motivation)

比 npm 更好的包管理工具

    sudo npm install -g pnpm

import {
    PreferNetShore,
    OffshoreNet,
    InshoreNet,
} from '@theme/unique/PreferNetShore'

import GetPkg from '@theme/unique/GetPkg';
