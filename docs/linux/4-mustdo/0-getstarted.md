---
title: 初始优化
---

## 打开终端的方法

**GNOME:** 点击左上角 “活动” 按钮，输入 “terminal” 打开

**KDE:** 开始菜单，选择 “Konsole”

## 界面缩放与文字大小

:::note 对于 GNOME

使用 `gnome-tweaks` 的“字体”面板，14 寸笔记本显示屏推荐增大 **2~3 磅**

<GetPkg name="gnome-tweaks" apt dnf />

 <details className="let-details-to-gray">
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

:::

:::note 对于 KDE

搜索关键词 `fonts` 设置，重新登陆后生效

1080p 分辨率 14\~16寸 中文界面的字体大小推荐为 **16\~14 磅**

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

:::info 提高操作效率的键位调整

作者推荐改变 <a target="_blank" href="/docs/dev/keymap">键位映射</a> ，需要适应一段时间

:::

<!--
可选的优化：

- 推荐 <a target="_blank" href="/docs/dev/zsh">使用 Zsh 作为默认 Shell</a>
- 推荐 <a target="_blank" href="/docs/software/browser/edge-for-linux">使用微软 Edge 浏览器</a>

 -->

import GetPkg from '@theme/GetPkg';
