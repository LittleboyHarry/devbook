---
title: 关于 Firefox
sidebar_position: 1
---

Firefox 推荐的配置：

- 主页外观优化
- HTTPS Only
- 地址栏（默认使用必应搜索）
- 其它细节

:::note 使用方法

1.  ```shell
    firefox about:profiles
    ```
2.  找到 “正在使用此配置文件” 对应表格的 “根目录” 行上点击“打开目录” （ MSIX 版目录：

        %LOCALAPPDATA%\Packages\Mozilla.Firefox_n80bbvh6b1yt2\LocalCache\Roaming\Mozilla\Firefox\Profiles

3.  下载 <FileItem button name="user.js" path="/config/firefox.js" icon={<ScriptIcon />}/> 到该目录中
4.  重启 Firefox 生效

:::

见后文[推荐扩展](./extensions)

import { ScriptIcon } from '@theme/fai';
import FileItem from '@theme/FileItem'
