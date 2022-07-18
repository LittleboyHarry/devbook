printf '
垂直显示候选框? (Y/n) '
read r
[[ "$r" =~ ^(Y|y|)$ ]] &&
    dconf write /com/github/libpinyin/ibus-libpinyin/libpinyin/lookup-table-orientation 1

printf '
程序员编程向优化：
- 禁用简繁切换键
- 禁用半角与全角切换键
启用? (y/N) '
read r
if [[ "$r" =~ ^(Y|y)$ ]]; then
    dconf write /com/github/libpinyin/ibus-libpinyin/libpinyin/trad-switch "''"
    dconf write /com/github/libpinyin/ibus-libpinyin/libpinyin/punct-switch "''"
fi

printf '
使用小鹤双拼提高中文码字效率? (y/N) '
read r
[[ "$r" =~ ^(Y|y)$ ]] &&
    cat <<END | dconf load /com/github/libpinyin/ibus-libpinyin/libpinyin/
[/]
double-pinyin=true
double-pinyin-schema=5
END

if [ "$XDG_CURRENT_DESKTOP" = GNOME ]; then
    printf '
安装优化扩展 `Customize IBus` 吗? (y/N) '
    read r
    if [[ "$r" =~ ^(Y|y)$ ]]; then
        UUID=customize-ibus@hollowman.ml
        dconf write /org/gnome/shell/extensions/customize-ibus/input-indicator-only-on-toggle true
        dconf write /desktop/ibus/panel/use-custom-font true
        gdbus call --session --dest org.gnome.Shell --object-path /org/gnome/Shell --method org.gnome.Shell.Extensions.InstallRemoteExtension $UUID
        gnome-extensions prefs $UUID
    fi
fi

printf '
云拼音功能需要向云端提供输入数据，以供分析
使用百度云拼音? (y/N) '
read r
[[ "$r" =~ ^(Y|y)$ ]] &&
    dconf write /com/github/libpinyin/ibus-libpinyin/libpinyin/enable-cloud-input true
