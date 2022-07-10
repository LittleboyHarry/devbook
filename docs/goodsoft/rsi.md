---
sidebar_position: 9
---

# 休息提醒

import CodeType from '@theme/unique/CodeType'
import CodeBlock from '@theme/CodeBlock';
import registryCode from '!!raw-loader!./workrave.reg';
import dbconfigCode from '!!raw-loader!./workrave.dconf';

# Workrave

支持：

- Windows
- Linux
  - 非 Ubuntu 系统需要安装 <a href="/docs/setup-linux/mustdo/gnome/panel#扩展推荐" target="_blank" >GNOME 托盘图标依赖</a>
  - 除了 KDE Wayland

<GetPkg name="workrave" apt dnf choco winget pacman />

:::note 笔者的作息规律

40 分钟休息，20 分钟暂停一下

<details>
    <summary>Windows</summary>

<CodeType reg>注册表配置：</CodeType>

<CodeBlock language="ini">{registryCode}</CodeBlock>

</details>

 <details>
<summary>Linux 脚本</summary>

<CodeBlock language="shell">{`cat << END | dconf load /
${dbconfigCode}END`}</CodeBlock>

打开 gnome-tweaks 添加开机启动程序

Wayland [Bug](https://github.com/rcaelers/workrave/issues/94) 修复:

```shell
mkdir -p ~/.local/share/applications
cd ~/.local/share/applications
cp /usr/share/applications/workrave.desktop .
sed -i "/Exec/ s/$/ --display=:0/" workrave.desktop
```

</details>

:::

:::note KDE 代替品

<GetPkg name="rsibreak" apt pacman dnf />

搜索关键词 `auto` 设置应用自启动

:::

import GetPkg from '@theme/unique/GetPkg';
