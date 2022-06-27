# 系统备份与恢复

## 准备

1. 通过系统更新和搜索，确保系统硬件驱动正常可用
2. 运行 `cleanmgr` 进行系统瘦身清理
3. 建议创建系统还原点

注意：

- 备份前不要加密系统盘
- 若要分发自制系统镜像，不保留或删除敏感数据

## 备份为镜像

1. 系统恢复模式可用或准备 PE U 盘
2. 重启进入恢复系统
3. 挂载 C 盘为系统盘，D 盘作为备份存储空间
4. 执行命令：

&nbsp;

    dism /capture-image /imagefile:D:\backup\system.esd /capturedir:c: /name:my /compress:max /checkintegrity /verify

:::note 参数作用

- `/imagefile` 是备份镜像的完整路径名，也可用压缩率更低但支持旧版系统的 `.wim` 格式
- `/capturedir` 填入系统盘符
- `/name` 名称自定
- 可选参数：`/compress`。`max` 高度压缩，省略即 `fast` 中度压缩，`none` 不压缩
- 可选参数：`/checkintegrity /verify` 错误和完整性校验

:::

## 恢复

以 UEFI + GPT 分区为例，打开 `diskpart` 规划分区:

```bat
REM 命令和子命令可缩写为前三个字母，如：lis dis par 等
REM 帮助文档请在查询命令前加上前缀 h<空格>

REM 枚举并选择可用磁盘
list disk
select disk 0

REM 快速抹去数据，重建 GPT 分区
clean
convert gpt

REM 创建 UEFI 启动分区
create partition efi size=300
format quick fs=fat32 label=EFI
assign letter u

REM 创建 MSR 分区
create partition msr size=128

REM 创建恢复分区（可选）
create partition primary size=666
format quick fs=ntfs label=Recovery
set id=de94bba4-06d1-4d40-a16a-bfd50179d6ac
gpt attributes=0x8000000000000001
assign letter r

REM 创建 Windows 系统分区
create partition primary size=xxx
format quick fs=ntfs label=system
assign letter c

```

300 128 666 是建议的最少容量，单位为 MB。最好把新的系统分区挂载为 C 盘

从镜像中恢复

    dism /apply-image /index:1 /verify /compact /imagefile:D:\backup\system.esd /applydir:c:

:::note 参数作用

- `/index` 一般必填 1
- `/applydir` 目标系统盘
- 可选参数：`/verify` 输出错误信息
- 可选参数：`/compact` 安装时压缩 C 盘系统占用空间，约从 40G 降到 20G

:::

### 添加 UEFI 启动项

    bcdboot c:\windows /s u: /l zh-cn

### 创建恢复分区

1.  确保恢复分区已 NTFS 格式化且挂载到 R 盘
2.  使用 7zip 提取系统安装镜像中 `\sources\install.wim` 的 `1\windows\system32\recovery\winre.wim` 到 `R:\Recovery\WindowsRE` 目录内。
3.  运行

        reagentc /setreimage /path R:\Recovery\WindowsRE

参考文档：

- <https://docs.microsoft.com/zh-cn/windows-hardware/manufacture/desktop/deploy-windows-re?view=windows-11>
- <https://zhuanlan.zhihu.com/p/410257023>
