:::note 自动部署

使用 `deployworkenv`

    kde/optimize

内容：

1. 注销前免二次确认
2. 最大化时，隐藏窗口标题栏
3. 桌面总览图 ( 5.24 以上版本可用 )

:::

:::note 个性化终端配置

1. 菜单 “设置” > “管理配置方案…” 新建
2. 勾线 “默认配置方案”
3. 命令可改为 `/bin/zsh`
4. 更改字体，推荐 18号 `Cascadia Mono`
5. \* 点击“外观”，选择“黑底白字”，编辑：可设置“背景色透明度” 推荐 23% 附近

:::

:::info 喜欢下拉式终端吗？

<GetPkg name='yakuake' pacman dnf apt />

1. 搜索 `autostart` 设置自动启动 ( 添加 | 添加应用程序 )。
2. 搜索 `yakuake` 打开程序
3. 在弹出对话框中，设置全局快捷键
4. 菜单 “管理配置方案…” 调整，设置默认方案

:::

:::note 自动登录

设置为自动登陆：搜索 `SDDM` 打开“登陆画面”的 `行为设置`，更改 `使用会话`。
勾选“自动登录”、选择是否 wayland 后确定完成

缺点：不支持 kwallet 密码本自动解锁

:::

<!--
 <details className="let-details-to-gray" role="alert">
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

import GetPkg from '@theme/GetPkg'
