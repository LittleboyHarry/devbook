---
sidebar_position: 1
---

# 安装系统

<PreferWinVer win10 win11 />

## 硬盘分区

Q: 有必要分区？怎样分区？

A:

作者认为除双系统情况，2022 年已经没有分区的必要性。一块一盘一分区即可

对固态硬盘而言，软件同操作系统装在 C 盘上能得到很好的使用体验

定期使用云盘或 [装入硬盘盒的机械硬盘](https://search.jd.com/Search?keyword=%E6%9C%BA%E6%A2%B0%E7%A1%AC%E7%9B%98%E7%9B%92&enc=utf-8)
备份重要数据比复杂分区更加靠谱

## 添加英语键盘

编程、游戏用途（需要纯英文输入模式），请添加 `英语(美国)-美式键盘` 作为备用输入法

> 语言选择时，按 `End` 键跳转到底部，再按 3~4 次 `PageUp` 就能找到“英语(美国)”

## 联网激活

 <PreferWinVer win10 win11 noSelector >
<ForWin10>

直接点击左下角按钮可以跳过

</ForWin10>
<ForWin11>

早期专业版可以跳过联网。家庭版要跳过联网过程，请 `Shift + F10` 打开命令提示符执行：

    taskkill /f /im oobe*

</ForWin11>
</PreferWinVer>

:::caution 新机器验机确认前不要联网

联网会激活系统，意味着你通过验机

:::

:::note 联网注册时，系统自动把网络账号名作为默认用户名

 <details className='let-details-to-gray'><summary>更改用户的方法</summary>

登陆系统后运行 `netplwiz` 添加新的本地用户，然后设置 “属性” > “组成员” 为 “管理员”。
如果还要删除老用户，注销切换到新用户进入 `netplwiz` 删除。

</details>

:::

import {
PreferWinVer,
ForWin10,
ForWin11
} from '@theme/PreferWinVer'
