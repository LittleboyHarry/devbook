---
title: 扩展
---

## 必装类

扩展名 - 作用，安装到：

<div className="no-table-header no-table-border">

|              |                |                                            |
| ------------ | -------------- | ------------------------------------------ |
| GitLens      | Git 功能强化   | <GetButtons small id="eamodio.gitlens" />           |
| Git Graph    | Git 树可视化   | <GetButtons small id="mhutchie.git-graph" />        |
| Prettier     | 前端代码格式化 | <GetButtons small id="esbenp.prettier-vscode" />    |
| EditorConfig | 格式统一化     | <GetButtons small id="EditorConfig.EditorConfig" /> |

</div>

## 补充类

**vscode-icons** 更好看的图标：安装后，右下角 Active 按钮激活

<GetButtons id="vscode-icons-team.vscode-icons" msOnly />

**Remote Development** 远程开发：支持 SSH, WSL, container

<GetButtons id="ms-vscode-remote.vscode-remote-extensionpack" msOnly />

## 商业服务

Tabnine 免费 AI 补全：

- 优点：离线使用、可关闭遥测服务
- 缺点：内存消耗高、免费版仅供单行使用

<GetButtons id="tabnine.tabnine-vscode"/>

GitHub Copilot

<GetButtons id="GitHub.copilot"/>



import { LinkButton } from '@theme/links';

export function GetButtons({ id, msOnly, small }) {
  return (
    <>
      安装到：
      <LinkButton outline href={'vscode:extension/' + id} name="VSCode" small={small} />
      {!msOnly && (
        <LinkButton outline href={'vscodium:extension/' + id} name="VSCodium" small={small} />
      )}
    </>
  );
}
