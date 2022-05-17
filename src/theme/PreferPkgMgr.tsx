import React from 'react';
import {
  createScopeComponent,
  createScopeContext,
  PreferScope,
  ScopeOf,
} from './PreferScope';

type Value = 'apt' | 'dnf' | 'pacman';
const _defaultValue = 'pacman' as Value;
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
      storeNamePrefix="preferPkgMgr"
      storeFlags={[pacman, apt, dnf]}
      storeKeywords={['pacman', 'apt', 'dnf']}
      keywords={['pacman', 'apt', 'dnf']}
      {...{ defaultValue, context, children }}
    />
  );
}

export const ForPacman = createScopeComponent(context, 'pacman');
export const ForApt = createScopeComponent(context, 'apt');
export const ForDnf = createScopeComponent(context, 'dnf');
