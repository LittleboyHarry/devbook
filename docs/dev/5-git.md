---
title: Git
---

## 录入个人提交信息

```shell
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

## 配置 SSH 密钥

```
ssh-keygen -t ed25519
cat ~/.ssh/id_ed25519.pub
```

复制，然后登陆上传该公钥：

- https://github.com/settings/ssh/new
- https://gitee.com/profile/sshkeys

## 网络问题

> fatal: unable to access 'https://github.com/.....': OpenSSL SSL_connect: SSL_ERROR_SYSCALL in connection to gist.github.com:443

    git config --global http.proxy 127.0.0.1:<port>

Windows:

    ipconfig /flushdns

## 调优

更改默认主分支名

    git config --global init.defaultBranch main

合并变基时自动暂存当前修改：[问题来源](https://stackoverflow.com/questions/30208928/can-git-pull-automatically-stash-and-pop-pending-changes)

```
git config --global rebase.autostash true
git config --global merge.autostash true

```

## GitHub

ssh 协议登陆测试

    ssh -T git@github.com

<details>
  <summary>指纹校验</summary>

信息来源：https://docs.github.com/cn/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints

RSA

    SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8

ECDSA

    SHA256:p2QAMXNIC1TJYWeIOttrVc98/R1BUFWu3/LiyKgUfQM

Ed25519

    SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU

</details>

浏览器推送通知[扩展](https://chrome.google.com/webstore/detail/notifier-for-github/lmjdlojahmbbcodnpecnjnmlddbkjhnn)
