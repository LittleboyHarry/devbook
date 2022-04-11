隔离化安装 Python 命令行工具。Python >= 3.7

## 使用镜像源下载

一次性参数

    -i https://mirrors.cloud.tencent.com/pypi/simple

全局设置

    pip config set global.index-url https://mirrors.cloud.tencent.com/pypi/simple

## 安装

import GetPkg from '@theme/GetPkg';

<GetPkg name="pipx" dnf apt />

用 pip 安装：

```shell
python3 -m pip install --user pipx
python3 -m pipx ensurepath

# 自动补全指导：
pipx completions | less
```
