<iframe src="https://ghbtns.com/github-btn.html?user=littleboyharry&repo=create-my-dotfiles&type=star&count=true&size=large" frameborder="0" scrolling="0" width="180" height="32" title="GitHub" style={{float:'right'}}></iframe>

由笔者创作的综合调优的方案，涵盖 ohmyzsh 插件等其他调优的解决方案

依赖：`git` `python3`

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

## 主题

推荐：powerlevel10k

:::info BUG: 调整窗口大小造成排版错乱

[官方解决方法](https://github.com/romkatv/powerlevel10k/blob/master/README.md#the-anatomy-of-the-problem)：
禁止自动重排版

Konsole 选项在 “编辑配置方案”>“滚动” 内。

<details>
    <summary>其他主题推荐：ohmyzsh 的 steeef</summary>

依赖 `deploy-my-dotfiles` 的 `~/.zshrc` 配置：

    source ~/.deploy-my-dotfiles/zsh-plugins/ohmyzsh/lib/git.zsh
    source ~/.deploy-my-dotfiles/zsh-plugins/ohmyzsh/themes/steeef.zsh-theme

</details>

<!-- todo: ys or zsh 重编译
https://www.zsh.org/mla/workers//2019/msg00561.html
-->

:::

需要先安装好 Nerd Font 字体，[参见](./font#cascadiacode-nerdfont)

安装：

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
