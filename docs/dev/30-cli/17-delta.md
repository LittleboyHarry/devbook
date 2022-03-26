---
title: 比较文本
---

# delta

适合命令行界面下的文件对比工具，比 diff 美观很多

    sudo dnf in -y git-delta

## Git 集成

```shell
git config --global pager.show delta
git config --global pager.log delta
git config --global pager.reflog delta
git config --global interactive.difffilter "delta --color-only"

# 选调，可能会影响 `git diff` 输出格式：
# git config --global pager.diff delta
```
