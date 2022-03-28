隔离化安装 Python 命令行工具

<div class="alert alert--warning" role="alert">
require: python >= 3.7
</div>

import GetPkg from '@theme/GetPkg';

<GetPkg name="pipx" dnf apt />

## 用 pip 安装

```shell
python3 -m pip install --user pipx
python3 -m pipx ensurepath

# 自动补全指导：
pipx completions | less
```
