---
title: GNOME 任务栏
---

GNOME 自定义调节扩展：[Dash to Dock](https://extensions.gnome.org/extension/307/dash-to-dock/)
（ Ubuntu 内置 ）

 <details className="let-details-to-gray">
  <summary>Ubuntu 风格</summary>

```shell
cat << END | dconf load /org/gnome/shell/extensions/dash-to-dock/
[/]
dock-position='LEFT'
dock-fixed=true
intellihide-mode='MAXIMIZED_WINDOWS'
intellihide=true
icon-size-fixed=true
custom-theme-shrink=true
running-indicator-style='DOTS'
extend-height=true
scroll-action='switch-workspace'
click-action='focus-or-previews'
shift-click-action='launch'
middle-click-action='launch'
shift-middle-click-action='minimize'
END
```

</details>

## 作者偏好

```shell
cat << END | dconf load /org/gnome/shell/extensions/dash-to-dock/
[/]
dash-max-icon-size=64
multi-monitor=true
isolate-workspaces=true
isolate-monitors=true
show-trash=false
show-apps-at-top=true
scroll-action='cycle-windows'
middle-click-action='quit'
click-action='focus-minimize-or-previews'
END
```

## 仅总览视图中显示

```shell
cat << END | dconf load /org/gnome/shell/extensions/dash-to-dock/
[/]
dock-fixed=false
autohide=false
intellihide=true
transparency-mode='FIXED'
background-opacity=0.11
END
dconf write /org/gnome/mutter/center-new-windows true
```
