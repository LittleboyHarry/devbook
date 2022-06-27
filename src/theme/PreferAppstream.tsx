import React from 'react';
import {
  createScopeContext,
  PreferScope,
  ScopeOf,
  createScopeComponent,
} from './PreferScope';

type Value = 'appstream' | 'pkgmgr';
const defaultValue = 'pkgmgr';
const context = createScopeContext<Value>(defaultValue);
const triggers = new Set<(value: Value) => void>();

export function PreferAppstream({
  appstream,
  pkgmgr,
  children,
  noSelector,
}: ScopeOf<Value> & { noSelector?: boolean }) {
  return (
    <PreferScope
      storeNamePrefix="preferAppstream"
      storeFlags={[appstream, pkgmgr]}
      storeKeywords={['appstream', 'pkgmgr']}
      labels={['是', '否，用原生包管理器']}
      title={
        <>
          在 &nbsp;
          <a href="https://apps.gnome.org/zh-CN/app/org.gnome.Software/">
            GNOME
          </a>{' '}
          或 <a href="https://apps.kde.org/zh-cn/discover/">KDE</a>&nbsp;
          软件中心一键安装：
        </>
      }
      {...{ defaultValue, context, children, triggers, noSelector }}
    />
  );
}

export const WithAppstream = createScopeComponent(context, 'appstream');
export const WithoutAppstream = createScopeComponent(context, 'pkgmgr');
