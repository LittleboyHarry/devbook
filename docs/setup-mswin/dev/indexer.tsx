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

function link(id: string) {
  return 'dev/' + id;
}

export default function WinDevIndexer() {
  return (
    <>
      <LogoCard.Container>
        <LogoCard
          name="包管理器"
          to={link('pkgmgr')}
          noNewTab
          logo={<FontAwesomeIcon icon={faCubes} />}
        />
        <LogoCard
          name="PowerShell"
          to={link('pwsh')}
          noNewTab
          logo={<FontAwesomeIcon icon={faTerminal} />}
        />
        <LogoCard
          name="必做事项"
          to={link('mustdo')}
          noNewTab
          logo={<FontAwesomeIcon icon={faRocket} />}
        />
      </LogoCard.Container>
      <LogoCard.Container>
        <LogoCard
          name="Sysinternals"
          to={'advance/sysinternals'}
          noNewTab
          logo={<FontAwesomeIcon icon={faScrewdriverWrench} />}
        />
        <LogoCard
          name="WSL"
          to={link('wsl')}
          noNewTab
          logo={<FontAwesomeIcon icon={faLinux} />}
        />
      </LogoCard.Container>
      <h3>其他推荐：</h3>
      <LogoCard.Container>
        <LogoCard
          name="摩登命令行"
          to="/docs/devenv/modern-cli"
          logo={<FontAwesomeIcon icon={faScrewdriverWrench} />}
        />
        <LogoCard
          name="JetBrains IDE"
          to="/docs/devenv/jetbrains"
          logo={<img src={useBaseUrl('/img/icons/intellij.svg')} />}
        />
      </LogoCard.Container>
    </>
  );
}
