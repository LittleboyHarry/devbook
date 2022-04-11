---
title: 初始化
---

## 第一步：备份还原点

运行：

    SystemPropertiesProtection

配置 (Alt+O) > 启动系统保护 > 调整最大使用量 > 确定 > 创建 (Alt+C) > 为创建的还原点起名

## 第二步：系统更新

:::info

连接网络，打开设置查看系统更新情况：

    ms-settings:windowsupdate-options

选调:

- 勾选“接收其他 MS 产品更新”
- 如果不介意使用 P2P 流量分享技术，可以进入“传递优化”选择 Internet 下载源以提高速度

此外，更新所有应用软件：

进入旧版 Store 商店 > 菜单 - 软件和更新  > 下载和更新
（ 新版：库 > 获取更新

:::

 <div class="alert alert--info" role="alert">

## For Win11

### 家庭版：若需要更改用户

安装后，系统登录的微软账号名作为正式用户名，会有毛病：

- 每次开机麻烦的在线登录
- 默认目录名路径难记
- 潜在的捆绑广告服务

如果不满意创建新用户的方法：

运行 `netplwiz` 添加新的本地用户，然后设置 “属性” > “组成员” 为 “管理员”。
如果还要删除老用户，注销切换到新用户进入 `netplwiz` 删除。

## 专业版：设置计算机名

开始菜单关键词 `name` 搜索 “查看电脑名称” 进入调整

</div>

## 配置 DNS

搜索 `ncpa.cpl` 设置 DNS 服务器地址，如

微软 DNS：`4.2.2.1` `4.2.2.2`

114 DNS：`114.114.114.114` `114.114.115.115`

## 微软账号

推荐设用双重登录验证码 App，这样可以避免重复输入登录密码。

账号配置方法：https://account.live.com/proofs/EnableTfa

手机客户端：
[iOS](https://apps.apple.com/cn/app/microsoft-authenticator/id983156458)
| Android

## 双系统

:::note 需要管理员权限运行

`Win + R` 运行对话框，可按下 `Ctrl + Shift + Enter` 提权运行

:::

关闭快速启动

    reg add "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Power" /v HiberbootEnabled /t REG_DWORD /f /d 0

系统时间使用了错误的时区

    reg add "HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\TimeZoneInformation" /v RealTimeIsUniversal /d 1 /t REG_DWORD /f

在“启动和故障恢复”中设置多 Windows 的系统启动的时间、默认选择

    SystemPropertiesAdvanced

## 答疑区

Q: 需要打开非 zip 的压缩文件？

安装广受好评的 7z 便携版解压器: https://portableapps.com/apps/utilities/7-zip_portable

Q: 重装系统里没有 Office

A: 如果你已经在线激活过 Office:

<a className="button button--lg button--primary" href="https://account.microsoft.com/services#:~:text=%E5%B7%B2%E8%B4%AD%E4%B9%B0%E7%9A%84%E4%BA%A7%E5%93%81" target="_blank">登录微软账号并下载安装</a>
