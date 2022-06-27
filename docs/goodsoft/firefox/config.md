---
sidebar_position: 1
---

# Firefox 配置

作者的推荐配置：

1.  打开配置文件信息页：

        firefox about:profiles

2.  找到 “正在使用此配置文件” 对应表格的 “根目录” 行上点击 “打开目录”

3.  下载&nbsp;<FileItem button name="user.js" path="/config/firefox/user.js" icon={<ScriptIcon />}/> 到该目录中
4.  重启 Firefox 生效

<details>
<summary>附：Windows MSIX 版目录</summary>

    %LOCALAPPDATA%\Packages\Mozilla.Firefox_n80bbvh6b1yt2\LocalCache\Roaming\Mozilla\Firefox\Profiles

默认在 `.default-release` 内

</details>

<br/>

手动配置：默认搜索引擎

import { ScriptIcon } from '@theme/fai';
import FileItem from '@theme/FileItem'
