## 代码格式化

    sudo dnf in -y shfmt

`-w` 参数把格式化结果写入原文件

    shfmt -w <script>

格式化当前目录所有文件

    shfmt -w -l .

<GetVscExt id="foxundermoon.shell-format"/>

import GetVscExt from '@theme/GetVscExt';