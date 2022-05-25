---
title: 添加 homebrew
---

安装：

    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

使用阿里云镜像：

```bash
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles' | tee -a ~/.bash_profile ~/.zshrc
exec $SHELL
```

```bash
export HOMEBREW_BREW_GIT_REMOTE="https://mirrors.aliyun.com/homebrew/brew.git"
export HOMEBREW_CORE_GIT_REMOTE="https://mirrors.aliyun.com/homebrew/homebrew-core.git"

/bin/bash -c "$(curl -fsSL https://gitcode.net/mirrors/Homebrew/install/-/raw/master/install.sh)"
```

安装后请留意 `==> Installation successful!` 下方的提示信息
