# tmux

```shell
printf '# 256 色彩强化 (Y/n)? '; read r
[[ "$r" =~ ^(Y|y|)$ ]] &&
    echo 'set -g default-terminal "screen-256color"' >>~/.tmux.conf

printf 'Prefix + m 切换鼠标模式 (Y/n)? '; read r
[[ "$r" =~ ^(Y|y|)$ ]] &&
    echo 'bind-key m set-option -g mouse \; display "Mouse: #{?mouse,ON,OFF}"' >>~/.tmux.conf

printf '使用 Ctrl + s 代替 Ctrl + b 作前缀键 (y/N)? '; read r
[[ "$r" =~ ^(Y|y)$ ]] &&
    echo 'set-option -g prefix C-s' >>~/.tmux.conf

pidof tmux >/dev/null && tmux source-file ~/.tmux.conf
```
