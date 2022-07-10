kwriteconfig5 --file kwinrc --group Plugins --key kwin4_effect_dimscreenEnabled true

printf '跳过关机前确认 (Y/n)? '; read r
[[ "$r" =~ ^(Y|y|)$ ]] &&
    kwriteconfig5 --file ksmserverrc --group General --key confirmLogout false

printf '窗口最大化时，隐藏标题栏。按 `Super + PageUp` 恢复 (Y/n)? '; read r
if [[ "$r" =~ ^(Y|y|)$ ]]; then
    kwriteconfig5 --file ~/.config/kwinrc --group Windows --key BorderlessMaximizedWindows true
    qdbus org.kde.KWin /KWin reconfigure
fi

printf '激活概览试图，由 `Super + W` 或配置桌面边缘触发。仅 KDE >= 5.24 可用 (Y/n)? '; read r
[[ "$r" =~ ^(Y|y|)$ ]] &&
    kwriteconfig5 --file kwinrc --group Plugins --key overviewEnabled true
