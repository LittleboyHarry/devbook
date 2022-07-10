import React, { CSSProperties, PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faDownload } from '@fortawesome/free-solid-svg-icons';
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
  return (
    <LinkButton
      icon={<FontAwesomeIcon icon={faDownload} />}
      {...{ name, href, hint }}
      attr={{ download: true }}
    />
  );
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
  const isExternal = /^https?:/.test(href);
  const openNewWindow = isExternal || newTab;
  if (icon === true) icon = <WebIcon />;
  if (icon === undefined && openNewWindow)
    icon = <FontAwesomeIcon icon={faArrowUpRightFromSquare} />;

  const content = (
    <a
      href={href}
      className={cs(
        st.linkButton,
        'button',
        !small && 'button--lg',
        outline ? 'button--outline button--secondary' : 'button--primary',
        icon && st.iconButton,
        className
      )}
      {...(openNewWindow && { target: '_blank' })}
      style={{
        verticalAlign: 'baseline',
        ...style,
      }}
      {...attr}
    >
      {icon && <span className={st.icon}>{icon}</span>}
      {name}
    </a>
  );

  return hint ? (
    <div className="dropdown dropdown--hoverable">
      {content}
      <div className={cs('dropdown__menu', st.popper)}>{hint}</div>
    </div>
  ) : (
    content
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
