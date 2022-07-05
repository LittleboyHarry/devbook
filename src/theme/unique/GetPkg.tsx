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
  Component: (props: { children: ReactNode }) => JSX.Element;
};

function pkgmgr(value: Value, prefix: string): Scope {
  return {
    value,
    prefix,
    Component: createScopeComponent(context, value),
  };
}

const scopes: Scope[] = [
  pkgmgr('pacman', 'sudo pacman -S --noconfirm'),
  pkgmgr('choco', 'gsudo choco install'),
  pkgmgr('scoop', 'scoop install'),
  pkgmgr('winget', 'winget install'),
  pkgmgr('flatpak', 'flatpak install flathub '),
  pkgmgr('apt', 'sudo apt install -y'),
  pkgmgr('pkcon', 'pkcon install -y'),
  pkgmgr('aur', 'yay'),
  pkgmgr('dnf', 'sudo dnf install -y'),
  pkgmgr('pipx', 'pipx install'),
  pkgmgr('yarn', 'yarn global add'),
];

type PkgMgrSet<T extends string> = {
  [key in T]?: string | boolean;
};

export default function GetPkg({
  name,
  longBanner,
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
  longBanner?: boolean;
}) {
  const propsMap: Partial<Record<Value, string | boolean | undefined>> = {
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
      storeFlags={[
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
      ].map((p) => !!p)}
      storeKeywords={[
        'pacman',
        'choco',
        'scoop',
        'winget',
        'flatpak',
        'apt',
        'pkcon',
        'aur',
        'dnf',
        'pipx',
        'yarn',
      ]}
      labels={[
        'pacman',
        'choco',
        'scoop',
        'winget',
        'flatpak',
        'apt',
        'pkcon',
        'aur',
        'dnf',
        'pipx',
        'yarn',
      ]}
      hints={[
        '',
        'Windows 商服包管理器',
        'Windows 社区包管理器',
        'Windows 微软包管理器',
        'Linux 开放应用分发技术',
        'debian 包管理器',
        '',
        '',
        'RPM 包管理器',
        '改进的 pip',
        'Node.js 包管理器',
      ]}
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
