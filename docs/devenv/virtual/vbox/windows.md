# Windows 虚拟机

免安装的虚拟机镜像。启动后仅持续 90 天可用，可通过快照重置恢复。

import { DownloadButton } from '@theme/unique/links';

<p>
<DownloadButton href="https://az792536.vo.msecnd.net/vms/VMBuild_20150916/VirtualBox/IE8/IE8.Win7.VirtualBox.zip" name="Win7 (x86)" />
<DownloadButton href="https://az792536.vo.msecnd.net/vms/VMBuild_20190311/VirtualBox/MSEdge/MSEdge.Win10.VirtualBox.zip" name="Win10 (amd64)" />
</p>

推荐使用迅雷加速下载

## 导入虚拟机

- 适当添加处理器数（ 在 WSL/HyperV 环境下，技术限制仅支持 1 ）
- 内存建议最少在 1\~2G 之间
- 设置默认虚拟电脑位置（ 一般保留默认位置 ）

## 设置虚拟机

- 常规：可选 “虚拟盘加密”
- 显示：
  - 屏幕：“显卡控制器” 应为 **VBoxSVGA**屏幕，
  - 远程桌面：关闭
- 存储：点击添加 虚拟 光驱的小图标，
  添加虚拟光盘 VBoxGuestAdditions.iso

启动前，进入到快照管理面板，生成 imported 快照

## 启动并配置

默认用户 IEUser 登陆密码：`Passw0rd!`

:::note 安装中文

确保虚拟机可以连接网络，点击左下角搜索栏，输入 `Language Settings` 点击 "Add a language" 搜索添加 `china`。去掉 Speech 和 Handwriting 可选项后 Install

:::

:::note 更改密码

右键左下角 Windows 图标，选择菜单项 Windows PowerShell (Admin), 确定并运行：

    net user ieuser *

按两次回车清除密码以便自动登陆

:::

:::note 安装虚拟机增强功能

打开文件资源管理器，"This PC" 进入安装盘，双击 "VBoxWindowsAdditions.exe" 安装。重启生效

打开虚拟机菜单 “设备” 然后调整 “共享剪贴板” 和 “拖拽” \*

\* 不支持 wayland 模式，可能需要 `QT_QPA_PLATFORM=xcb` 强制 X11 模式启动应用

:::
