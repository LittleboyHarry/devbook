## 安装

- 无 root 权限的 docker 代替品

  <GetPkg name="podman" apt dnf pacman />

- docker-compose 代替品：

  <GetPkg name="podman-compose" dnf pacman pipx />

- 替换 docker：

  <GetPkg name="podman-docker" dnf apt pacman />

## 初始配置

配置腾讯云镜像：

```shell
echo 'unqualified-search-registries = ["docker.io"]' | sudo tee -a /etc/containers/registries.conf > /dev/null
echo -e '[[registry]]\nlocation="mirror.ccs.tencentyun.com"' | sudo tee -a /etc/containers/registries.conf > /dev/null
```

输出有效内容：

    sed "/^#/d" /etc/containers/registries.conf

:::caution 挂载卷的文件访问权限被拦截

对于含有 SELinux 的红帽类系统。请向参数添加 `:z` 标记，如 `-v ~/data:/data:z`

:::

## VSCode

<LinkButton outline href="vscode:extension/ms-azuretools.vscode-docker" name="安装" />

配置

    "docker.dockerPath": "podman",
    "docker.host": "unix:///run/user/1000/podman/podman.sock",

运行

    systemctl --user enable --now podman.socket

- [GNOME 扩展](https://extensions.gnome.org/extension/1500/containers/)

import GetPkg from '@theme/GetPkg';
import { LinkButton } from '@theme/links';
