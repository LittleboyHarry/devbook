# 极客手册

写给技术爱好者的公益指南，采用的操作系统是 Fedora 为 Linux 发行版、结合 Windows

**内容仅供读者参考，配置前请备份好重要数据。作者不承担任何风险与后果！**

## 涵盖的内容

- Linux —— 为极客配置
- 美化 —— GNOME
- 浏览器 —— 提高工作效率
- 开源软件 —— 倾力推荐
- 开发 —— 环境配置
- Windows —— 为开发适配

## 使用方法

### 复制代码的技巧

- 代码一键复制
- 快速三次点击，选中本行
- Linux 中键会粘贴选中的文本

### 本地开发

安装依赖

    yarn --ignore-scripts

开发服务器

-     docker-compose up

-     podman-compose up

-     docker run --rm -it -p 3000:3000 -v ./:/app -v /app/.git -w /app -e BROWSER=none node:lts-slim /bin/bash

作者已启动 GitHub Actions 自动集成
