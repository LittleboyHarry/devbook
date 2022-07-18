:::note 界面缩放与文字大小

 <PreferXde gnome kde noSelector>
<ForGnome>

使用 `gnome-tweaks` 的“字体”面板，14 寸笔记本显示屏推荐增大 **2~3 磅**

<GetPkg name="gnome-tweaks" apt dnf pacman />

 <details>
<summary>14 寸笔记本显示屏的作者建议配置</summary>

加大缩放比例、光标尺寸：

```shell
cat << END | dconf load /org/gnome/desktop/interface/
[/]
text-scaling-factor=1.33
cursor-size=32
END
```

</details>

</ForGnome><ForKde>

搜索关键词 `fonts` 进入设置，点击上方 “调整所有字体…” 的按钮

- 字体推荐 <a href='/docs/devenv/font#noto-sans-cjk-sc' target='_blank'>Noto Sans CJK SC</a>
- 等宽推荐 <a href='/docs/devenv/font#cascadia-code' target='_blank'>Cascadia Mono</a>（ 连体版：`Cascadia Code` ）
- 1080p 分辨率 14\~16寸 中文界面的字体大小推荐加多 **5\~3 磅**，窗口标题栏字号 **3\~1 磅**

</ForKde>
</PreferXde>

:::

<!--
## 中文支持

包括：

- LibreOffice
- man 手册 ( `LANG=C man` 看回原版 )

```shell
sudo dnf in -y libreoffice-langpack-zh-Hans
```
-->

:::note 推荐设置

若已使用分区加密：用户 > 解锁 > 激活 “自动登录”

:::

:::info 提高操作效率的键位调整

作者推荐改变 <a target="_blank" href="/docs/devenv/keymap">键位映射</a> ，需要适应一段时间

:::

:::caution 注销并重新登录以生效
:::

<!--
可选的优化：

- 推荐 <a target="_blank" href="/docs/devenv/ohmyzsh">使用 Zsh 作为默认 Shell</a>
- 推荐 <a target="_blank" href="/docs/goodsoft/browser/edge-for-linux">使用微软 Edge 浏览器</a>

 -->

import GetPkg from '@theme/unique/GetPkg';
import {
PreferXde,
ForGnome,
ForKde
} from '@theme/unique/PreferXde';
