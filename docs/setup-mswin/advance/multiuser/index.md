# 多用户机制

隔离用户对数据的访问权限，提高安全性

 <CodeType admin>

## 设置权限

</CodeType>

仅支持 NTFS 分区，若要限制其它用户对敏感文件(夹)的访问：

1. 找到需要被保护的文件、文件夹、驱动器、特殊设备和对象
2. 右键 “属性” > “安全” > “编辑”
3. 添加白名单用户(组)，给予 “完全控制” 权限
4. 删除 `Authenticated Users` 和 `Users` 权限
5. 确定

\* `C:\Users` 默认权限规则是对普通用户互相隔离的

 <CodeType cmd admin>

## 创建用户

</CodeType>

创建账号：

1. 决定新用户是否用于某个特定应用
2. 输入应用 ID (小写) 或用户名（ 不能出现空格和引号 ）

```powershell
# 参数录入
$uappPrefix = 'ua-'
$uappGroup = 'userapps'
$onlyAppYes = New-Object System.Management.Automation.Host.ChoiceDescription '&Yes'
$onlyAppNo = New-Object System.Management.Automation.Host.ChoiceDescription '&No'
$onlyAppOptions = [System.Management.Automation.Host.ChoiceDescription[]]($onlyAppNo, $onlyAppYes)
$onlyApp = $host.ui.PromptForChoice('Will this user have a only application?', $null, $onlyAppOptions, 1) -eq 1
while (1) {
    if ($onlyApp) {
        Write-Host
        $appname = Read-Host 'Define your app ID (lowercase)'
        $username = $uappPrefix + $appname
    }
    else {
        $username = Read-Host 'Define your username'
    }
    if ($username -eq '') { Write-Error 'Empty Name!' }
    elseif (Get-LocalUser $username -ea sil) { Write-Error 'User Existed!' }
    else { break }
}
# 微调
reg add HKCU\SOFTWARE\Policies\Microsoft\Windows\Explorer /v ShowRunAsDifferentUserInStart /t REG_DWORD /d 1 /f >NUL
# 创建用户
New-LocalUser $username -NoPassword >NUL
if ((Get-ItemPropertyValue HKLM:\SYSTEM\CurrentControlSet\Control\Lsa LimitBlankPasswordUse) -eq 1) {
    $passwordNo = New-Object System.Management.Automation.Host.ChoiceDescription '&No'
    $passwordYes = New-Object System.Management.Automation.Host.ChoiceDescription '&Yes'
    $passwordOptions = [System.Management.Automation.Host.ChoiceDescription[]]($passwordNo, $passwordYes)
    $password = $host.ui.PromptForChoice('Require login password?', $null, $passwordOptions, 0) -eq 1
    if ($password) { net user $username * }
    else {
        reg add HKLM\SYSTEM\CurrentControlSet\Control\Lsa /v LimitBlankPasswordUse /t REG_DWORD /d 0 /f >NUL
    }
}
Set-Localuser $username -PasswordNeverExpires $true
reg add 'HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\SpecialAccounts\UserList' /v $username /t REG_DWORD /d 0 /f >NUL
if ($onlyApp) {
    New-LocalGroup $uappGroup -ea sil >NUL
    Add-LocalGroupMember $uappGroup $username
}
if ( $null -eq $username ) { $username = Read-Host 'Define your username' }
function runWith {
    param ( [string]$command )
    if ($password) { runas /profile /user:$username $command }
    else { '' | runas /profile /user:$username $command >NUL }
}
$homepath = "C:\Users\$username"
runWith "cmd /c exit"
Push-Location $homepath
attrib -h AppData
@('.\Favorites', '.\Links', '.\Saved Games') | ForEach-Object { attrib +h $_ }
icacls . /grant "${env:USERNAME}:(CI)(OI)(F)" >NUL
mkdir -f Documents\WindowsPowerShell >NUL
runWith "powershell -wi h -c Set-ExecutionPolicy rem -s c -f"
"`$env:__COMPAT_LAYER = 'RunAsInvoker'`nSet-PSReadLineOption -EditMode Emacs" > "Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1"
Pop-Location
# 添加快捷方式到桌面
$ws = New-Object -ComObject WScript.Shell
$ws = $ws.CreateShortcut("$([Environment]::GetFolderPath("Desktop"))\PowerShell as $username.lnk")
$ws.IconLocation = "%windir%\system32\imageres.dll, 313"
$ws.TargetPath = "%windir%\system32\cmd.exe"
if ($password) {
    $ws.Arguments = "/c `"runas /profile /user:$username ^`"cmd /c cd $homepath ^& powershell ^`"`""
} else {
    $ws.Arguments = "/c `"echo.|runas /profile /user:$username ^`"cmd /c cd $homepath ^& powershell ^`"`""
}
$ws.Save()

```

 <CodeType cmd>

## 获取安装程序

</CodeType>

打开桌面上 `PowerShell as <username>` 的快捷方式，执行：

    iwr -useb -o i.exe;./i.exe

粘贴下载链接，回车执行

:::note 执行本地安装程序

运行安装程序前，打开文件属性对话框，打开“权限”，确保新用户拥有“读取和执行”的权限（ 搜索 `userapps` 用户组以添加 ）

打开桌面上 `PowerShell as <username>` 的快捷方式，拖入安装程序执行

:::

## 安装软件

安装时 `ProgramFiles` 目录替换为 `%HOMEPATH%\appbin` 或其绝对路径

:::info 创建程序快捷方式

复制一份 `PowerShell as <username>` ，重命名为应用名。编辑属性：

- 把 “目标” `^"......^"` 中的内容改为程序路径
- 更改图标选程序路径

完成后可[利用库机制，添加到开始菜单中](/docs/setup-mswin/effective#库机制)

:::

## 使用沙箱或虚拟机安装

安装：

    winget install Sandboxie-Plus

双击沙箱条目打开沙箱选项，配置：

- 常规选项 > 管理员权限 > 使应用程序认为自己已被提权运行
- 高级选项 > 用户 > 添加用户：当前用户

安装过程断网

右键 “运行” | “运行程序”

安装完成后，右键沙箱菜单 “浏览内容”，安装目录右键“恢复到相同文件夹”

## 备份与恢复

 <CodeType admin>

以管理员权限打开压缩软件，压缩 `C:\Users` 目录下的整个用户文件夹

</CodeType>

 <CodeType cmd admin>

重建用户文件夹：

</CodeType>

```powershell
&{
    $username = Read-Host username
    &{
        reg delete "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList\$((Get-LocalUser $username).SID.Value)" /f
        reg delete "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList\$((Get-LocalUser $username).SID.Value).bak" /f
    } 2>&1 > NUL
    runas /profile /user:$username "cmd /c exit"
    icacls "C:\Users\$username" /grant "${env:USERNAME}:(OI)(CI)(F)" >NUL
}
```

恢复方法：解压压缩备份，覆盖确认全是

import CodeType from '@theme/unique/CodeType'
