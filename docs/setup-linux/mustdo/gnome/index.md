---
sidebar_position: 2
---

import {
    PreferNetShore,
    OffshoreNet,
    InshoreNet,
} from '@theme/unique/PreferNetShore'

# GNOME 调优

:::note 已设全盘加密的用户

推荐设置自动登陆，免输密码：

    gnome-control-center user-accounts

:::

<PreferNetShore>

下载优化脚本

 <OffshoreNet>

```shell
git clone https://github.com/LittleboyHarry/setup-gnome
cd setup-gnome
```

</OffshoreNet>

 <InshoreNet>

```shell
git clone https://gitcode.net/lbh/ignome setup-gnome
cd setup-gnome
```

</InshoreNet>

</PreferNetShore>

## 其它

设置深夜护眼：点击夜灯，激活暖色效果

    gnome-control-center display &!

## 辅助工具

类 Windows 注册表编辑器：

import GetPkg from '@theme/unique/GetPkg';

<GetPkg name="dconf-editor" apt dnf pacman />
