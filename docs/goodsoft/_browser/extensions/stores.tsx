import React, { createContext, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconDefinition,
  faChrome,
  faEdge,
} from '@fortawesome/free-brands-svg-icons';
import {
  createScopeComponent,
  createScopeContext,
  PreferScope,
  ScopeOf,
} from '@theme/PreferScope';
import st from './stores.module.scss';

type Value = 'chrome' | 'edge';
const _defaultValue: Value = 'chrome' as Value;
const context = createScopeContext(_defaultValue);

const FirefoxContext = createContext(false);
const ChromiumContext = createContext(false);

export function StoreProvider({
  firefox,
  chromium,
  children,
}: {
  firefox?: boolean;
  chromium?: boolean;
  children: JSX.Element;
}) {
  if (firefox)
    return (
      <FirefoxContext.Provider value={true}>{children}</FirefoxContext.Provider>
    );
  else if (chromium)
    return (
      <ChromiumContext.Provider value={true}>
        <PreferChromiumStore chrome edge>
          {children}
        </PreferChromiumStore>
      </ChromiumContext.Provider>
    );
  else throw new Error();

  function PreferChromiumStore({
    edge,
    chrome,
    defaultValue,
    children,
  }: ScopeOf<Value> & { defaultValue?: Value }) {
    if (!defaultValue) defaultValue = _defaultValue;
    return (
      <PreferScope
        title={<p>选择浏览器商店：</p>}
        className={st.selector}
        storeNamePrefix="preferBrowser"
        storeFlags={[chrome, edge]}
        storeKeywords={['chrome', 'edge']}
        labels={[
          <StoreLabel icon={faChrome} name="Chrome Web Store" />,
          <StoreLabel icon={faEdge} name="Microsoft Edge Addons" />,
        ]}
        {...{ defaultValue, context, children }}
      />
    );

    function StoreLabel({
      name,
      icon,
    }: {
      name: string;
      icon?: IconDefinition;
    }) {
      return (
        <span className={st.label}>
          {icon && <FontAwesomeIcon icon={icon} className={st.icon} />}
          {name}
        </span>
      );
    }
  }
}

const ForChromeWebStore = createScopeComponent(context, 'chrome');
const ForEdgeAddons = createScopeComponent(context, 'edge');

export function Item({
  name,
  desc,
  firefox,
  chrome,
  edge,
}: {
  name: string;
  desc?: string;
  firefox: string;
  chrome: string;
  edge: string;
}) {
  const isFirefox = useContext(FirefoxContext);
  const isChromium = useContext(ChromiumContext);
  const isFirefoxOnly = firefox && !(chrome || edge);

  if (isFirefox)
    return firefox ? <ItemContent {...{ name, desc }} href={firefox} /> : null;
  else if (isChromium)
    return isFirefoxOnly ? null : (
      <>
        <ForChromeWebStore
          children={<ItemContent {...{ name, desc }} href={chrome} />}
        />
        <ForEdgeAddons
          children={<ItemContent {...{ name, desc }} href={edge} />}
        />
      </>
    );
  else throw new Error();

  function ItemContent({
    name,
    desc,
    href,
  }: {
    name: string;
    desc?: string;
    href?: string;
  }) {
    return (
      <li className={st.item}>
        {href ? (
          <>
            <a href={href}>{name}</a>：{desc}
          </>
        ) : (
          <del>
            {name}：{desc}
          </del>
        )}
      </li>
    );
  }
}
