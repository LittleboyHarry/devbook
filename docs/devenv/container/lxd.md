# LXD

参考视频：[LitterHouge](https://www.bilibili.com/video/BV1DU4y1Q7nX)

以 Arch Linux 为发行版

## 安装

```bash
sudo pacman -S lxd
```

## 初始化

```bash
sudo systemctl enable lxd --now
# 为非 root 用户可用，需要重新登陆生效：
echo `whoami`:10000:65536 | sudo tee -a /etc/subuid /etc/subgid > /dev/null
sudo usermod -a -G lxd "$(whoami)"

# 基本上 Enter 接受默认配置即可
sudo lxd init
```

添加[镜像源](https://mirrorz.org/list/lxc-images)

    lxc remote add mirror <url> --protocol=simplestreams --public

## 创建容器系统

[容器系统大全](https://us.lxd.images.canonical.com/)

获取可用 Arch Linux 容器指纹

    lxc image list mirror: archlinux -c lfat -f csv | grep -v / | grep -v MACHINE | tail -n1 | cut -d, -f2

创建容器

```bash
# 根据指纹创建容器
lxc launch mirror:<fingerprint> <cname> -c security.privileged=true
# 以 root 身份进入容器
lxc exec <cname> bash
```

## 配置容器

```bash
# 创建用户
useradd -m <uname>
sed -i '/NOPASSWD/ s/^# %wheel/%wheel/' /etc/sudoers
usermod -a -G wheel <uname>
passwd <uname>
```

配置[镜像站](https://mirrorz.org/list/archlinux)：

```shell
URL='https://mirrors.ustc.edu.cn/archlinux'

pushd /etc
sed -i '/^#Para/ s/^#//' pacman.conf
pushd pacman.d
[ -v URL ] && echo 'Server = '"$URL"'/$repo/os/$arch' | tee mirrorlist
yes | pacman -Sy reflector
reflector -c cn -p https --sort rate -l 3 --save mirrorlist
yes | pacman -Syyu
```

## 其他

虚拟化 QEMU 见视频
