---
title: GNOME 程序坞
---

# dock-to-dash

Ubuntu 已内置的 GNOME 自定义调节扩展：[Dash to Dock](https://extensions.gnome.org/extension/307/dash-to-dock/)

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
multi-monitor=true
isolate-workspaces=true
isolate-monitors=true
show-trash=false
scroll-action='cycle-windows'
middle-click-action='quit'
click-action='focus-minimize-or-previews'
END
```

## 固定在左侧

```shell
cat << END | dconf load /org/gnome/shell/extensions/dash-to-dock/
[/]
dock-fixed=true
extend-height=true
dash-max-icon-size=56
dock-position='LEFT'
END
dconf reset /org/gnome/shell/extensions/dash-to-dock/background-opacity
dconf write /org/gnome/shell/extensions/ding/start-corner "'top-right'"
dconf reset /org/gnome/desktop/wm/preferences/button-layout
```

## 固定在右侧

```shell
cat << END | dconf load /org/gnome/shell/extensions/dash-to-dock/
[/]
dock-fixed=true
extend-height=true
dash-max-icon-size=56
dock-position='RIGHT'
END
dconf reset /org/gnome/shell/extensions/dash-to-dock/background-opacity
dconf write /org/gnome/shell/extensions/ding/start-corner "'top-left'"
dconf write /org/gnome/desktop/wm/preferences/button-layout "'close,minimize,maximize:appmenu'"
```

## MacOS 程序坞风格

```shell
cat << END | dconf load /org/gnome/shell/extensions/dash-to-dock/
[/]
autohide=true
intellihide-mode='FOCUS_APPLICATION_WINDOWS'
dock-fixed=false
extend-height=false
background-opacity=0.5
dash-max-icon-size=64
END
```

## 仅总览视图中显示

```shell
cat << END | dconf load /org/gnome/shell/extensions/dash-to-dock/
[/]
dash-max-icon-size=64
dock-fixed=false
autohide=false
intellihide=false
transparency-mode='FIXED'
background-opacity=0.11
END
dconf write /org/gnome/mutter/center-new-windows true
```
