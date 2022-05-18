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
const triggers = new Set<(value: Value) => void>();

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
      hint="选择包管理器："
      storeNamePrefix="preferPkgMgr"
      storeFlags={[pacman, apt, dnf]}
      storeKeywords={['pacman', 'apt', 'dnf']}
      keywords={['pacman', 'apt', 'dnf']}
      {...{ defaultValue, context, children, triggers }}
    />
  );
}

export const ForPacman = createScopeComponent(context, 'pacman');
export const ForApt = createScopeComponent(context, 'apt');
export const ForDnf = createScopeComponent(context, 'dnf');
