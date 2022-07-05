import React, { ReactNode } from 'react';
import cs from 'clsx';
import st from './LogoCard.module.scss';
import { MouseEventHandler } from 'react';
import Link from '@docusaurus/Link';

export default function LogoCard({
  name,
  to,
  logo,
  label,
  noNewTab,
  onClick,
}: {
  name: ReactNode;
  to?: string;
  logo: ReactNode;
  label?: string;
  noNewTab?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <Link
      {...{
        className: cs('card', st.card),
        href: to || '#',
        title: label,
        style: { cursor: label ? 'help' : 'pointer' },
        target: noNewTab ? '_self' : '_blank',
        onClick,
      }}
    >
      <div className={st.logoSlot}>{logo}</div>
      <p
        className={st.cardTitle}
        style={{ textAlign: 'center', marginBottom: '0.5rem' }}
      >
        {name}
      </p>
    </Link>
  );
}

LogoCard.Container = ({ children }: { children: ReactNode }) => {
  return <div className={st.container}>{children}</div>;
};
