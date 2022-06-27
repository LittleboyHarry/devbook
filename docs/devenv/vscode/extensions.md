---
sidebar_position: 3
---

# VSCode 扩展推荐

 <div className={st.root}><div className='no-table-header no-table-border'>
 <PreferVscode vscode oss vscodium>
 <SmallerButtonStyle>

## 必装推荐

|                              |                |                                                 |
| ---------------------------- | -------------- | ----------------------------------------------- |
| [GitLens][gitlens]           | Git 功能强化   | <GetVscodeExtension id="eamodio.gitlens" />           |
| [Prettier][prettier]         | 前端代码格式化 | <GetVscodeExtension id="esbenp.prettier-vscode" />    |
| [EditorConfig][editorconfig] | 格式统一化     | <GetVscodeExtension id="EditorConfig.EditorConfig" /> |

[gitlens]: https://www.gitkraken.com/gitlens/features
[prettier]: https://prettier.io/
[editorconfig]: https://editorconfig.org/

## 编程语言支持

|        |                                        |
| ------ | -------------------------------------- |
| Python | <GetVscodeExtension id="ms-python.python" /> |

## 补充推荐

|              |                |                                                      |
| ------------ | -------------- | ---------------------------------------------------- |
| Git Graph    | 图形化的 `tig` | <GetVscodeExtension id="mhutchie.git-graph" />             |
| vscode-icons | 更好看的图标   | <GetVscodeExtension id="vscode-icons-team.vscode-icons" /> |
| Open         | 外部打开文件   | <GetVscodeExtension id="sandcastle.vscode-open" />         |
| change-case  | 大小写转换     | <GetVscodeExtension id="wmaurer.change-case" />            |

</SmallerButtonStyle>

<br/>

 <ForVscode>

**Remote Development**：支持 SSH, WSL, container

<p><GetVscodeExtension id="ms-vscode-remote.vscode-remote-extensionpack" msOnly /></p>

</ForVscode>

<!-- vscode-icons 安装后，右下角 Active 按钮激活 -->

## 商业服务

<h3>Tabnine</h3>

免费 AI 补全：

- 优点：离线使用、可关闭遥测服务
- 缺点：内存消耗高、免费版仅供单行使用

<p><GetVscodeExtension id="tabnine.tabnine-vscode" /></p>

 <ForVscode>

<h3>GitHub Copilot</h3>

<p><GetVscodeExtension id="GitHub.copilot" /></p>

</ForVscode>

</PreferVscode>

</div></div>

import st from './extensions.module.scss';
import { LinkButton } from '@theme/links';
import GetVscodeExtension, { PreferVscode, ForVscode, SmallerButtonStyle } from '@theme/GetVscodeExtension';
