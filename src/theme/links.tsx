import React, { CSSProperties, PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import cs from 'clsx';
import st from './links.module.scss';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export function MstoreLink({ id, name }: { id: string; name: string }) {
  return (
    <HtmlA href={msStoreLink(id)}>
      <FontAwesomeIcon icon={faBagShopping} />
      &nbsp;
      {name}
    </HtmlA>
  );
}

export function MstoreButton({ id, name }: { id: string; name: string }) {
  return (
    <LinkButton
      name={
        <>
          <FontAwesomeIcon
            icon={faBagShopping}
            style={{ margin: '0 0.5rem 0 -0.5rem' }}
          />
          {name}
        </>
      }
      href={msStoreLink(id)}
    />
  );
}

function msStoreLink(id: string) {
  return 'ms-windows-store://pdp?mode=mini&productId=' + id;
}

export function DownloadButton({
  name,
  href,
  hint,
}: {
  name: string;
  href: string;
  hint?: string;
}) {
  return <LinkButton {...{ name, href, hint }} attr={{ download: true }} />;
}

export function LinkButton({
  name,
  href,
  outline,
  hint,
  attr,
  style,
  small,
  icon,
}: {
  name: React.ReactNode;
  href: string;
  outline?: boolean;
  hint?: string;
  attr?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
  style?: CSSProperties;
  small?: boolean;
  icon?: boolean | React.ReactNode;
}) {
  if (icon === true) icon = <FontAwesomeIcon icon={faGlobe} />;
  return (
    <a
      href={href}
      className={cs(
        st.linkButton,
        'button',
        !small && 'button--lg',
        outline ? 'button--outline button--secondary' : 'button--primary'
      )}
      title={hint}
      {...attr}
      style={{
        cursor: hint ? 'help' : 'pointer',
        verticalAlign: 'baseline',
        ...style,
      }}
    >
      {icon && <span className={st.icon}>{icon}</span>}
      {name}
    </a>
  );
}

export function HtmlA({
  href,
  className,
  style,
  children,
}: PropsWithChildren<{
  style?: CSSProperties;
  className?: string;
  href: string;
}>) {
  return (
    <a {...{ style, className }} href={href}>
      {children}
    </a>
  );
}
