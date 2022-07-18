---
sidebar_position: 6
---

# Oh My Zsh

import {
    PreferNetShore,
    OffshoreNet,
    InshoreNet,
} from '@theme/unique/PreferNetShore'

由作者编写的[自动安装脚本](https://github.com/LittleboyHarry/setup-omz)

<PreferNetShore>

  <OffshoreNet>

```shell
git clone https://github.com/LittleboyHarry/setup-omz
cd setup-omz

./go
```

  </OffshoreNet>
  <InshoreNet>

```shell
git clone https://gitcode.net/lbh/izsh setup-omz
cd setup-omz

./go-c
```

  </InshoreNet>

</PreferNetShore>

其他事项：

- 更改 GNOME/KDE 终端默认命令为 `/bin/zsh`，
  并选择自己喜欢的背景透明度、主题色调

-     echo "set-option -g default-shell /bin/zsh" >> ~/.tmux.conf

## 推荐的 ohmyzsh 说明

import st from './ohmyzsh.module.scss';

必知：

- https://github.com/ohmyzsh/wiki/blob/main/Cheatsheet.md

插件：

<div className={st.col}>

别名管理：

- [aliases](https://gitee.com/mirrors/oh-my-zsh/tree/master/plugins/aliases)
- [alias-finder](https://gitee.com/mirrors/oh-my-zsh/tree/master/plugins/alias-finder)

功能增强类，含 alias：

- [sudo](https://gitee.com/mirrors/oh-my-zsh/tree/master/plugins/sudo)
- [history](https://gitee.com/mirrors/oh-my-zsh/tree/master/plugins/history)
- [systemd](https://gitee.com/mirrors/oh-my-zsh/tree/master/plugins/systemd)
- [git](https://gitee.com/mirrors/oh-my-zsh/tree/master/plugins/git)
- [rsync](https://gitee.com/mirrors/oh-my-zsh/tree/master/plugins/rsync)

</div>
<div className={st.col}>

剪贴板：

- [copybuffer](https://gitee.com/mirrors/oh-my-zsh/tree/master/plugins/copybuffer)
- [copypath](https://gitee.com/mirrors/oh-my-zsh/tree/master/plugins/copypath)
- [copyfile](https://gitee.com/mirrors/oh-my-zsh/tree/master/plugins/copyfile)

实用功能：

- [extract](https://gitee.com/mirrors/oh-my-zsh/tree/master/plugins/extract)
  &nbsp; `x` 一键解压
- [z](https://gitee.com/mirrors/oh-my-zsh/tree/master/plugins/z)
  &nbsp; `z` 一键跳转
- [dirhistory](https://gitee.com/mirrors/oh-my-zsh/tree/master/plugins/dirhistory)
  &nbsp; `Alt` 键切换目录
- [shell-proxy](https://gitee.com/mirrors/oh-my-zsh/tree/master/plugins/shell-proxy)
- [.gitignore](https://gitee.com/mirrors/oh-my-zsh/tree/master/plugins/gitignore) 模板

</div>
<div className={st.col}>

操作系统类：

- [archlinux](https://gitee.com/mirrors/oh-my-zsh/tree/master/plugins/archlinux)
- [debian](https://gitee.com/mirrors/oh-my-zsh/tree/master/plugins/debian)
- [ubuntu](https://gitee.com/mirrors/oh-my-zsh/tree/master/plugins/ubuntu)
- [RHEL](https://gitee.com/mirrors/oh-my-zsh/tree/master/plugins/dnf)

开发专用：

- [shell-proxy](https://gitee.com/mirrors/oh-my-zsh/tree/master/plugins/shell-proxy)
- [yarn](https://gitee.com/mirrors/oh-my-zsh/tree/master/plugins/yarn)
- [nvm](https://gitee.com/mirrors/oh-my-zsh/tree/master/plugins/nvm)

</div>
