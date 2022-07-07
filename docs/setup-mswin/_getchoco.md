1. 你将信任所有社区提供的安装程序
2. 安装 `gsudo` 提权小程序

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

choco feature enable -n allowGlobalConfirmation # 1.
choco install gsudo # 2.

```
