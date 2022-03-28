## 安装

import GetPkg from '@theme/GetPkg';

<GetPkg name="podman" dnf apt />

    pipx install podman-compose

代替 docker 的脚本：

<GetPkg name="podman-docker" dnf apt />

## 初始配置

对于非 Fedoar 系统，默认配置是空的、无法使用：

    sed "/^#/d" /etc/containers/registries.conf

配置腾讯云镜像：

```shell
echo 'unqualified-search-registries = ["docker.io"]' | sudo tee -a /etc/containers/registries.conf > /dev/null
echo -e '[[registry]]\nlocation="mirror.ccs.tencentyun.com"' | sudo tee -a /etc/containers/registries.conf > /dev/null

```

:::caution 挂载卷的文件访问权限被拦截

对于含有 SELinux 的红帽类系统。请向参数添加 `:z` 标记，如 `-v ~/data:/data:z`

:::

## 推荐

- VSCode 扩展

      ext install ms-azuretools.vscode-docker

  配置

      "docker.dockerPath": "podman",
      "docker.host": "unix:///run/user/1000/podman/podman.sock",

- [GNOME 扩展](https://extensions.gnome.org/extension/1500/containers/)