import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import cs from 'classnames';
import st from './PreferPkgMgr.module.scss';
import useIsBrowser from '@docusaurus/useIsBrowser';

type PkgMgrType = 'apt' | 'dnf';
type Options = { [key in PkgMgrType]?: boolean };

const localStorageKey = 'custom.preferPkgMgr';

const PreferPkgMgrContext = createContext({
  active: 'dnf',
  setActive(_value: PkgMgrType) {},
  options: {} as Options,
});

export function PreferPkgMgrScope({
  apt,
  dnf,
  children,
}: PropsWithChildren<Options>) {
  const isBrowser = useIsBrowser();
  const [active, setActive] = useState<PkgMgrType>('dnf');

  useEffect(() => {
    if (isBrowser)
      setActive(window.localStorage.getItem(localStorageKey) as PkgMgrType);
  }, [isBrowser]);

  return (
    <PreferPkgMgrContext.Provider
      value={{
        active,
        setActive(value: PkgMgrType) {
          window.localStorage.setItem(localStorageKey, value);
          setActive(value);
        },
        options: { apt, dnf },
      }}
    >
      {children}
    </PreferPkgMgrContext.Provider>
  );
}

function RadioChoice({
  test,
  type,
  label,
}: {
  test?: boolean;
  type: PkgMgrType;
  label: string;
}) {
  const { active, setActive } = useContext(PreferPkgMgrContext);
  const checked = active === type;
  return (
    test && (
      <label
        className={cs(
          st.choice,
          'pills__item',
          checked && 'pills__item--active'
        )}
      >
        <input
          type="radio"
          value={type}
          name="prefer-pkgmgr"
          checked={checked}
          onChange={({ target: { value } }) => setActive(value as PkgMgrType)}
        />
        {label}
      </label>
    )
  );
}

export function PkgMgrSelector({}: {}) {
  const {
    options: { apt, dnf },
  } = useContext(PreferPkgMgrContext);

  const items: JSX.Element[] = [];

  return (
    <div className="pills pills--block" style={{ marginBottom: '1rem' }}>
      <RadioChoice test={apt} type="apt" label="apt" />
      <RadioChoice test={dnf} type="dnf" label="dnf" />
    </div>
  );
}

export function ForApt({ children }: PropsWithChildren<{}>) {
  const { active } = useContext(PreferPkgMgrContext);

  return active === 'apt' && children;
}

export function ForDnf({ children }: PropsWithChildren<{}>) {
  const { active } = useContext(PreferPkgMgrContext);

  return active === 'dnf' && children;
}
