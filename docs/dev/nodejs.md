---
title: Node.js
---

列出可选版本号
（ nodejs 规定偶数代表稳定版，软件仓库只提供偶数版 ）

    dnf module list nodejs

Fedora 35 默认为 16 版。若要切换其他版本：

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

## 淘宝国区加速

    npm i -g mirror-config-china --registry=https://registry.npm.taobao.org

## yarn 与 pnpm

比 npm 更快速的、高效的包管理工具：[选择的理由](https://pnpm.io/zh/motivation)

在 nodejs 14.19.0 和 16.9.0 以上版本已集成，开启：

    sudo corepack enable

更新版本，参考：https://github.com/pnpm/pnpm/tags

    corepack prepare pnpm@<新版> --activate
