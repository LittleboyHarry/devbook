---
title: GNOME 开始菜单
---

Dash to Panel
可以代替前者

作者推荐配置：

 <div className="limit-code-height">

```shell
cat << END | dconf load /org/gnome/shell/extensions/dash-to-panel/
[/]
isolate-monitors=true
isolate-workspaces=true
panel-positions='{"0":"LEFT"}'
panel-sizes='{"0":76}'
dot-position='LEFT'
dot-style-focused='DASHES'
dot-style-unfocused='DOTS'
dot-size=5
trans-use-custom-opacity=true
trans-use-dynamic-opacity=true
appicon-padding=8
appicon-margin=2
middle-click-action='QUIT'
shift-click-action='LAUNCH'
scroll-panel-action='NOTHING'
show-showdesktop-hover=true
window-preview-size=380
click-action='TOGGLE-SHOWPREVIEW'
END
```

</div>

安装网址：https://extensions.gnome.org/extension/1160/dash-to-panel/
