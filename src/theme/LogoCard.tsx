import React, { ReactNode } from 'react';
import cs from 'classnames';
import st from './LogoCard.module.scss';
import { MouseEventHandler } from 'react';

export default function LogoCard({
  name,
  to,
  logo,
  newtab,
  label,
  onClick,
}: {
  name: string;
  to?: string;
  logo: ReactNode;
  newtab?: boolean;
  label?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <a
      className={cs('card', st.card)}
      href={to || '#'}
      {...(newtab && { target: '_blank' })}
      {...(label && { title: label })}
      onClick={onClick}
    >
      <div className={st.logoSlot}>{logo}</div>
      <p
        className={st.cardTitle}
        style={{ textAlign: 'center', marginBottom: '0.5rem' }}
      >
        {name}
      </p>
    </a>
  );
}

LogoCard.Container = ({ children }: { children: ReactNode }) => {
  return <div style={{ display: 'flex', flexWrap: 'wrap' }}>{children}</div>;
};
