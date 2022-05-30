---
title: 初始化
sidebar_position: 2
---

## 第一步：备份还原点

运行：

    SystemPropertiesProtection

配置 (Alt+O) > 启动系统保护 > 调整最大使用量 > 确定 > 创建 (Alt+C) > 为创建的还原点起名

## 第二步：系统更新

连接网络，调整<HtmlA href="ms-settings:windowsupdate-options">更新高级选项</HtmlA>：

- 勾选“接收其他 MS 产品更新”
- 如果不介意使用 P2P 流量分享技术：进入“传递优化”选择 Internet 下载源以提高速度

此外，更新所有应用软件：

进入旧版 Store 商店 > 菜单 - 软件和更新 > 下载和更新
（ 新版：库 > 获取更新

## 第三步：更改计算机名

开始菜单关键词 `name` 搜索 “查看电脑名称” 设置

:::note 创建自定义用户

若 Windows 11 登录的微软账号联网安装，系统有如下毛病：

- 账号名作为目录名
- 每次开机麻烦的在线登录
- 潜在的捆绑广告服务

自 Windows 10 开始，微软弱化了多用户账号管理的功能。若要创建新用户：

运行 `netplwiz` 添加新的本地用户，然后设置 “属性” > “组成员” 为 “管理员”。
如果还要删除老用户，注销切换到新用户进入 `netplwiz` 删除。

:::

## 第四步：配置 DNS

如果运行商提供的默认 DNS 服务不满意（ 如部分网站无法访问 ），可强制绑定：

搜索 `ncpa.cpl` 设置 DNS 服务器地址，如

微软 DNS：`4.2.2.1` `4.2.2.2`

[114 DNS](https://www.114dns.com/)：`114.114.114.114` `114.114.115.115`

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

    reg add "HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\TimeZoneInformation" /v RealTimeIsUniversal /d 1 /t REG_DWORD /f

多 Windows 的系统启动：在“启动和故障恢复”中设置的选择时间、默认选项

    SystemPropertiesAdvanced

## 缺少 Office？

如果你的微软账号已激活了 Office，登录并获取：

<p>
<LinkButton icon outline href="https://account.microsoft.com/services#:~:text=%E5%B7%B2%E8%B4%AD%E4%B9%B0%E7%9A%84%E4%BA%A7%E5%93%81" name="在线官方安装器" />
</p>

:::info 使用验证码登录微软账号

推荐使用微软登录验证 App，避免重复输入登录密码。
[配置方法](https://account.live.com/proofs/EnableTfa)

手机客户端：
[iOS](https://apps.apple.com/cn/app/microsoft-authenticator/id983156458)
| Android

:::

import { LinkButton } from '@theme/links';
import { HtmlA } from '@theme/links';
