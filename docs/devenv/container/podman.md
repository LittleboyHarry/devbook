## 安装

- 无 root 权限的 docker 代替品

  <GetPkg name="podman" apt dnf pacman />

- <p>docker-compose 代替品:
  ( <a href="/docs/devenv/modern-cli#pipx" target="_blank">pipx 的安装</a> )</p>

  <GetPkg name="podman-compose" dnf pacman pipx />

- 替换 docker：

  <GetPkg name="podman-docker" dnf apt pacman />

## 初始配置

配置腾讯云镜像：

```shell
grep -q '^unqualified-search-registries' /etc/containers/registries.conf || echo 'unqualified-search-registries = ["docker.io"]' | sudo tee -a /etc/containers/registries.conf > /dev/null
echo -e '[[registry]]\nlocation="mirror.ccs.tencentyun.com"' | sudo tee -a /etc/containers/registries.conf > /dev/null
```

:::note 检查配置结果

    sed "/^#/d" /etc/containers/registries.conf

:::

<div className="no-admonition-uppercase-title">

:::note 在 Arch Linux 中使用

```bash
echo `whoami`:10000:65536 | sudo tee -a /etc/subuid /etc/subgid > /dev/null
podman system migrate
```

具体见 [ArchWiki](https://wiki.archlinux.org/title/Podman#Rootless_Podman)

:::

</div>

:::caution 挂载卷的文件访问权限被拦截

对于含有 SELinux 的红帽类系统。请向参数添加 `:z` 标记，如 `-v ~/data:/data:z`

:::

## VSCode

启动接口

    systemctl --user enable --now podman.socket

配置

    "docker.dockerPath": "podman",
    "docker.host": "unix:///run/user/1000/podman/podman.sock",

<p><LinkButton outline href="vscode:extension/ms-azuretools.vscode-docker" name="安装" /></p>

附：[GNOME 扩展](https://extensions.gnome.org/extension/1500/containers/)

import GetPkg from '@theme/unique/GetPkg';
import { LinkButton } from '@theme/unique/links';
