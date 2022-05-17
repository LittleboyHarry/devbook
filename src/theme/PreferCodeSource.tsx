import React from 'react';
import {
  createScopeContext,
  PreferScope,
  ScopeOf,
  createScopeComponent,
} from './PreferScope';

type Value = 'origin' | 'gitee';
const defaultValue = 'origin';
const context = createScopeContext<Value>(defaultValue);

export function PreferCodeSource({ origin, gitee, children }: ScopeOf<Value>) {
  return (
    <PreferScope
      storeNamePrefix="preferCodeSource"
      storeFlags={[origin, gitee]}
      storeKeywords={['origin', 'gitee']}
      keywords={['从源获取', '从 gitee 获取']}
      {...{ defaultValue, context, children }}
    />
  );
}

export const FromOrigin = createScopeComponent(context, 'origin');
export const FromGitee = createScopeComponent(context, 'gitee');
