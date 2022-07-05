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
      labels={['Win 10', 'Win 11']}
      title="系统版本："
      oneline
      {...{ defaultValue, context, children, noSelector }}
    />
  );
}

export const ForWin10 = createScopeComponent(context, 'win10');
export const ForWin11 = createScopeComponent(context, 'win11');
