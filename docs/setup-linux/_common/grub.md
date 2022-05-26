推荐配置：

```shell
# 记住上次选择的启动项
sudo sed -i "s/^GRUB_DEFAULT=.*$/GRUB_DEFAULT=saved/" /etc/default/grub
echo GRUB_SAVEDEFAULT=true | sudo tee -a /etc/default/grub

# 降低等待时间为 2 秒
sudo sed -i "s/^GRUB_TIMEOUT=.*$/GRUB_TIMEOUT=2/" /etc/default/grub
```

<!--
更新 Grub：

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs className="tabs--block" groupId="is-debian">
  <TabItem value="other" label="其他发行版">

    sudo grub2-mkconfig -o /etc/grub2-efi.cfg

  </TabItem>
</Tabs>

<br/>

:::note 在 KDE 中设置开机画面

    sudo apt install -y kde-config-plymouth

搜索关键词 `plymouth` 选择不同的画面

:::
-->
