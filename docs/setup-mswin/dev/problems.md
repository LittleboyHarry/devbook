# Windows 开发问题

## 网络问题

### 部分 UWP 类不支持全局代理

安装限网解锁器

```
scoop install https://cdn.jsdelivr.net/gh/hoilc/scoop-lemon@5c091137dfb9b4d2fca626c3086076587c64ad4d/bucket/enable-loopback.json
cmd /c reg add "HKCU\Software\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers" /v "%USERPROFILE%\scoop\apps\enable-loopback\current\EnableLoopback.exe" /t REG_SZ /f /d "~ HIGHDPIAWARE"

```
