隔离化安装 Python 命令行工具。Python >= 3.7

## 安装

import GetPkg from '@theme/GetPkg';

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
