/// <reference path="../types.d.ts" />
import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import cs from 'classnames';
import st from './GetPkg.module.scss';

function addItem({
  items,
  expression,
  key,
  label,
  hint,
  defaultPkgName,
  prefix,
}: {
  items: JSX.Element[];
  expression: any;
  key: string;
  label: string;
  hint?: string;
  defaultPkgName?: string;
  prefix: string;
}) {
  if (expression)
    items.push(
      <TabItem attributes={{ title: hint }} {...{ key, value: key, label }}>
        <CodeBlock className="language-shell">
          {`${prefix} ${expression === true ? defaultPkgName : expression}`}
        </CodeBlock>
      </TabItem>
    );
}

export default function GetPkg({
  name,
  dnf,
  apt,
  scoop,
  choco,
  winget,
  pacman,
  pipx,
  yarn,
  longBanner,
}: {
  name?: string;
  dnf?: true | string;
  apt?: true | string;
  scoop?: true | string;
  choco?: true | string;
  winget?: true | string;
  pacman?: true | string;
  pipx?: true | string;
  yarn?: true | string;
  longBanner?: boolean;
}) {
  const groupId = (() => {
    let groupId = 'getpkg-';
    const keys = [];
    if (apt) keys.push('apt');
    if (dnf) keys.push('dnf');
    if (scoop) keys.push('scoop');
    if (winget) keys.push('winget');
    if (pacman) keys.push('pacman');
    if (pipx) keys.push('pipx');
    if (yarn) keys.push('yarn');
    return groupId + keys.join('&');
  })();
  const items: JSX.Element[] = [];

  addItem({
    items,
    expression: apt,
    key: 'apt',
    label: 'apt',
    hint: 'debian 包管理器',
    defaultPkgName: name,
    prefix: 'sudo apt install -y',
  });

  addItem({
    items,
    expression: dnf,
    key: 'dnf',
    label: 'dnf',
    hint: 'RPM 包管理器',
    defaultPkgName: name,
    prefix: 'sudo dnf install -y',
  });

  addItem({
    items,
    expression: scoop,
    key: 'scoop',
    label: 'scoop',
    hint: 'Windows 社区包管理器',
    defaultPkgName: name,
    prefix: 'scoop install',
  });

  addItem({
    items,
    expression: choco,
    key: 'choco',
    label: 'choco',
    hint: 'Windows 商服包管理器',
    defaultPkgName: name,
    prefix: 'sudo choco install',
  });

  addItem({
    items,
    expression: winget,
    key: 'winget',
    label: 'winget',
    hint: 'Windows 官方包管理器',
    defaultPkgName: name,
    prefix: 'winget install',
  });

  addItem({
    items,
    expression: pacman,
    key: 'pacman',
    label: 'pacman',
    defaultPkgName: name,
    prefix: 'yes | sudo pacman -S',
  });

  addItem({
    items,
    expression: pipx,
    key: 'pipx',
    label: 'pipx',
    hint: '改进的 pip',
    defaultPkgName: name,
    prefix: 'pipx install',
  });

  addItem({
    items,
    expression: yarn,
    key: 'yarn',
    label: 'yarn',
    hint: 'Node.js 包管理器',
    defaultPkgName: name,
    prefix: 'yarn global add',
  });

  return (
    <Tabs
      className={cs(longBanner && 'tabs--block', st.root)}
      groupId={groupId}
    >
      {items}
    </Tabs>
  );
}
