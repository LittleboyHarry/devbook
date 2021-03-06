import React from 'react';
import {
  createScopeComponent,
  createScopeContext,
  PreferScope,
  ScopeOf,
} from './PreferScope';

type Value = 'apt' | 'dnf' | 'pacman';
const _defaultValue: Value = 'pacman' as Value;
const context = createScopeContext(_defaultValue);

export function PreferPkgMgr({
  pacman,
  apt,
  dnf,
  defaultValue,
  children,
}: ScopeOf<Value> & { defaultValue?: Value }) {
  if (!defaultValue) defaultValue = _defaultValue;
  return (
    <PreferScope
      title="你的包管理器："
      storeNamePrefix="preferPkgMgr"
      storeFlags={[pacman, apt, dnf]}
      storeKeywords={['pacman', 'apt', 'dnf']}
      labels={['pacman', 'apt', 'dnf']}
      {...{ defaultValue, context, children }}
    />
  );
}

export const ForPacman = createScopeComponent(context, 'pacman');
export const ForApt = createScopeComponent(context, 'apt');
export const ForDnf = createScopeComponent(context, 'dnf');
