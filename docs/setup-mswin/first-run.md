---
sidebar_position: 2
---

# 初始化

import {
PreferWinVer,
ForWin10,
ForWin11
} from '@theme/PreferWinVer'

<PreferWinVer win10 win11 />

## 第一步：备份还原点

打开对话框：

 <PreferWinVer win10 win11 noSelector>
<ForWin10>

1. 右键“此电脑”，“属性”
2. 点击侧边栏 “系统保护”

</ForWin10>
<ForWin11>

1. 打开“设置”
2. 滚动列表到底部，点“关于”或“系统信息”
3. 点相关链接的“系统保护”

</ForWin11>
</PreferWinVer>

配置备份：

1. 配置 (Alt+O) > 启动系统保护 > 调整最大使用量，确定
2. 创建 (Alt+C) > 为创建的还原点起名

## 第二步：系统更新

连接网络，调整<HtmlA href="ms-settings:windowsupdate-options">更新高级选项</HtmlA>：勾选“接收其他 MS 产品更新”

<!-- 如果不介意使用 P2P 流量分享技术：进入“传递优化”选择 Internet 下载源以提高速度 -->

此外，更新所有应用软件：

进入旧版 Store 商店 > 菜单 - 软件和更新 > 下载和更新
（ 新版：库 > 获取更新

## 第三步：更改计算机名

设置 > 重命名

## 第四步：配置 DNS

如果运行商提供的默认 DNS 服务不满意（ 如部分网站无法访问 ），可强制绑定：

搜索 `ncpa.cpl` 设置 DNS 服务器地址，如

微软 DNS：`4.2.2.1` `4.2.2.2`

[114 DNS](https://www.114dns.com/)：`114.114.114.114` `114.114.115.115`

阿里 DOH, 管理员权限运行：

```bat
netsh dns add encryption server=223.5.5.5 dohtemplate=https://dns.alidns.com/dns-query autoupgrade=no udpfallback=no
netsh dns add encryption server=223.6.6.6 dohtemplate=https://dns.alidns.com/dns-query autoupgrade=no udpfallback=no
```

<!--
:::info 以下指令需要管理员权限运行

`Win + R` 运行对话框，可按下 `Ctrl + Shift + Enter` 提权运行

:::
 -->

## 双系统问题

:::caution 以下指令需要管理员权限

`Win + X` > `A` 在系统菜单中，打开具有管理员权限的 PowerShell 终端

:::

关闭快速启动

    reg add "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Power" /v HiberbootEnabled /t REG_DWORD /f /d 0

系统时间使用了错误的时区

    reg add HKLM\System\CurrentControlSet\Control\TimeZoneInformation /v RealTimeIsUniversal /d 1 /t REG_DWORD /f

多 Windows 的系统启动：在“启动和故障恢复”中设置的选择时间、默认选项

    SystemPropertiesAdvanced

## 缺少 Office？

如果你的微软账号已激活了 Office，登录并获取：

<p>
<LinkButton icon={<WebIcon />} outline href="https://account.microsoft.com/services#:~:text=%E5%B7%B2%E8%B4%AD%E4%B9%B0%E7%9A%84%E4%BA%A7%E5%93%81" name="在线官方安装器" />
</p>

:::info 使用验证码登录微软账号

推荐使用微软登录验证 App，避免重复输入登录密码。
[配置方法](https://account.live.com/proofs/EnableTfa)

手机客户端：[iOS](https://apps.apple.com/cn/app/microsoft-authenticator/id983156458)
| Android

:::

import { WebIcon } from '@theme/fai';
import { LinkButton } from '@theme/links';
import { HtmlA } from '@theme/links';
