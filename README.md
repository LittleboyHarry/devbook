# 极客手册

写给技术爱好者的公益指南，采用的操作系统是 Fedora 为 Linux 发行版、结合 Windows

## 涵盖的内容

- Linux —— 为极客配置
- 美化 —— GNOME
- 浏览器 —— 提高工作效率
- 开源软件 —— 倾力推荐
- 开发 —— 环境配置
- Windows —— 为开发适配

## 使用方法

### 复制代码的技巧：

- 区域右上角可点击一键复制
- 快速三次点击，选中本行
- 在 Linux 上选中文本会被自动复制，按鼠标中键即可粘贴

### 本地开发

推荐在 Linux 环境上开发浏览，建议使用 [Vagrant](./docs/dev/51-vagrant.md) 虚拟机内运行

本地安全安装

    yarn --ignore-scripts

虚拟容器安装

    vagrant up
    vagrant ssh
    yarn i

更新文件

    vagrant rsync

本地浏览 <http://localhost:3000/geekbook>

    vagrant ssh
    npm start

浏览更新：`vagrant rsync` 或 `vagrant rsync-auto`

部署（作者专用）

    vagrant ssh
    yarn
    deploy
