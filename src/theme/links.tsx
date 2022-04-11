import React, { CSSProperties, PropsWithChildren } from 'react';

export function MstoreLink({ id, name }: { id: string; name: string }) {
  return <HtmlA href={msStoreLink(id)}>{name}</HtmlA>;
}

export function MstoreButton({ id, name }: { id: string; name: string }) {
  return <AbstractButton name={name} href={msStoreLink(id)} />;
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
  return <AbstractButton {...{ name, href, hint }} attr={{ download: true }} />;
}

function AbstractButton({
  name,
  href,
  hint,
  attr,
}: {
  name: string;
  href: string;
  hint?: string;
  attr?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}) {
  return (
    <a
      href={href}
      className="button button--lg button--primary"
      title={hint}
      style={{ cursor: hint ? 'help' : 'auto', margin: '1rem' }}
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
