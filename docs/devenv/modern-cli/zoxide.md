pwd 目录切换辅助

import GetPkg from '@theme/GetPkg';

<GetPkg name="zoxide" dnf apt scoop pacman />

## 集成

bash/zsh:

```shell
printf 'eval "$(zoxide init bash)"\n' >> ~/.bashrc
printf 'eval "$(zoxide init zsh)"\n' >> ~/.zshrc
```

PowerShell `$profile`:

```powershell
## For zoxide v0.8.0+
Invoke-Expression (& {
    $hook = if ($PSVersionTable.PSVersion.Major -lt 6) { 'prompt' } else { 'pwd' }
    (zoxide init --hook $hook powershell | Out-String)
})

## For older versions of zoxide
Invoke-Expression (& {
    $hook = if ($PSVersionTable.PSVersion.Major -lt 6) { 'prompt' } else { 'pwd' }
    (zoxide init --hook $hook powershell) -join "`n"
})
```

### fzf

输入 `zi` 搜索记录
