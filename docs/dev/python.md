## Windows

截至 2022 年，微软商店提供的 python 默认版本有严重问题（ 文件系统操作容易触发沙箱机制 ），请不要使用！

开始菜单搜索 alias 关键词，屏蔽内置推荐的 python。使用 Scoop 安装

    scoop install python
    # 更多版本
    scoop bucket add versions
    scoop search python
