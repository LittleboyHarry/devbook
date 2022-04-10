---
title: 初始优化
---

## 打开终端的方法

**GNOME:** 点击左上角 “活动” 按钮，输入 “terminal” 打开

**KDE:** 开始菜单，选择 “Konsole”

## 界面缩放与文字大小

**GNOME**

我的 14 寸电脑缩放后所用的配置 —— 大号缩放、字体字号、光标等属性。
( 更多需求请用 `gnome-tweaks` 调整 )

```shell
cat << END | dconf load /org/gnome/desktop/interface/
[/]
text-scaling-factor=1.33
document-font-name='Cantarell 13'
font-name='Cantarell 13'
monospace-font-name='DejaVu Sans Mono 12'
cursor-size=48
END
```

**KDE**

搜索关键词 `fonts` 设置，选择统一调整字体、且记住合适的字号 （ 14 寸屏推荐 15~18 之间 ）重新登陆后生效

<!--
## 中文支持

包括：

- LibreOffice
- man 手册 ( `LANG=C man` 看回原版 )

```shell
sudo dnf in -y libreoffice-langpack-zh-Hans
```
-->

:::note 提高操作效率的键位调整

作者推荐<a target="_blank" href="/docs/dev/keymap">改变键位映射的方法</a>，需要适应一段时间

:::

<!--
可选的优化：

- 推荐 <a target="_blank" href="/docs/dev/zsh">使用 Zsh 作为默认 Shell</a>
- 推荐 <a target="_blank" href="/docs/browser/edge-for-linux">使用微软 Edge 浏览器</a>

 -->
