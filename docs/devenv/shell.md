## 代码格式化

<GetPkg name='shfmt' pacman />

`-w` 参数把格式化结果写入原文件

    shfmt -w <script>

格式化当前目录所有文件

    shfmt -w -l .

<PreferVscode oneline children={<GetVscodeExtension id="foxundermoon.shell-format"/>} />

import GetVscodeExtension, { PreferVscode } from '@theme/unique/GetVscodeExtension';
import GetPkg from '@theme/unique/GetPkg';
