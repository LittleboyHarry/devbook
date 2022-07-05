# 截图识字技术 tesseract

开源免费

<GetPkg name="tesseract" scoop choco />

<!-- pacman="tesseract tesseract-data-chi_sim" -->

默认仅支持英文。语言文件在 Scoop 版中下载保存到 `%TESSDATA_PREFIX%` 中，在 Choco 版中下载保存到 `C:\Program Files\Tesseract-OCR\tessdata`

import {AddonIcon} from '@theme/unique/fai'

<p>
<FileItem button icon={<AddonIcon/>} name="简体中文识别模型" path="https://cdn.jsdelivr.net/gh/tesseract-ocr/tessdata_fast@main/chi_sim.traineddata" />
&emsp;
<a href="https://github.com/tesseract-ocr/tessdata_fast/">... 其他所有语言</a>
</p>



### 使用

新建快捷方式，输入指令并命名 “截图中文识别”：

    powershell -c tesseract (ls $env:LOCALAPPDATA\Packages\Microsoft.ScreenSketch_8wekyb3d8bbwe\TempState\ | sort LastWriteTime | select -Last 1).FullName stdout -l chi_sim;[Console]::ReadKey()

> 删除 `-l chi_sim` 后缀用于纯英文截图的识别

`Win + Shift + S` 截图后**必须**打开“截图工具”（*仅 Win10 新系统可用*）窗口以便识别，按任意键退出

import FileItem from '@theme/unique/FileItem'
import GetPkg from '@theme/unique/GetPkg';
