---
title: Git
---

 <details>
  <summary>指令速查表</summary>

推荐插件 [ohmyzsh-git](https://gitee.com/mirrors/oh-my-zsh/blob/master/plugins/git/README.md)

```shell
# 分支重定向
git branch -f <branch> <to>
```

</details>

## 录入个人提交信息

使用 Git Bash 执行：

```shell
read -p "Enter your git name: " git_name
git config --global user.name "$git_name"
read -p "Enter your git email: " git_email
git config --global user.email "$git_email"
```

## 配置 SSH 密钥

```
ssh-keygen -t ed25519
copyfile ~/.ssh/id_ed25519.pub
```

复制，然后登陆上传该公钥：

- https://github.com/settings/ssh/new
- https://gitee.com/profile/sshkeys

## 网络问题

> fatal: unable to access 'https://github.com/.....': OpenSSL SSL_connect: SSL_ERROR_SYSCALL in connection to gist.github.com:443

    git config --global http.proxy 127.0.0.1:<port>

Windows:

    ipconfig /flushdns

### 代理 SSH 协议

    code %homepath%/.ssh/config

输入内容并保存：

```
Host github.com
    ProxyCommand connect -S 127.0.0.1:1089 %h %p
```

-S 代表 socks 代理，-H 代表 http 代理，后附地址端口

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

:::tip 使浏览器接受推送通知

<https://chrome.google.com/webstore/detail/notifier-for-github/lmjdlojahmbbcodnpecnjnmlddbkjhnn>


:::

## 调优

更改默认主分支名

    git config --global init.defaultBranch main

合并变基时自动暂存当前修改：[问题来源](https://stackoverflow.com/questions/30208928/can-git-pull-automatically-stash-and-pop-pending-changes)

```
git config --global rebase.autostash true
git config --global merge.autostash true

```
