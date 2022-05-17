<iframe src="https://ghbtns.com/github-btn.html?user=littleboyharry&repo=deploy-my-dotfiles&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="180" height="32" title="GitHub" style={{float:'right'}}></iframe>

由笔者创作的综合调优的方案，涵盖 ohmyzsh 插件等其它调优的解决方案

依赖包：

import {
PreferPkgMgr,
ForApt,
ForDnf,
} from '@theme/PreferPkgMgr'

 <PreferPkgMgr dnf apt defaultValue='apt' >
<ForApt>

    sudo apt install -y git python-is-python3

x 剪贴板相关支持依赖：

```bash
sudo apt install -y xclip
if dpkg -l libwayland-client0 &> /dev/null; then
  sudo apt install -y wl-clipboard
fi
```

</ForApt>
<ForDnf>

    sudo dnf install -y git

x 剪贴板相关支持依赖：

```bash
sudo dnf install -y xclip
sudo dnf install -y wl-clipboard
```

</ForDnf>
</PreferPkgMgr>

## 安装

```shell
cd ~
git clone https://github.com/LittleboyHarry/deploy-my-dotfiles

```

:::note 国服安装渠道

从 gitee 镜像克隆，内容无差异：

```shell
cd ~
git clone https://gitee.com/LittleboyHarry/deploy-my-dotfiles
```

:::

## 使用 Zsh 模块

模块部署：

```
cd ~/deploy-my-dotfiles
./deploy modules/zsh/
exec zsh
```

:::note 国服部署渠道

```shell
cd ~/deploy-my-dotfiles
./deploy modules/zsh/ atmainland
exec zsh
```

:::

<br/>

推荐使用 steeef 主题

    echo 'source ~/.deploy-my-dotfiles/zsh-plugins/ohmyzsh/themes/steeef.zsh-theme' >> ~/.zshrc
    exec zsh

 <details className="let-details-to-gray" role="alert">
<summary>常用命令行缩写表</summary>

ohmyzsh 社区提供，仅作[参考](https://gitee.com/mirrors/ohmyzsh/blob/master/plugins/common-aliases/README.md)

    echo 'source ~/.deploy-my-dotfiles/zsh-plugins/ohmyzsh/plugins/common-aliases/common-aliases.plugin.zsh' >> ~/.zshrc
    exec zsh

</details>

 <details className="let-details-to-gray" role="alert">
<summary>powerlevel10k 主题</summary>

安装：依赖 Nerd Font 字体，[参见](./font#cascadiacode-nerdfont)

```shell
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k
# 国内:
# git clone --depth=1 https://gitee.com/romkatv/powerlevel10k.git ~/powerlevel10k

echo 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >>~/.zshrc
# 开始配置
exec zsh
```

选调：隐藏系统图标

    sed -i "/# os identifier/ s/^/#&/" ~/.p10k.zsh
    exec zsh

缺点：
调整窗口大小会造成排版错乱

[解决方法](https://github.com/romkatv/powerlevel10k/blob/master/README.md#the-anatomy-of-the-problem):
是禁止自动重排版 （ 部分终端支持，如 Konsole ）

<!-- todo: ys or zsh 重编译
https://www.zsh.org/mla/workers//2019/msg00561.html
-->

</details>

## ohmyzsh 插件说明页

<div style={{float:'left',marginRight:'2rem'}}>

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
<div style={{float:'left',marginRight:'2rem'}}>

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
<div style={{float:'left',marginRight:'2  rem'}}>

操作系统类：

- [archlinux](https://gitee.com/mirrors/oh-my-zsh/tree/master/plugins/archlinux)
- [debian](https://gitee.com/mirrors/oh-my-zsh/tree/master/plugins/debian)
- [RHEL](https://gitee.com/mirrors/oh-my-zsh/tree/master/plugins/dnf)

开发专用：

- [shell-proxy](https://gitee.com/mirrors/oh-my-zsh/tree/master/plugins/shell-proxy)
- [yarn](https://gitee.com/mirrors/oh-my-zsh/tree/master/plugins/yarn)
- [nvm](https://gitee.com/mirrors/oh-my-zsh/tree/master/plugins/nvm)

</div>
