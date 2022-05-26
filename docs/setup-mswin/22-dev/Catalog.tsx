import React from 'react';
import LogoCard from '@theme/LogoCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCubes,
  faRocket,
  faScrewdriverWrench,
  faTerminal,
} from '@fortawesome/free-solid-svg-icons';
import { faLinux } from '@fortawesome/free-brands-svg-icons';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function WinDevCatalog() {
  return (
    <>
      <LogoCard.Container>
        <LogoCard
          name="包管理器"
          to="pkgmgr"
          noNewTab
          logo={<FontAwesomeIcon icon={faCubes} />}
        />
        <LogoCard
          name="PowerShell"
          to="pwsh"
          noNewTab
          logo={<FontAwesomeIcon icon={faTerminal} />}
        />
        <LogoCard
          name="必做事项"
          to="mustdo"
          noNewTab
          logo={<FontAwesomeIcon icon={faRocket} />}
        />
      </LogoCard.Container>
      <LogoCard.Container>
        <LogoCard
          name="Sysinternals"
          to="sysinternals"
          noNewTab
          logo={<FontAwesomeIcon icon={faScrewdriverWrench} />}
        />
        <LogoCard
          name="WSL"
          to="wsl/install"
          noNewTab
          logo={<FontAwesomeIcon icon={faLinux} />}
        />
      </LogoCard.Container>
      <h3>其他推荐：</h3>
      <LogoCard.Container>
        <LogoCard
          name="摩登命令行"
          to="/docs/devenv/modern-cli/catalog"
          logo={<FontAwesomeIcon icon={faScrewdriverWrench} />}
        />
        <LogoCard
          name="JetBrains IDE"
          to="/docs/devenv/jetbrains/toolbox"
          logo={<img src={useBaseUrl('/img/icons/intellij.svg')} />}
        />
      </LogoCard.Container>
    </>
  );
}
