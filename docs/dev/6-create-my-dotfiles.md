<iframe src="https://ghbtns.com/github-btn.html?user=littleboyharry&repo=create-my-dotfiles&type=star&count=true&size=large" frameborder="0" scrolling="0" width="180" height="32" title="GitHub" style={{float:'right'}}></iframe>

由笔者创作的综合调优的方案

涵盖 ohmyzsh 插件等其他调优的解决方案，以 zsh 安装为例

## 安装

```shell
cd ~
git clone https://github.com/LittleboyHarry/create-my-dotfiles
cd create-my-dotfiles
./deploy modules/zsh/
exec zsh
```

## 特供版安装

从 gitee 镜像克隆，内容无差异：

```shell
cd ~
git clone https://gitee.com/LittleboyHarry/create-my-dotfiles
cd create-my-dotfiles

# 特供版参数：
./deploy modules/zsh/ atmainland

exec zsh
```
