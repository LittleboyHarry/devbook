import React, {
  createContext,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import cs from 'clsx';
import st from './PreferScope.module.scss';
import useIsBrowser from '@docusaurus/useIsBrowser';

type Context<T> = React.Context<{
  currentValue: T;
  setCurrentValue: (value: T) => void;
}>;

export function createScopeContext<T extends string>(
  defaultValue: T
): Context<T> {
  return createContext({
    currentValue: defaultValue,
    setCurrentValue: (_) => {},
  });
}

export type ScopeOf<T extends string> = PropsWithChildren<{
  [key in T]?: boolean;
}>;

export function PreferScope<T extends string>({
  children,
  defaultValue,
  storeNamePrefix,
  storeFlags,
  storeKeywords,
  context,
  keywords,
}: PropsWithChildren<{
  defaultValue: T;
  storeNamePrefix: string;
  storeFlags: boolean[];
  storeKeywords: T[];
  context: Context<T>;
  keywords: string[];
}>) {
  const isBrowser = useIsBrowser();
  const [currentValue, setCurrentValue] = useState<T>(defaultValue);
  const gid = useMemo(() => {
    let gid = storeNamePrefix + '-';
    const keys = [];
    for (let i = 0; i < storeFlags.length; i++)
      if (storeFlags[i]) {
        keys.push(storeKeywords[i]);
      }
    return gid + keys.join('&');
  }, [storeNamePrefix, storeFlags, storeKeywords]);

  const [loaded, setLoaded] = useState(false);
  useLayoutEffect(() => {
    if (isBrowser) {
      const stored = window.localStorage.getItem(gid) as T;
      if (stored) setCurrentValue(stored);
      setLoaded(true);
    }
  }, [isBrowser, gid]);

  const setter = useCallback(
    (value: T) => {
      window.localStorage.setItem(gid, value);
      setCurrentValue(value);
    },
    [gid]
  );
  const ContextProvider = context.Provider;

  const show = !isBrowser || (isBrowser && loaded);

  return (
    show && (
      <ContextProvider
        value={{
          currentValue,
          setCurrentValue: setter,
        }}
      >
        <div className="pills pills--block" style={{ marginBottom: '1rem' }}>
          {storeFlags.map(
            (flag, i) =>
              flag && (
                <RadioChoice
                  key={i}
                  group={storeNamePrefix}
                  value={storeKeywords[i]}
                  label={keywords[i]}
                  context={context}
                />
              )
          )}
        </div>
        {children}
      </ContextProvider>
    )
  );
}

function RadioChoice<T extends string>({
  value,
  group,
  label,
  context,
}: {
  value: T;
  group: string;
  label: string;
  context: Context<T>;
}) {
  const { currentValue, setCurrentValue } = useContext(context);
  const checked = currentValue === value;
  return (
    <label
      className={cs(st.choice, 'pills__item', checked && 'pills__item--active')}
    >
      <input
        type="radio"
        value={value}
        name={group}
        checked={checked}
        onChange={({ target: { value } }) => setCurrentValue(value as T)}
      />
      {label}
    </label>
  );
}

export function createScopeComponent<T extends string>(
  context: Context<T>,
  scopeValue: T
) {
  return ({ children }: { children: ReactNode }) => {
    const { currentValue } = useContext(context);

    return currentValue === scopeValue && children;
  };
}
