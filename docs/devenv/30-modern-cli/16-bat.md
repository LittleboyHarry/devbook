---
title: 代码彩显 bat
---

安装

import GetPkg from '@theme/GetPkg';

<GetPkg name="bat" dnf scoop pacman/>

## Debian 安装

    sudo apt install -y bat
    echo alias bat=batcat | tee -a ~/.bashrc ~/.zshrc > /dev/null
