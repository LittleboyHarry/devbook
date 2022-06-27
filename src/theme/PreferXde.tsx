import React from 'react';
import {
  createScopeContext,
  PreferScope,
  ScopeOf,
  createScopeComponent,
} from './PreferScope';

type Value = 'gnome' | 'kde';
const defaultValue: Value = 'gnome';
const context = createScopeContext<Value>(defaultValue);
const triggers = new Set<(value: Value) => void>();

export function PreferXde({
  gnome,
  kde,
  children,
  noSelector,
}: ScopeOf<Value> & { noSelector?: boolean }) {
  return (
    <PreferScope
      storeNamePrefix="preferXde"
      storeFlags={[gnome, kde]}
      storeKeywords={['gnome', 'kde']}
      labels={['GNOME', 'KDE']}
      title="X 桌面环境："
      {...{ defaultValue, context, children, triggers, noSelector }}
    />
  );
}

export const ForGnome = createScopeComponent(context, 'gnome');
export const ForKde = createScopeComponent(context, 'kde');
