
# 右键菜单

import CodeType from '@theme/unique/CodeType';

:::info 禁用新版右键菜单

<CodeType cmd restart='explorer'>
<strong>Windows 11 新版右键菜单</strong>
</CodeType>

    reg add "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve

<details><summary>恢复方法</summary>

    reg delete "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /va /f

</details>

:::

<CodeType reg>

包含：

</CodeType>

- 文件：复制内容、哈希、获取权限、编辑隐藏属性
- 桌面壁纸右键菜单：重启资源管理器、电源计划、图标设置、屏保设置
- 电脑图标右键菜单：显示系统信息、UAC、编辑 HOSTS、刷新 DNS
- 特殊：编辑程序的防火墙规则、图片幻灯片播放、分区垃圾删除、分区碎片整理、注册 DLL/OCX

更多设置请下载 [菜单管理器](https://gitee.com/BluePointLilac/ContextMenuManager)

import CodeBlock from '@theme/CodeBlock';
import betterMenuRegCode from '!!raw-loader!./bettermenu.reg';

<CodeBlock language="ini">{betterMenuRegCode}</CodeBlock>
