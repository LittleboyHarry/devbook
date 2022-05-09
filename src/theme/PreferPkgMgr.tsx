import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import cs from 'clsx';
import st from './PreferPkgMgr.module.scss';
import useIsBrowser from '@docusaurus/useIsBrowser';

type PkgMgrType = 'apt' | 'dnf' | 'pacman';
type Options = { [key in PkgMgrType]?: boolean };

const PreferPkgMgrContext = createContext({
  active: 'dnf' as PkgMgrType,
  setActive(_value: PkgMgrType) {},
  options: {} as Options,
});

export function PreferPkgMgr({
  apt,
  dnf,
  pacman,
  children,
}: PropsWithChildren<Options>) {
  const isBrowser = useIsBrowser();
  const [active, setActive] = useState<PkgMgrType>('dnf');
  const gid = useMemo(() => {
    let gid = 'cpreferPkgMgr-';
    const keys = [];
    if (apt) keys.push('apt');
    if (dnf) keys.push('dnf');
    if (pacman) keys.push('pacman');
    return gid + keys.join('&');
  }, [apt, dnf, pacman]);

  useEffect(() => {
    if (isBrowser) setActive(window.localStorage.getItem(gid) as PkgMgrType);
  }, [isBrowser, gid]);

  return (
    <PreferPkgMgrContext.Provider
      value={{
        active,
        setActive: useCallback(
          (value: PkgMgrType) => {
            window.localStorage.setItem(gid, value);
            setActive(value);
          },
          [gid]
        ),
        options: { apt, dnf, pacman },
      }}
    >
      <div className="pills pills--block" style={{ marginBottom: '1rem' }}>
        {apt && <RadioChoice type="apt" label="dpkg - apt" />}
        {dnf && <RadioChoice type="dnf" label="RPM - dnf" />}
        {pacman && <RadioChoice type="pacman" label="pacman" />}
      </div>
      {children}
    </PreferPkgMgrContext.Provider>
  );
}

function RadioChoice({ type, label }: { type: PkgMgrType; label: string }) {
  const { active, setActive } = useContext(PreferPkgMgrContext);
  const checked = active === type;
  return (
    <label
      className={cs(st.choice, 'pills__item', checked && 'pills__item--active')}
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

export function ForPacman({ children }: PropsWithChildren<{}>) {
  const { active } = useContext(PreferPkgMgrContext);

  return active === 'pacman' && children;
}
