---
sidebar_position: 8
---

# 电子邮件

推荐 Mozilla 出品的通用客户端

import {
PreferAppstream,
WithAppstream,
WithoutAppstream
} from '@theme/PreferAppstream';
import { StoreButton } from '@theme/links';
import GetPkg from '@theme/GetPkg';

<PreferAppstream appstream pkgmgr>

<WithAppstream>
    <StoreButton to='appstream://net.thunderbird.Thunderbird' text='一键安装' />
</WithAppstream>

<WithoutAppstream>
    <GetPkg name="thunderbird" dnf winget
pacman="thunderbird thunderbird-i18n-zh-cn"
flatpak="org.mozilla.Thunderbird" />
</WithoutAppstream>

</PreferAppstream>

## 设置

宽屏推荐：菜单 -> 查看 -> 布局 -> 直视图
