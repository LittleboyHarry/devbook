---
sidebar_position: 0
---

# 摩登命令行

import Indexer from './indexer';

这里收集了一些改善或创新的命令行工具：

<Indexer />

 <div className={'no-admonition-uppercase-title '+st.root}>

## 代码处理

 <div className='alert alert--info'>

### bat

改进的 less 替代品，用于更好地阅读代码

</div>

<GetPkg name='bat' dnf scoop='bat less' pacman/>

:::note 用 apt 安装：

    sudo apt install -y bat
    echo alias bat=batcat | tee -a ~/.bashrc ~/.zshrc > /dev/null

:::

 <div className='alert alert--info'>

### delta

适合命令行界面下的文件对比工具，比 diff 美观更多

</div>

<GetPkg name='git-delta' dnf pacman choco='delta' scoop='delta' />

:::note Git 集成：

```shell
git config --global pager.show delta
git config --global pager.log delta
git config --global pager.reflog delta
git config --global interactive.difffilter "delta --color-only"

# 选调，可能会影响 `git diff` 输出格式：
# git config --global pager.diff delta
```

:::

## 搜索与查找

 <div className='alert alert--info'>

### fzf

</div>

<GetPkg name="fzf" dnf apt scoop pacman/>

:::note Shell 集成

启用以下快捷键：

- `Ctrl + R` 历史搜索（支持模糊搜索）
- `Alt + C` 切换当前工作目录
- `Ctrl + T` 搜索文件，复制其路径

<PreferPkgMgr dnf apt pacman>
<ForDnf>

```bash
printf "source /usr/share/fzf/shell/key-bindings.bash\n" >> ~/.bashrc
printf "source /usr/share/fzf/shell/key-bindings.zsh\n" >> ~/.zshrc
exec $SHELL
```

</ForDnf>
<ForApt>

```bash
printf "source /usr/share/doc/fzf/examples/key-bindings.bash\n" >> ~/.bashrc
printf "source /usr/share/doc/fzf/examples/key-bindings.zsh\n" >> ~/.zshrc
exec $SHELL
```

</ForApt>
<ForPacman>

```bash
printf "source /usr/share/fzf/key-bindings.bash\n" >> ~/.bashrc
printf "source /usr/share/fzf/key-bindings.zsh\n" >> ~/.zshrc
exec $SHELL
```

</ForPacman>

</PreferPkgMgr>

:::

 <div className='alert alert--info'>

### fd

文件查找器

</div>

<GetPkg name='fd' dnf='fd-find' scoop pacman />

:::note 用 apt 安装：

```bash
sudo apt install -y fd-find
# 如不修改，默认程序名是 fdfind
echo alias fd=fdfind | tee -a ~/.bashrc ~/.zshrc > /dev/null
exec $SHELL
```

:::

 <div className='alert alert--info'>

### ripgrep

</div>

<GetPkg name="ripgrep" dnf apt scoop pacman/>

## 辅助工具

 <div className='alert alert--info'>

### tldr

</div>

<GetPkg name="tldr" dnf pacman yarn />

国内缓存

    git clone https://gitclone.com/github.com/tldr-pages/tldr ~/.cache/tldr

 <div className='alert alert--info'>

### pipx

隔离化安装 Python 命令行工具

</div>

> <br/>需要 Python >= 3.7

<GetPkg name="pipx" dnf apt pacman="python-pipx" />

<div className="no-admonition-uppercase-title">

:::note 从 PyPI 镜像源获取

一次性参数：

    -i https://mirrors.cloud.tencent.com/pypi/simple

全局设置：

    pip config set global.index-url https://mirrors.cloud.tencent.com/pypi/simple

:::

</div>

用 pip 安装：

```shell
python3 -m pip install --user pipx
python3 -m pipx ensurepath

```

自动补全指引：

```shell
echo 'eval "$(register-python-argcomplete pipx)"' >> ~/.zshrc

# 其他 UNIX 环境：
# pipx completions | less
```

</div>

import st from './index.module.scss'
import {
PreferPkgMgr,
ForApt,
ForDnf,
ForPacman
} from '@theme/unique/PreferPkgMgr'
import GetPkg from '@theme/unique/GetPkg';
