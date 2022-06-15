---
title: VSCode 扩展推荐
sidebar_position: 3
---

<div className={'no-table-header no-table-border full-width-table '+st.root}>

## 必装推荐

|                              |                |                                                    |
| ---------------------------- | -------------- | -------------------------------------------------- |
| [GitLens][gitlens]           | Git 功能强化   | <GetVscExt small id="eamodio.gitlens" />           |
| [Prettier][prettier]         | 前端代码格式化 | <GetVscExt small id="esbenp.prettier-vscode" />    |
| [EditorConfig][editorconfig] | 格式统一化     | <GetVscExt small id="EditorConfig.EditorConfig" /> |

[gitlens]: https://www.gitkraken.com/gitlens/features
[prettier]: https://prettier.io/
[editorconfig]: https://editorconfig.org/

## 编程语言支持

|        |                                           |
| ------ | ----------------------------------------- |
| Python | <GetVscExt small id="ms-python.python" /> |

## 补充推荐

|              |                |                                                         |
| ------------ | -------------- | ------------------------------------------------------- |
| Git Graph    | 图形化的 `tig` | <GetVscExt small id="mhutchie.git-graph" />             |
| vscode-icons | 更好看的图标   | <GetVscExt small id="vscode-icons-team.vscode-icons" /> |
| Open         | 外部打开文件   | <GetVscExt small id="sandcastle.vscode-open" />         |
| change-case  | 大小写转换     | <GetVscExt small id="wmaurer.change-case" />            |

<br/>

**Remote Development**：支持 SSH, WSL, container

<p><GetVscExt id="ms-vscode-remote.vscode-remote-extensionpack" msOnly /></p>

<!-- vscode-icons 安装后，右下角 Active 按钮激活 -->

<br/>

## 商业服务

<h3>Tabnine</h3>

免费 AI 补全：

- 优点：离线使用、可关闭遥测服务
- 缺点：内存消耗高、免费版仅供单行使用

<p><GetVscExt id="tabnine.tabnine-vscode"/></p>

<h3>GitHub Copilot</h3>

<p><GetVscExt id="GitHub.copilot" msOnly /></p>

</div>

import st from './extensions.module.scss';
import { LinkButton } from '@theme/links';
import GetVscExt from '@theme/GetVscExt';
