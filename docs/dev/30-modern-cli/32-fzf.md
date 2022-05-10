---
title: fzf
---

## 安裝

import GetPkg from '@theme/GetPkg';

<GetPkg name="fzf" dnf apt scoop pacman/>

## Shell 集成

import {
  PreferPkgMgr,
  ForApt,
  ForDnf,
  ForPacman
} from '@theme/PreferPkgMgr'

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

可以使用一下快捷键：

- `Ctrl + R` 历史搜索（支持模糊搜索）
- `Alt + C` 切换当前工作目录
- `Ctrl + T` 搜索文件，复制其路径
