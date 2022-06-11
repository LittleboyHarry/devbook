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
  pkcon,
  aur,
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
  aur?: true | string;
  pacman?: true | string;
  pkcon?: true | string;
  dnf?: true | string;
  pipx?: true | string;
  yarn?: true | string;
  longBanner?: boolean;
}) {
  const gid = useMemo(() => {
    let groupId = 'getpkg-';
    const l: string[] = [];
    if (choco) l.push('choco');
    if (scoop) l.push('scoop');
    if (winget) l.push('winget');
    if (flatpak) l.push('flatpak');
    if (apt) l.push('apt');
    if (pacman) l.push('pacman');
    if (dnf) l.push('dnf');
    if (pipx) l.push('pipx');
    if (yarn) l.push('yarn');
    if (aur) l.push('aur');
    if (pkcon) l.push('pkcon');
    return groupId + l.join('&');
  }, [apt, dnf, scoop, winget, pacman, pipx, yarn, pkcon]);

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
    expression: pacman,
    key: 'pacman',
    label: 'pacman',
    defaultPkgName: name,
    prefix: 'sudo pacman -S --noconfirm',
  });

  addItem({
    items,
    expression: pkcon,
    key: 'pkcon',
    label: 'pkcon',
    defaultPkgName: name,
    prefix: 'pkcon install -y',
  });

  addItem({
    items,
    expression: aur,
    key: 'aur',
    label: 'aur',
    defaultPkgName: name,
    prefix: 'paru',
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

  if (items.length <= 0) throw 'Empty GetPkg';

  if (items.length == 1) return <div className={st.solo}>{items[0]}</div>;

  return (
    <Tabs className={cs(longBanner && 'tabs--block', st.root)} groupId={gid}>
      {items}
    </Tabs>
  );
}
