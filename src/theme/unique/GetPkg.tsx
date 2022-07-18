import React, { ReactNode } from 'react';
import CodeBlock from '@theme/CodeBlock';

import {
  createScopeContext,
  PreferScope,
  createScopeComponent,
} from './PreferScope';
import CodeType from './CodeType';
import st from './GetPkg.module.scss';

type Value =
  | 'none'
  | 'pacman'
  | 'choco'
  | 'scoop'
  | 'winget'
  | 'flatpak'
  | 'apt'
  | 'pkcon'
  | 'aur'
  | 'dnf'
  | 'pipx'
  | 'yarn';
const defaultValue: Value = 'none';
const context = createScopeContext<Value>(defaultValue);

type Scope = {
  value: Value;
  prefix: string;
  desc: string;
  Component: (props: { children: ReactNode }) => JSX.Element;
};

function pkgmgr(value: Value, prefix: string, desc: string = ''): Scope {
  return {
    value,
    prefix,
    desc,
    Component: createScopeComponent(context, value),
  };
}

const scopes: Scope[] = [
  pkgmgr('pacman', 'sudo pacman -S --noconfirm'),
  pkgmgr('choco', 'gsudo choco install', 'Windows 商服包管理器'),
  pkgmgr('scoop', 'scoop install', 'Windows 社区包管理器'),
  pkgmgr('winget', 'winget install', 'Windows 微软包管理器'),
  pkgmgr('flatpak', 'flatpak install flathub ', 'Linux 开放应用分发技术'),
  pkgmgr('apt', 'sudo apt install -y', 'debian 包管理器'),
  pkgmgr('pkcon', 'pkcon install -y'),
  pkgmgr('aur', 'yay'),
  pkgmgr('dnf', 'sudo dnf install -y', 'RPM 包管理器'),
  pkgmgr('pipx', 'pipx install', '改进的 pip'),
  pkgmgr('yarn', 'yarn global add', 'Node.js 包管理器'),
];

type PkgMgrSet<T extends string> = {
  [key in T]?: string | boolean;
};

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
}: PkgMgrSet<Value> & {
  name?: string;
}) {
  const sortedFlags = [
    pacman,
    choco,
    scoop,
    winget,
    flatpak,
    apt,
    pkcon,
    aur,
    dnf,
    pipx,
    yarn,
  ];

  const values = scopes.map(({ value }) => value);

  const propsMap: Record<Value, string | boolean> = {
    none: false,
    pacman,
    choco,
    scoop,
    winget,
    flatpak,
    apt,
    pkcon,
    aur,
    dnf,
    pipx,
    yarn,
  };

  return (
    <PreferScope
      title={<CodeType cmd>用包管理器安装：</CodeType>}
      storeNamePrefix="preferPkgMgr"
      storeFlags={sortedFlags.map((p) => !!p)}
      storeKeywords={values}
      labels={values}
      hints={scopes.map(({ desc }) => desc)}
      className={st.root}
      choiceClassName={st.choice}
      {...{ defaultValue, context }}
    >
      {scopes.map(({ Component, value, prefix }, i) => {
        const expr = propsMap[value];
        return (
          <Component key={i}>
            <CodeBlock className="language-shell">
              {`${prefix} ${expr === true ? name : expr}`}
            </CodeBlock>
          </Component>
        );
      })}
    </PreferScope>
  );
}
