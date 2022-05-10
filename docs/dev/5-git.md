---
title: Git
---

:::info 指令速查表

来源：[ohmyzsh-git 插件](https://gitee.com/mirrors/oh-my-zsh/blob/master/plugins/git/README.md) 相关别名

:::

## 调优

更改默认主分支名

    git config --global init.defaultBranch main

合并变基时自动暂存当前修改：[问题来源](https://stackoverflow.com/questions/30208928/can-git-pull-automatically-stash-and-pop-pending-changes)

```
git config --global rebase.autostash true
git config --global merge.autostash true

```

## 录入个人提交信息

使用 Git **Bash** 执行：

```bash
echo &&
read -p "Enter your git name: " git_name &&
git config --global user.name "$git_name" &&
read -p "Enter your git email: " git_email &&
git config --global user.email "$git_email"
```

## 配置 SSH 密钥

```shell
ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519
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

### 代理 SSH 协议

    code %homepath%/.ssh/config

输入内容并保存：

```
Host github.com
    ProxyCommand connect -S 127.0.0.1:1089 %h %p
```

-S 代表 socks 代理，-H 代表 http 代理，后附地址端口

## 登录测试

<details>
  <summary>GitHub</summary>

    ssh -T git@github.com

指纹校验:
( [数据来源](https://docs.github.com/cn/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints) )

RSA

    SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8

ECDSA

    SHA256:p2QAMXNIC1TJYWeIOttrVc98/R1BUFWu3/LiyKgUfQM

Ed25519

    SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU

</details>

<details>
  <summary>Gitee</summary>

    ssh -T git@gitee.com

Ed25519

    SHA256:+ULzij2u99B9eWYFTw1Q4ErYG/aepHLbu96PAUCoV88

</details>

:::tip [浏览器扩展](https://chrome.google.com/webstore/detail/notifier-for-github/lmjdlojahmbbcodnpecnjnmlddbkjhnn)

使浏览器接受 GitHub 推送通知。
( [firefox 版](https://addons.mozilla.org/zh-CN/firefox/addon/notifier-for-github) )

:::
