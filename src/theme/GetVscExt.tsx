import React from 'react';
import { LinkButton } from './links';

export default function GetVscExt({
  id,
  msOnly,
  small,
  noTitle,
}: {
  id: string;
  msOnly?: boolean;
  small?: boolean;
  noTitle?: boolean;
}) {
  return (
    <>
      {!noTitle && (
        <span style={{ margin: '0 1rem' }}>{msOnly ? '仅供于' : '安装到'}</span>
      )}
      <span style={{ display: 'inline-block' }}>
        <LinkButton
          outline
          href={'vscode:extension/' + id}
          name="VSCode"
          small={small}
          style={{ marginTop: '2px' }}
        />
        {!msOnly && (
          <LinkButton
            outline
            href={'vscodium:extension/' + id}
            name="VSCodium"
            small={small}
            style={{ marginTop: '2px' }}
          />
        )}
      </span>
      <a
        style={{ marginRight: '1rem', display: 'inline-block' }}
        href={'https://marketplace.visualstudio.com/items?itemName=' + id}
      >
        (插件详情)
      </a>
    </>
  );
}
