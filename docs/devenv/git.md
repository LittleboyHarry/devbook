---
sidebar_position: 8
---

# Git

:::note 推荐的指令缩写表

来自于 [ohmyzsh-git 插件](https://gitee.com/mirrors/oh-my-zsh/blob/master/plugins/git/README.md)

:::

import Require from '/docs/\_deployworkenv.md'

<Require />

## 调优

    git/optimze

## 录入个人提交信息

    git/newuser

## 配置 SSH 密钥

    git/newkey

复制公钥信息，随后上传：

- https://github.com/settings/ssh/new
- https://gitee.com/profile/sshkeys

## 网络问题

> fatal: unable to access 'https://github.com/.....': OpenSSL SSL_connect: SSL_ERROR_SYSCALL in connection to gist.github.com:443

    git config --global http.proxy 127.0.0.1:<port>

Windows:

    ipconfig /flushdns

### 代理 SSH 协议

    nano -m ~/.ssh/config

输入内容并保存：

```
Host github.com
    ProxyCommand connect -S 127.0.0.1:1089 %h %p
```

-S 代表 socks 代理，-H 代表 http 代理，后附地址端口

## 登录测试

<div className="no-admonition-uppercase-title">

:::info GitHub

    ssh -T git@github.com

[官方认证](https://docs.github.com/cn/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints)：

```
RSA
SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8

ECDSA
SHA256:p2QAMXNIC1TJYWeIOttrVc98/R1BUFWu3/LiyKgUfQM

Ed25519
SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU
```

:::

:::info Gitee

    ssh -T git@gitee.com

```
Ed25519
SHA256:+ULzij2u99B9eWYFTw1Q4ErYG/aepHLbu96PAUCoV88
```

:::

</div>

:::tip [浏览器扩展](https://chrome.google.com/webstore/detail/notifier-for-github/lmjdlojahmbbcodnpecnjnmlddbkjhnn)

使浏览器接受 GitHub 推送通知。
( [firefox 版](https://addons.mozilla.org/zh-CN/firefox/addon/notifier-for-github) )

:::
