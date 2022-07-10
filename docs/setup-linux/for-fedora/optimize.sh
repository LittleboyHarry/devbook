
if [ "$(grep ^VERSION_ID= /etc/os-release | cut -d= -f2)" -le 35 ]; then
    sudo sed -i '/^SingleInstall/ s/=ask/=warn/' /etc/PackageKit/CommandNotFound.conf
fi

function askfory(){
  printf "\n$1 (Y/n)? "; read r
  return [ "$r" =~ ^(Y|y|)$ ]
}

function askforn(){
  printf "\n$1 (y/N)? "; read r
  return [ "$r" =~ ^(Y|y)$ ]
}

[ askfory 'Grub> 降低等待时间为 2 秒' ] && GRUB_WAITLESS=1
[ askfory 'Grub> 每次启动读取并记录上一次选择' ] && GRUB_REMEMBER=1
[ askfory 'DNF> 搜索并使用网速最快的镜像源' ] && FASTEST_MIRROR=1
[ askforn 'DNF> 锁定 linux 内核版本号' ] && LOCKDOWN_LINUX=1

if [ "$GRUB_REMEMBER" = 1 ]; then
    sudo sed -i "s/^GRUB_DEFAULT=.*$/GRUB_DEFAULT=saved/" /etc/default/grub
    echo GRUB_SAVEDEFAULT=true | sudo tee -a /etc/default/grub >/dev/null
    GRUB_MODIFIED=1
fi

if [ "$GRUB_WAITLESS" = 1 ]; then
    sudo sed -i "s/^GRUB_TIMEOUT=.*$/GRUB_TIMEOUT=2/" /etc/default/grub
    GRUB_MODIFIED=1
fi

[ -v GRUB_MODIFIED ] && sudo update-grub &

if [ "$FASTEST_MIRROR" = 1 ]; then
    echo "defaultyes=1" | sudo tee -a /etc/dnf/dnf.conf >/dev/null
    sudo dnf config-manager --save --setopt=fastestmirror=True
fi
sudo dnf makecache

if [ "$LOCKDOWN_LINUX" = 1 ]; then
    sudo dnf in -y 'dnf-command(versionlock)'
    sudo dnf versionlock add kernel{,-core,-headers} linux-firmware
fi

wait
