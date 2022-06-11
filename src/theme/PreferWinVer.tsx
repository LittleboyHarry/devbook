import React from 'react';
import {
  createScopeContext,
  PreferScope,
  ScopeOf,
  createScopeComponent,
} from './PreferScope';

type Value = 'win10' | 'win11';
const defaultValue: Value = 'win11';
const context = createScopeContext<Value>(defaultValue);
const triggers = new Set<(value: Value) => void>();

export function PreferWinVer({
  win10,
  win11,
  children,
  noSelector,
}: ScopeOf<Value> & { noSelector?: boolean }) {
  return (
    <PreferScope
      storeNamePrefix="preferWinVer"
      storeFlags={[win10, win11]}
      storeKeywords={['win10', 'win11']}
      keywords={['Win 10', 'Win 11']}
      hint="系统版本："
      {...{ defaultValue, context, children, triggers, noSelector }}
    />
  );
}

export const ForWin10 = createScopeComponent(context, 'win10');
export const ForWin11 = createScopeComponent(context, 'win11');
