---
title: 避免广告追踪
---

## 隐私设置

    about:settings/privacy

    about:settings/search

关闭搜索建议

## 自动切换为 HTTPS

    about:flags/#edge-automatic-https

激活后配置：

    about:settings/privacy

## 推荐：自动清除 Cookie

首先添加多一个配置，用于个人日常网站登陆，另一个设置自动清理：

    about:settings/clearBrowsingDataOnClose

:::info 应用启动配置

在 `cd ~/.local/share/applications/` 中复制一份 `microsoft-edge.desktop` 并编辑

- `Name` 为应用名称
- 为 `Exec=` 添加启动参数 `--profile-directory="Default"` 或 `Profile n`
  以绑定浏览器默认的启动配置
- `[Desktop Action *]` 条目记录了子菜单信息，无需可删

:::
