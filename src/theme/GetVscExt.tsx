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
          style={{ margin: '2px 4px 0 0' }}
        />
        {!msOnly && (
          <>
            <LinkButton
              outline
              href={'code-oss:extension/' + id}
              name="OSS"
              small={small}
              style={{ margin: '2px 4px 0 0' }}
            />
            <LinkButton
              outline
              href={'vscodium:extension/' + id}
              name="VSCodium"
              small={small}
              style={{ margin: '2px 4px 0 0' }}
            />
          </>
        )}
      </span>
      <a
        style={{ marginRight: '1rem', display: 'inline-block' }}
        href={'https://marketplace.visualstudio.com/items?itemName=' + id}
      >
        详情介绍
      </a>
    </>
  );
}
