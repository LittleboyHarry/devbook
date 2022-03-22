## 代码格式化

    sudo dnf in -y shfmt

`-w` 参数把格式化结果写入原文件

    shfmt -w <script>

格式化当前目录所有文件

    shfmt -w -l .

VSCode 扩展支持

    code --install-extension foxundermoon.shell-format --force
