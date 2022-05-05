import React, { CSSProperties, PropsWithChildren } from 'react';
import cs from 'classnames';
import st from './links.module.scss';

export function MstoreLink({ id, name }: { id: string; name: string }) {
  return <HtmlA href={msStoreLink(id)}>{name}</HtmlA>;
}

export function MstoreButton({ id, name }: { id: string; name: string }) {
  return <LinkButton name={name} href={msStoreLink(id)} />;
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
  small,
}: {
  name: string;
  href: string;
  outline?: boolean;
  hint?: string;
  attr?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
  small?: boolean;
}) {
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
      style={{
        cursor: hint ? 'help' : 'pointer',
        verticalAlign: 'baseline',
      }}
      {...attr}
    >
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
