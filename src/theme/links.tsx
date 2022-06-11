import React, { CSSProperties, PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import cs from 'clsx';
import st from './links.module.scss';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { WebIcon } from './fai';

export function StoreLink({ to, text }: { to: string; text: string }) {
  return (
    <HtmlA href={to}>
      <FontAwesomeIcon icon={faBagShopping} />
      &nbsp;
      {text}
    </HtmlA>
  );
}

export function StoreButton({ to, text }: { to: string; text: string }) {
  return (
    <LinkButton
      name={
        <>
          <FontAwesomeIcon
            icon={faBagShopping}
            style={{ margin: '0 0.5rem 0 -0.5rem' }}
          />
          {text}
        </>
      }
      href={to}
    />
  );
}

export function mslink(content: TemplateStringsArray) {
  return 'ms-windows-store://pdp?mode=mini&productId=' + content;
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
  className,
  outline,
  hint,
  attr,
  style,
  small,
  icon,
  newTab,
}: {
  name: React.ReactNode;
  href: string;
  className?: string;
  outline?: boolean;
  hint?: string;
  attr?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
  style?: CSSProperties;
  small?: boolean;
  icon?: boolean | React.ReactNode;
  newTab?: boolean;
}) {
  if (icon === true) icon = <WebIcon />;
  if (icon === undefined && newTab)
    icon = <FontAwesomeIcon icon={faArrowUpRightFromSquare} />;

  return (
    <a
      href={href}
      className={cs(
        st.linkButton,
        'button',
        !small && 'button--lg',
        outline ? 'button--outline button--secondary' : 'button--primary',
        className
      )}
      title={hint}
      {...(newTab && { target: '_blank' })}
      style={{
        cursor: hint ? 'help' : 'pointer',
        verticalAlign: 'baseline',
        ...style,
      }}
      {...attr}
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
