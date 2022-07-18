if lsb_release -si | grep -qi "^Arch"; then
    cat <<END | sudo tee /etc/profile.d/fcitx5.sh >/dev/null
if [ ! "\$XDG_SESSION_TYPE" = "tty" ]
then
    export INPUT_METHOD=fcitx
    export GTK_IM_MODULE=fcitx
    export QT_IM_MODULE=fcitx
    export XMODIFIERS=@im=fcitx
fi
END

    sudo pacman -S --noconfirm fcitx5-im fcitx5-chinese-addons fcitx5-pinyin-zhwiki
    [ "$XDG_CURRENT_DESKTOP" = "KDE" ] &&
        sudo pacman -S --noconfirm kcm-fcitx5

    REQUIRE_REBOOT=1
elif [ -x "$(command -v dpkg)" ]; then
    sudo apt install -y fcitx5-chinese-addons fcitx5-config-qt libkf5config-bin

    [ "$XDG_CURRENT_DESKTOP" = "KDE" ] &&
        sudo dnf in -y kde-config-fcitx5
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf in -y fcitx5-autostart fcitx5-chinese-addons fcitx5-configtool kf5-kconfig-core

    [ "$XDG_CURRENT_DESKTOP" = "KDE" ] &&
        sudo dnf in -y kcm-fcitx5
fi

if [ ! -f /usr/share/fcitx5/pinyin/dictionaries/zhwiki.dict ]; then
    printf '
维基百科中文词典
下载地址为：https://github.com/felixonmars/fcitx5-pinyin-zhwiki/releases
手动添加到：~/.local/share/fcitx5/pinyin/dictionaries/

需要自行安装吗? (Enter 键继续)'
    read
fi

pkill fcitx5
timeout 2s fcitx5

[ -n "$(dconf read /org/gnome/desktop/input-sources/xkb-options)" ] &&
    kwriteconfig5 --file ~/.config/fcitx5/conf/xcb.conf --group "<default>" --key 'Allow Overriding System XKB Settings' False

if [ "$XDG_CURRENT_DESKTOP" = GNOME ]; then
    echo '
请稍后同意安装 kimpanel 插件... (Enter 键继续)'
    gdbus call --session --dest org.gnome.Shell --object-path /org/gnome/Shell --method org.gnome.Shell.Extensions.InstallRemoteExtension kimpanel@kde.org
fi

printf '
快捷键 `Super + V` 弹出剪贴板? (y/N) '
read p
if [[ "$r" =~ ^(Y|y)$ ]]; then
    kwriteconfig5 --file fcitx5/conf/clipboard.conf --group TriggerKey --key 0 "Super+V"
    [ "$XDG_CURRENT_DESKTOP" == "GNOME" ] &&
        gsettings set org.gnome.shell.keybindings toggle-message-tray "['<Super>m']"
fi

printf '
使用小鹤双拼? (y/N) '
read r
if [[ "$r" =~ ^(Y|y)$ ]]; then
    kwriteconfig5 --file fcitx5/profile --group Groups/0 --key DefaultIM shuangpin
    kwriteconfig5 --file fcitx5/profile --group Groups/0/Items/1 --key Name shuangpin
    kwriteconfig5 --file fcitx5/conf/pinyin.conf --group "<default>" --key ShuangpinProfile Xiaohe
fi

case "$XDG_CURRENT_DESKTOP" in
KDE)
    printf '
候选框样式：竖排 5 行大字体? (Y/n) '
    if [[ "$r" =~ ^(Y|y|)$ ]]; then
        kwriteconfig5 --file fcitx5/conf/classicui.conf --group "<default>" --key "Vertical Candidate List" True
        kwriteconfig5 --file fcitx5/conf/pinyin.conf --group "<default>" --key PageSize 5
        kwriteconfig5 --file fcitx5/conf/classicui.conf --group "<default>" --key Font "Noto Sans CJK SC 22"
    fi
    ;;
GNOME)
    printf '
使用大号字体竖排候选框，依赖 kimpanel 扩展? (Y/n) '
    read p
    [[ "$r" =~ ^(Y|y|)$ ]] &&
        cat <<END | dconf load /org/gnome/shell/extensions/kimpanel/
[/]
font='Noto Sans CJK SC 18'
vertical=true
END
    ;;
esac

printf '
不因应用而切换语言? (Y/n) '
read p
[[ "$r" =~ ^(Y|y|)$ ]] &&
    kwriteconfig5 --file fcitx5/config --group Behavior --key ShareInputState All

printf '
程序员编程向优化：
- 以 `Super + Space` 代替 `Ctrl + Space`
- 解除 `Ctrl + Shift + F` 简繁体切换键

启用? (Y/n) '
read p
if [[ "$r" =~ ^(Y|y|)$ ]]; then
    case "$XDG_CURRENT_DESKTOP" in
    KDE)
        kwriteconfig5 --file fcitx5/config --group Hotkey/TriggerKeys --key 0 Super+space
        kwriteconfig5 --file fcitx5/conf/chttrans.conf --group Hotkey --key 0 ''
        REQUIRE_LOGOUT=1
        ;;
    GNOME)
        gsettings set org.gnome.desktop.wm.keybindings switch-input-source "[]"
        gsettings set org.gnome.desktop.wm.keybindings switch-input-source-backward "[]"
        ;;
    esac
fi

if [ "$REQUIRE_REBOOT" = 1 ]; then
    printf '
立刻重启计算机以生效? (y/N) '
    read r
    [[ "$r" =~ ^(Y|y)$ ]] &&
        sudo reboot
elif [ "$REQUIRE_LOGOUT" = 1 ]; then
    echo '
重新登陆以生效！'
fi
