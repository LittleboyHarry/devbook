import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

function addTab({
  tabs,
  expression,
  key,
  label,
  defaultPkgName,
  prefix,
}: {
  tabs: JSX.Element[];
  expression: any;
  key: string;
  label: string;
  defaultPkgName?: string;
  prefix: string;
}) {
  if (expression)
    tabs.push(
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
}: {
  name?: string;
  dnf?: true | string;
  apt?: true | string;
  scoop?: true | string;
  winget?: true | string;
  pacman?: true | string;
}) {
  const tabs: JSX.Element[] = [];

  addTab({
    tabs,
    expression: dnf,
    key: 'dnf',
    label: 'rpm (Linux)',
    defaultPkgName: name,
    prefix: 'sudo dnf install -y',
  });

  addTab({
    tabs,
    expression: apt,
    key: 'apt',
    label: 'deb (Linux)',
    defaultPkgName: name,
    prefix: 'sudo apt install -y',
  });

  addTab({
    tabs,
    expression: scoop,
    key: 'scoop',
    label: 'scoop (Windows)',
    defaultPkgName: name,
    prefix: 'scoop install',
  });

  addTab({
    tabs,
    expression: scoop,
    key: 'winget',
    label: 'winget (Windows)',
    defaultPkgName: name,
    prefix: 'winget install',
  });

  addTab({
    tabs,
    expression: pacman,
    key: 'pacman',
    label: 'pacman',
    defaultPkgName: name,
    prefix: 'yes | sudo pacman -S',
  });
  return <Tabs groupId="package-manager">{tabs}</Tabs>;
}
