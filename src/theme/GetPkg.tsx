/// <reference path="../types.d.ts" />
import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

function addItem({
  items,
  expression,
  key,
  label,
  defaultPkgName,
  prefix,
}: {
  items: JSX.Element[];
  expression: any;
  key: string;
  label: string;
  defaultPkgName?: string;
  prefix: string;
}) {
  if (expression)
    items.push(
      <TabItem {...{ key, value: key, label }}>
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
  winget?: true | string;
  pacman?: true | string;
  pipx?: true | string;
  yarn?: true | string;
  longBanner?: boolean;
}) {
  const groupId = (() => {
    let groupId = 'getpkg-';
    const keys = [];
    if (dnf) keys.push('dnf');
    if (apt) keys.push('apt');
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
    expression: dnf,
    key: 'dnf',
    label: 'rpm (Linux)',
    defaultPkgName: name,
    prefix: 'sudo dnf install -y',
  });

  addItem({
    items,
    expression: apt,
    key: 'apt',
    label: 'deb (Linux)',
    defaultPkgName: name,
    prefix: 'sudo apt install -y',
  });

  addItem({
    items,
    expression: scoop,
    key: 'scoop',
    label: 'scoop (Windows)',
    defaultPkgName: name,
    prefix: 'scoop install',
  });

  addItem({
    items,
    expression: winget,
    key: 'winget',
    label: 'winget (Windows)',
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
    label: 'pipx (Python)',
    defaultPkgName: name,
    prefix: 'pipx install',
  });

  addItem({
    items,
    expression: yarn,
    key: 'yarn',
    label: 'yarn (Node.js)',
    defaultPkgName: name,
    prefix: 'yarn global add',
  });
  return (
    <Tabs className={longBanner && 'tabs--block'} groupId={groupId}>
      {items}
    </Tabs>
  );
}
