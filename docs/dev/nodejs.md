---
title: Node.js
---

列出可选版本号
（ nodejs 规定偶数代表稳定版，软件仓库只提供偶数版 ）

    dnf module list nodejs

Fedora 35 默认为 16 版。若要切换其它版本：

```shell
sudo dnf module enable -y nodejs:X
sudo dnf in -y nodejs
```

Windows:

```bat
scoop bucket add versions
scoop search nodejs
scoop install nodejs*
```

## 在 Debian 安装

Debian 默认提供的 nodejs 12 版本太低，很多 npm 依赖包不支持。使用 nvm 安装 lts 新版：

```shell
curl -o- https://cdn.jsdelivr.net/gh/nvm-sh/nvm@v0.39.1/install.sh | bash
$SHELL -i -c "nvm install --lts"
```

## 国区加速

`.npmrc` :

    https://cdn.jsdelivr.net/gh/littleboyharry-contrib/hooks@master/example/taro/.npmrc

## yarn 与 pnpm

比 npm 更快速的、高效的包管理工具

在 nodejs 14.19.0 和 16.9.0 以上版本已集成，开启：

    corepack enable

<details className="let-details-to-gray">
    <summary>其它版本</summary>

参考：https://github.com/pnpm/pnpm/tags

    corepack prepare pnpm@<新版> --activate

</details>

- [PNPM 介绍](https://pnpm.io/zh/motivation)
