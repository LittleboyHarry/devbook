<div className="no-admonition-uppercase-title">

:::note Konsole 个性化终端

1. 菜单 “设置” > “管理配置方案…” 新建
2. 勾选 “默认配置方案”
3. 命令可改为 <a href='/docs/devenv/zsh' target='_blank'>/bin/zsh</a>
4. \* 点击“外观”，选择“黑底白字”，编辑：可设置“背景色透明度” 推荐 19% 附近

:::

</div>

:::note 喜欢下拉式终端吗？

<GetPkg name='yakuake' pacman dnf apt />

1. 搜索 `autostart` 设置自动启动 ( 添加 | 添加应用程序 )。
2. 搜索 `yakuake` 打开程序
3. 在弹出对话框中，设置全局快捷键
4. 菜单 “管理配置方案…” 调整，设置默认方案

:::

import Require from '/docs/\_deployworkenv.md'

<Require />

:::note 自动部署

使用 `deployworkenv`

    kde/optimize

内容：

1. 注销前免二次确认
2. 最大化时，隐藏窗口标题栏
3. 桌面总览图 ( 5.24 以上版本可用 )

:::

:::note 自动登录

设置为自动登陆：搜索 `SDDM` 打开 “登陆画面” 的 “行为设置”，勾选 “自动登录”（ 注意 “使用会话” 选择 X11 还是 Wayland ）

缺点：不支持 kwallet 密码本自动解锁

:::

<!--
 <details>
<summary>Kubuntu Wayland</summary>

:::caution KDE Wayland 尚在实验开发阶段

常见 bug: 连接外接显示器、重新登陆会话时，界面残缺

:::

```shell
sudo apt install -y plasma-workspace-wayland

# 相关推荐：
sudo apt install -y wl-clipboard
```

然后注销会话，左下角选择 wayland 登陆以生效。

</details>
 -->

import GetPkg from '@theme/unique/GetPkg'
