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
