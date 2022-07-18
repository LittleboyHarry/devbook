---
sidebar_position: 32
description: ...
---

# 中文输入法

import CodeBlock from '@theme/CodeBlock';

:::caution

`sudo` 输入密码时必须关闭中文输入模式，否则输入错误

:::

<br/><br/>

iBus 中文输入体验效果并不理想，作者经常遇到卡顿、输入无响应等问题。fcitx5 可能是更好的开源输入法技术。

import ibusSetupCode from '!!raw-loader!./ibus.sh';

<details>
<summary>仍然使用 iBus 吗？</summary>

<CodeBlock language="shell">{ibusSetupCode}</CodeBlock>

</details>

## 自动配置 fcitx5

<details className='let-details-to-gray'>
  <summary>已安装并配置过 fcitx5? 请备份配置并重置</summary>

    mv ~/.config/fcitx5 backupcfg-fcitx

</details>

import fcitx5SetupCode from '!!raw-loader!./fcitx5.sh';

<CodeBlock language="shell">{fcitx5SetupCode}</CodeBlock>
