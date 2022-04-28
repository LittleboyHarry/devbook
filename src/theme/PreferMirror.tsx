import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import cs from 'classnames';
import st from './PreferMirror.module.scss';
import useIsBrowser from '@docusaurus/useIsBrowser';

type MirrorType = 'origin' | 'gitee';
const defaultType: MirrorType = 'origin';
type Options = { [key in MirrorType]?: boolean };

const localStorageKey = 'custom.preferMirror';

const PreferMirrorContext = createContext({
  active: 'origin' as MirrorType,
  setActive(_value: MirrorType) {},
  options: {} as Options,
});

export function PreferMirror({
  origin,
  gitee,
  children,
}: PropsWithChildren<Options>) {
  const isBrowser = useIsBrowser();
  const [active, setActive] = useState<MirrorType>();

  useEffect(() => {
    if (isBrowser)
      setActive(
        (window.localStorage.getItem(localStorageKey) as MirrorType) ||
          defaultType
      );
  }, [isBrowser]);

  return (
    <PreferMirrorContext.Provider
      value={{
        active,
        setActive(value: MirrorType) {
          window.localStorage.setItem(localStorageKey, value);
          setActive(value);
        },
        options: { origin, gitee },
      }}
    >
      <div className="pills pills--block" style={{ marginBottom: '1rem' }}>
        {origin && <RadioChoice type="origin" label="从原渠道获取" />}
        {gitee && <RadioChoice type="gitee" label="从 Gitee" />}
      </div>
      {children}
    </PreferMirrorContext.Provider>
  );
}

function RadioChoice({ type, label }: { type: MirrorType; label: string }) {
  const { active, setActive } = useContext(PreferMirrorContext);
  const checked = active === type;
  return (
    <label
      className={cs(st.choice, 'pills__item', checked && 'pills__item--active')}
    >
      <input
        type="radio"
        value={type}
        name="prefer-mirror"
        checked={checked}
        onChange={({ target: { value } }) => setActive(value as MirrorType)}
      />
      {label}
    </label>
  );
}

export function FromOrigin({ children }: PropsWithChildren<{}>) {
  const { active } = useContext(PreferMirrorContext);

  return active === 'origin' && children;
}

export function FromGitee({ children }: PropsWithChildren<{}>) {
  const { active } = useContext(PreferMirrorContext);

  return active === 'gitee' && children;
}
