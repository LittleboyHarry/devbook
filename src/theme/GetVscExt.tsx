import React from 'react';
import { LinkButton } from './links';
import st from './GetVscExt.module.scss';

export default function GetVscExt({
  id,
  msOnly,
  noTitle,
}: {
  id: string;
  msOnly?: boolean;
  noTitle?: boolean;
}) {
  return (
    <>
      {!noTitle && (
        <span className={st.label}>{msOnly ? '仅供于：' : '安装到：'}</span>
      )}
      <span className={st.buttons}>
        <LinkButton
          href={'vscode:extension/' + id}
          name="VSCode"
          className="button--secondary"
          small={true}
        />
        {!msOnly && (
          <>
            <LinkButton
              href={'code-oss:extension/' + id}
              name="OSS"
              className="button--secondary"
              small={true}
            />
            <LinkButton
              href={'vscodium:extension/' + id}
              name="VSCodium"
              className="button--secondary"
              small={true}
            />
          </>
        )}
      </span>
    </>
  );
}
