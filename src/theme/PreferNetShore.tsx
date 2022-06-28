import React from 'react';
import {
  createScopeContext,
  PreferScope,
  ScopeOf,
  createScopeComponent,
} from './PreferScope';
import st from './PreferNetShore.module.scss';

type Value = 'offshore' | 'inshore';
const defaultValue: Value = 'offshore';
const context = createScopeContext<Value>(defaultValue);

export function PreferNetShore({ children }: ScopeOf<Value>) {
  return (
    <PreferScope
      title="网络连接："
      storeNamePrefix="preferNetShore"
      storeFlags={[true, true]}
      storeKeywords={['offshore', 'inshore']}
      labels={['离岸互联网', '中国互联网']}
      oneline
      choiceClassName={st.choice}
      {...{ defaultValue, context, children }}
    />
  );
}

export const OffshoreNet = createScopeComponent(context, 'offshore');
export const InshoreNet = createScopeComponent(context, 'inshore');
