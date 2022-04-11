<iframe src="https://ghbtns.com/github-btn.html?user=littleboyharry&repo=deploy-my-dotfiles&type=star&count=true&size=large" frameborder="0" scrolling="0" width="180" height="32" title="GitHub" style={{float:'right'}}></iframe>

由笔者创作的综合调优的方案，涵盖 ohmyzsh 插件等其它调优的解决方案

依赖包：

import {
  PreferPkgMgrScope,
  PkgMgrSelector,
  ForApt,
  ForDnf,
} from '@theme/PreferPkgMgr'

 <PreferPkgMgrScope dnf apt>
<PkgMgrSelector />
<ForApt>

```shell
sudo apt install -y git python-is-python3

# 粘贴板：x11 or wayland
sudo apt install -y xclip
sudo apt install -y wl-clipboard
```

</ForApt>
<ForDnf>

```shell
sudo dnf install -y git

# 粘贴板：x11 or wayland
sudo dnf install -y xclip
sudo dnf install -y wl-clipboard
```

</ForDnf>
</PreferPkgMgrScope>

## 安装

```shell
cd ~
git clone https://github.com/LittleboyHarry/deploy-my-dotfiles
cd deploy-my-dotfiles
```

安装 zsh 模块：

```
./deploy modules/zsh/
exec zsh
```

## 特供版安装

从 gitee 镜像克隆，内容无差异：

```shell
cd ~
git clone https://gitee.com/LittleboyHarry/deploy-my-dotfiles
cd deploy-my-dotfiles

# 特供版参数：
./deploy modules/zsh/ atmainland

exec zsh
```

## 样式

目前个人偏好主题：ys ，基于 deploy-my-dotfiles 写入 `~/.zshrc` 的配置：

```zsh
source ~/.deploy-my-dotfiles/zsh-plugins/ohmyzsh/lib/git.zsh
source ~/.deploy-my-dotfiles/zsh-plugins/ohmyzsh/lib/prompt_info_functions.zsh
source ~/.deploy-my-dotfiles/zsh-plugins/ohmyzsh/lib/theme-and-appearance.zsh
source ~/.deploy-my-dotfiles/zsh-plugins/ohmyzsh/themes/ys.zsh-theme
```

<div className="alert alert--secondary" role="alert">

其他推荐：powerlevel10k

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
调整窗口大小会造成排版错乱，
[官方解决方法](https://github.com/romkatv/powerlevel10k/blob/master/README.md#the-anatomy-of-the-problem)
是禁止自动重排版 （ 部分终端支持，如 Konsole ）

<!-- todo: ys or zsh 重编译
https://www.zsh.org/mla/workers//2019/msg00561.html
-->

</div>
