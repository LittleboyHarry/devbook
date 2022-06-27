import React from 'react';
import {
  createScopeContext,
  PreferScope,
  ScopeOf,
  createScopeComponent,
} from './PreferScope';

type Value = 'origin' | 'gitee';
const defaultValue: Value = 'origin';
const context = createScopeContext<Value>(defaultValue);
const triggers = new Set<(value: Value) => void>();

export function PreferCodeSource({ origin, gitee, children }: ScopeOf<Value>) {
  return (
    <PreferScope
      title="从代码源："
      storeNamePrefix="preferCodeSource"
      storeFlags={[origin, gitee]}
      storeKeywords={['origin', 'gitee']}
      labels={['原版', 'gitee 镜像']}
      {...{ defaultValue, context, children, triggers }}
    />
  );
}

export const FromOrigin = createScopeComponent(context, 'origin');
export const FromGitee = createScopeComponent(context, 'gitee');
