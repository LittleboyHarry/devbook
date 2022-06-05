:::note KDE 推荐配置

```shell
# 注销前免二次确认
kwriteconfig5 --file ksmserverrc --group General --key confirmLogout false
# 桌面总览图 ( 5.24 以上版本可用，触发快捷键为 Super+W )
kwriteconfig5 --file kwinrc --group Plugins --key overviewEnabled true
# 外观优化
kwriteconfig5 --file kwinrc --group Plugins --key kwin4_effect_dimscreenEnabled true
```

最大化时，隐藏窗口标题栏：
按 `Super + PageUp` 切换最大化窗口状态，配置方法如下

    kwriteconfig5 --file ~/.config/kwinrc --group Windows --key BorderlessMaximizedWindows true
    qdbus org.kde.KWin /KWin reconfigure

:::

:::note 个性化终端配置

1. 菜单 “设置” > “管理配置方案…” 新建
2. 勾线 “默认配置方案”
3. 命令可改为 `/bin/zsh`
4. \* 点击外观，选择“黑底白字”编辑：可设置“背景色透明度”

:::

:::note 自动登录

设置为自动登陆：搜索 `SDDM` 打开“登陆画面”的 `行为设置`，更改 `使用会话`

缺点：不支持 kwallet 密码本自动解锁

:::

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
