import React, { ReactNode } from 'react';
import { faShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import st from './UacIcon.module.scss';
import cs from 'clsx';

export default function UacIcon({ slot }: { slot?: ReactNode }) {
  return (
    <span className={st.root}>
      {slot}
      <span className={cs('fa-layers fa-fw', slot && st.protected)}>
        <Clip v="t" h="l" c="#20a3e6" />
        <Clip v="t" h="r" c="#fed400" />
        <Clip v="b" h="r" c="#0e8bdb" />
        <Clip v="b" h="l" c="#fec700" />
      </span>
    </span>
  );
}

type V = 't' | 'b';
type H = 'l' | 'r';

function Clip({ v, h, c }: { v: V; h: H; c: string }) {
  const def: ([V, V] | [H, H])[] = [
    [v, 'b'],
    [h, 'l'],
    [v, 't'],
    [h, 'r'],
  ];

  return (
    <FontAwesomeIcon
      icon={faShield}
      color={c}
      stroke="var(--ifm-color-emphasis-200)"
      strokeWidth={48}
      style={{
        clipPath: `inset(${def.map(([v, e]) => cutIfEq(v, e)).join(' ')})`,
      }}
    />
  );

  function cutIfEq<T extends V | H>(value: T, expect: T) {
    return value === expect ? '50%' : '-8px';
  }
}
