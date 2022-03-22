---
title: bat
---

安装

import GetPkg from '@theme/GetPkg';

<GetPkg name="bat" dnf apt scoop/>

<details>
    <summary>针对 Debian</summary>

`batcat` 才是 Debian 专用的程序名，此是技术问题。可调整过来：

    echo alias bat=batcat | tee -a ~/.bashrc ~/.zshrc > /dev/null

</details>
