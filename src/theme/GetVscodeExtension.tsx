import React, { createContext, ReactNode, useContext } from 'react';
import {
  createScopeContext,
  PreferScope,
  ScopeOf,
  createScopeComponent,
} from './PreferScope';
import { LinkButton } from './links';
import { PlusIcon } from './fai';
import st from './GetVscodeExtension.module.scss';

const isSmallerButtonStyleContext = createContext(false);

export default function GetVscodeExtension({ id }: { id: string }) {
  return (
    <>
      <ForVscode children={<GetButton prefix="vscode" {...{ id }} />} />
      <ForOss children={<GetButton prefix="code-oss" {...{ id }} />} />
      <ForVscodium children={<GetButton prefix="vscodium" {...{ id }} />} />
    </>
  );

  function GetButton({ id, prefix }: { id: string; prefix: string }) {
    const isSmaller = useContext(isSmallerButtonStyleContext);

    return (
      <LinkButton
        icon={<PlusIcon />}
        name="获取"
        href={`${prefix}:extension/${id}`}
        small={isSmaller}
      />
    );
  }
}

type Value = 'vscode' | 'oss' | 'vscodium';
const defaultValue: Value = 'oss';
const context = createScopeContext<Value>(defaultValue);
const triggers = new Set<(value: Value) => void>();

export function PreferVscode({
  vscode,
  oss,
  vscodium,
  oneline,
  children,
  noSelector,
}: ScopeOf<Value> & { oneline?: boolean; noSelector?: boolean }) {
  if (!(vscode || oss || vscodium)) vscode = oss = vscodium = true;

  return (
    <PreferScope
      className={oneline && st.oneline}
      storeNamePrefix="preferXde"
      title="VSCode 版本："
      storeFlags={[vscode, oss, vscodium]}
      storeKeywords={['vscode', 'oss', 'vscodium']}
      labels={['VSCode', 'OSS', 'VSCodium']}
      hints={['微软发行版', '源码构建版', '社区维护版']}
      {...{ defaultValue, context, children, triggers, noSelector }}
    />
  );
}

export function SmallerButtonStyle({ children }: { children: ReactNode }) {
  return <isSmallerButtonStyleContext.Provider value {...{ children }} />;
}

export const ForVscode = createScopeComponent(context, 'vscode');
export const ForOss = createScopeComponent(context, 'oss');
export const ForVscodium = createScopeComponent(context, 'vscodium');
