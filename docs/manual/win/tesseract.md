---
title: 截图识字 tesseract
---

<GetPkg name="tesseract" scoop choco />

默认仅支持英文

for Scoop: 建议下载到 `%TESSDATA_PREFIX%` 中 ( [... 其他所有语言](https://github.com/tesseract-ocr/tessdata_fast/) )

<FileItem button name="简体中文识别模型" path="https://cdn.jsdelivr.net/gh/tesseract-ocr/tessdata_fast@main/chi_sim.traineddata" />

### 使用

`Win + Shift + S` 截图后**必须**打开“截图工具”窗口，识别最后一次截图的命令：

    tesseract (ls $env:LOCALAPPDATA\Packages\Microsoft.ScreenSketch_8wekyb3d8bbwe\TempState\ | sort LastWriteTime | select -Last 1).FullName stdout -l chi_sim

删除 `-l chi_sim` 后缀提高纯英文截图的识别效果

import FileItem from '@theme/FileItem'
import GetPkg from '@theme/GetPkg';
