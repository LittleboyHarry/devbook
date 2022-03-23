## 安裝

import GetPkg from '@theme/GetPkg';

<GetPkg name="fzf" dnf apt scoop/>

## Shell 集成

RPM:

    printf "source /usr/share/fzf/shell/key-bindings.bash\n" >> ~/.bashrc
    printf "source /usr/share/fzf/shell/key-bindings.zsh\n" >> ~/.zshrc

Debian:

    printf "source /usr/share/doc/fzf/examples/key-bindings.bash\n" >> ~/.bashrc
    printf "source /usr/share/doc/fzf/examples/key-bindings.zsh\n" >> ~/.zshrc

可以使用一下快捷键：

- `Ctrl + R` 历史搜索（支持模糊搜索）
- `Alt + C` 切换当前工作目录
- `Ctrl + T` 搜索文件，复制其路径
