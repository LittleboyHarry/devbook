/// <reference path="../types.d.ts" />
import React, { useMemo } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import cs from 'clsx';
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
  choco,
  scoop,
  winget,
  flatpak,
  apt,
  pacman,
  dnf,
  pipx,
  yarn,
  longBanner,
}: {
  name?: string;
  choco?: true | string;
  scoop?: true | string;
  winget?: true | string;
  flatpak?: string;
  apt?: true | string;
  pacman?: true | string;
  dnf?: true | string;
  pipx?: true | string;
  yarn?: true | string;
  longBanner?: boolean;
}) {
  const gid = useMemo(() => {
    let groupId = 'getpkg-';
    const keys = [];
    if (choco) keys.push('choco');
    if (scoop) keys.push('scoop');
    if (winget) keys.push('winget');
    if (flatpak) keys.push('flatpak');
    if (apt) keys.push('apt');
    if (pacman) keys.push('pacman');
    if (dnf) keys.push('dnf');
    if (pipx) keys.push('pipx');
    if (yarn) keys.push('yarn');
    return groupId + keys.join('&');
  }, [apt, dnf, scoop, winget, pacman, pipx, yarn]);

  const items: JSX.Element[] = [];

  addItem({
    items,
    expression: flatpak,
    key: 'flatpak',
    label: 'Flatpak',
    hint: 'Linux 开放应用分发技术',
    prefix: 'flatpak install flathub ',
  });

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

  if (items.length <= 0) throw 'Empty GetPkg';

  if (items.length == 1) return <div className={st.sole}>{items[0]}</div>;

  return (
    <Tabs className={cs(longBanner && 'tabs--block', st.root)} groupId={gid}>
      {items}
    </Tabs>
  );
}
