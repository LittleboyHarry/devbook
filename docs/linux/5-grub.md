---
title: Grub
---

## 降低自动选择时间

降低等待时间为 1 秒

    sudo sed -i "/GRUB_TIMEOUT/ s/=.*/=1/" /etc/default/grub

<details className="let-details-to-gray">
    <summary>使用 rEFInd 等其他引导器：</summary>

可隐藏 Grub 菜单内的 Windows 等其它系统

    echo GRUB_DISABLE_OS_PROBER=true | sudo tee -a /etc/default/grub > /dev/null

</details>

## 更新 Grub

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="linux-distro">
  <TabItem value="debian" label="Ubuntu / Debian">

    sudo update-grub

  </TabItem>
  <TabItem value="centos" label="Fedora">

    sudo grub2-mkconfig -o /etc/grub2-efi.cfg

  </TabItem>
</Tabs>

## 在 KDE 中设置开机画面

    sudo apt install -y kde-config-plymouth

搜索关键词 `plymouth` 选择不同的画面
