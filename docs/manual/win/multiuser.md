---
title: 多用户隔离
---

## 创建用户

创建账号：

1. 决定新用户是否用于某个特定应用
2. 输入应用 ID (小写) 或用户名（ 不能出现空格和引号 ）

:::info 管理员权限运行

```powershell
& {
    $uappPrefix = 'ua-'
    $uappGroup = 'userapps'

    $onlyAppYes = New-Object System.Management.Automation.Host.ChoiceDescription '&Yes'
    $onlyAppNo = New-Object System.Management.Automation.Host.ChoiceDescription '&No'
    $onlyAppOptions = [System.Management.Automation.Host.ChoiceDescription[]]($onlyAppNo, $onlyAppYes)
    $onlyApp = $host.ui.PromptForChoice('Will this user have a only application?', $null, $onlyAppOptions, 1) -eq 1

    while (1) {
        if ($onlyApp) {
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


    & {
        reg add HKCU\SOFTWARE\Policies\Microsoft\Windows\Explorer /v ShowRunAsDifferentUserInStart /t REG_DWORD /d 1 /f > $null
    }

    New-LocalUser $username -NoPassword > $null
    if ((Get-ItemPropertyValue HKLM:\SYSTEM\CurrentControlSet\Control\Lsa LimitBlankPasswordUse) -eq 1) {
        $passwordNo = New-Object System.Management.Automation.Host.ChoiceDescription '&No'
        $passwordYes = New-Object System.Management.Automation.Host.ChoiceDescription '&Yes'
        $passwordOptions = [System.Management.Automation.Host.ChoiceDescription[]]($passwordNo, $passwordYes)
        $password = $host.ui.PromptForChoice('Require login password?', $null, $passwordOptions, 0) -eq 1

        if ($password) { net user $username * }
        else {
            reg add HKLM\SYSTEM\CurrentControlSet\Control\Lsa /v LimitBlankPasswordUse /t REG_DWORD /d 0 /f > $null
        }
    }
    Set-Localuser $username -PasswordNeverExpires $true
    reg add 'HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\SpecialAccounts\UserList' /v $username /t REG_DWORD /d 0 /f > $null
    if ($onlyApp) {
        New-LocalGroup $uappGroup -ea sil > $null
        Add-LocalGroupMember $uappGroup $username
    }

    function runWith {
        param ( [string]$command)
        if ($password) { runas /profile /user:$username $command }
        else { '' | runas /profile /user:$username $command > $null }
    }
    $homepath = "C:\Users\$username"

    runWith "cmd /c exit"
    icacls $homepath /grant "${env:USERNAME}:(OI)(CI)(F)" > $null

    $profileRoot = "$homepath\Documents\WindowsPowerShell"
    mkdir -f $profileRoot > $null
    runWith "powershell -c Set-ExecutionPolicy rem -s c -f"
    "`$env:__COMPAT_LAYER = 'RunAsInvoker'`nSet-PSReadLineOption -EditMode Emacs`necho `"%LOCALAPPDATA% = `$env:LOCALAPPDATA`"" > "$profileRoot\Microsoft.PowerShell_profile.ps1"

    $ws = New-Object -ComObject WScript.Shell
    $ws = $ws.CreateShortcut("$([Environment]::GetFolderPath("Desktop"))\PowerShell as $username.lnk")
    $ws.IconLocation = "%windir%\system32\imageres.dll, 313"
    $ws.TargetPath = "%windir%\system32\cmd.exe"
    if ($password) {
        $ws.Arguments = "/c `"runas /profile /user:$username ^`"cmd /c cd $homepath ^& powershell ^`"`""
    }
    else {
        $ws.Arguments = "/c `"echo.|runas /profile /user:$username ^`"cmd /c cd $homepath ^& powershell ^`"`""
    }
    $ws.Save()
}

```

:::

## 设置权限

`C:\Users` 默认对普通用户是权限隔离的。若要限制此外的文件夹内容访问：

1. 找到需要被保护的文件、文件夹、驱动器、特殊设备和对象
2. 右键“属性” > “安全” > “编辑”
3. “删除” 删除 `Authenticated Users` 和 `Users`
4. 确定

## 运行程序

运行安装程序前，打开文件属性对话框，打开“权限”，确保新用户拥有“读取和执行”的权限（ 搜索 `userapps` 用户组以添加 ）

打开桌面上 `PowerShell as <username>` 的快捷方式，拖入安装程序执行

安装时 `ProgramFiles` 目录替换为 `%LOCALAPPDATA%` 或其绝对路径

:::info 创建程序快捷方式

复制一份 `PowerShell as <username>` ，重命名为应用名。编辑属性：

- 把 “目标” `^"......^"` 中的内容改为程序路径
- 更改图标选程序路径

完成后可[利用库机制，添加到开始菜单中](/docs/setup-mswin/effective#库机制)

:::
<!--
## 使用沙箱

安装：

    winget install Sandboxie-Plus

双击沙箱条目打开沙箱选项，配置：

- 常规选项 > 管理员权限 > 使应用程序认为自己已被提权运行
- 高级选项 > 用户 > 添加用户：当前用户

右键 “运行” | “运行程序”

安装完成后，右键沙箱菜单 “浏览内容”，找到 `LOCALAPPDATA` 内的安装目录右键“恢复到相同文件夹”
 -->
