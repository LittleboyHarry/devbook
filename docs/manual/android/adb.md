# ADB

## 安装工具

<GetPkg name='adb' choco scoop />

## [激活手机开发者模式](https://developer.android.google.cn/studio/debug/dev-options)

显示开发者模式的方法：

1. 打开设置，“关于手机”
2. 连续点击软件版本号 7 次

随后在设置中打开“开发者选项”，打开 USB 调试

## 连接设备

    adb devices -l

:::info 留意手机信息，授权调试
:::

\* 如果有连接了多个设备，需要使用 `-d`、`-e` 或 `-s` 选项指定应向其发送命令的目标设备

## 推荐命令

卸载并清除所有第三方应用

    adb shell 'for it in $(pm list package -3 | sed s/^package://);do pm uninstall $it & done'

:::caution 可能会被系统拦截失败
:::

## 常用操作

### 安装程序

    adb install <apk_filepath>

:::note 留意手机信息，可能会被系统拦截
:::

### 文件交换

    adb pull <remote> <local>

    adb push <local> <remote>

remote 是 POSIX 绝对路径名

### Shell

    adb shell

import GetPkg from '@theme/GetPkg';
