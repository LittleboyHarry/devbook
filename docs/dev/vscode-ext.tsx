import React from 'react';

import { LinkButton } from '@theme/links';

export function GetLinks({ id }: { id: string }) {
  return (
    <>
      <a href={'vscode:extension/' + id}>VSCode</a>&nbsp;
      <a href={'vscodium:extension/' + id}>VSCodium</a>
    </>
  );
}

export function GetButtons({ id }: { id: string }) {
  return (
    <p>
      安装到：
      <LinkButton outline href={'vscode:extension/' + id} name="VSCode" />
      <LinkButton outline href={'vscodium:extension/' + id} name="VSCodium" />
    </p>
  );
}
