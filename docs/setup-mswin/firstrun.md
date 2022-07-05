---
sidebar_position: 2
---

import st from './firstrun.module.scss';
import {
PreferWinVer,
ForWin10,
ForWin11
} from '@theme/PreferWinVer'

# 初始化

<PreferWinVer win10 win11 />

## 备份还原点

首先备份系统。打开对话框：

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

## 系统更新

第二步：连接网络，自动更新系统

调整<HtmlA href="ms-settings:windowsupdate-options">更新高级选项</HtmlA>：勾选“接收其他 MS 产品更新”

<!-- 如果不介意使用 P2P 流量分享技术：进入“传递优化”选择 Internet 下载源以提高速度 -->

此外，更新所有应用软件：

进入旧版 Store 商店 > 菜单 - 软件和更新 > 下载和更新
（ 新版：库 > 获取更新

## 更改计算机名

第三步：设置 > 重命名

## 配置 DNS

第四步：如果运行商提供的默认 DNS 服务不满意（ 如部分网站无法访问 ），可强制绑定：
搜索 `ncpa.cpl` 设置 DNS 服务器地址

<div className="left-float-scope autoselect-item-of-list"><div  style={{marginRight:'4rem'}}>

微软 DNS：
- 4.2.2.1
- 4.2.2.2

</div><div>

[114 DNS](https://www.114dns.com/)：
- 114.114.114.114
- 114.114.115.115

</div></div>

<CodeType cmd admin><div className="left-float-scope autoselect-item-of-list">

阿里 DOH：

<div className={st.alidns}>

- 223.5.5.5
- 223.6.6.6

</div>

（ 仅 Win11 可设置应用 ）

</div></CodeType>

```batch
netsh dns add encryption server=223.5.5.5 dohtemplate=https://dns.alidns.com/dns-query autoupgrade=no udpfallback=no
netsh dns add encryption server=223.6.6.6 dohtemplate=https://dns.alidns.com/dns-query autoupgrade=no udpfallback=no

```

<br/>

:::tip 使用新版终端？

为了方便粘贴代码，设置 “交互” > 关闭 “粘贴时删除尾随空格”，保存更改。对应的 JSON 配置语句为 `"trimPaste": false`

:::

## 缺少 Office？

如果你的微软账号已绑定或拥有 Office 许可证

<p>
<LinkButton outline href="https://setup.office.com/" name="登录并获取" />
</p>

:::info 使用验证码登录微软账号

推荐使用微软登录验证 App，避免重复输入登录密码。
[配置方法](https://account.live.com/proofs/EnableTfa)

手机客户端：[iOS](https://apps.apple.com/cn/app/microsoft-authenticator/id983156458)
| Android

:::

<br/>

或使用 [Office Tool Plus](https://otp.landian.vip/zh-cn/download.html) 部署

 <CodeType cmd admin >

## 双系统问题

</CodeType>

:::note 关闭快速启动

    reg add "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Power" /v HiberbootEnabled /t REG_DWORD /f /d 0

:::

:::note 系统时间使用了错误的时区

    reg add HKLM\System\CurrentControlSet\Control\TimeZoneInformation /v RealTimeIsUniversal /d 1 /t REG_DWORD /f

:::

多 Windows 的系统启动：在“启动和故障恢复”中设置的选择时间、默认选项

    SystemPropertiesAdvanced

import CodeType from '@theme/CodeType';
import { WebIcon } from '@theme/fai';
import { LinkButton } from '@theme/links';
import { HtmlA } from '@theme/links';
