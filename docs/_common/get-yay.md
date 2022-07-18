import {
    PreferNetShore,
    OffshoreNet,
    InshoreNet,
} from '@theme/unique/PreferNetShore'

推荐安装并使用 yay

 <PreferNetShore>

<InshoreNet>

```
export GO111MODULE=on
export GOPROXY=https://goproxy.cn,direct
```

</InshoreNet>

```shell
sudo pacman -S gcc-go --noconfirm
cd ~
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
yay --editmenu --save
```

<InshoreNet>

:::note 国服加速安装：

为下载构建源码，[fastgit](https://doc.fastgit.org/zh-cn/guide.html) 提供 GitHub 镜像服务

:::

</InshoreNet>

</PreferNetShore>
