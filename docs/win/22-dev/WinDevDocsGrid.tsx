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

export default function Page() {
  return (
    <>
      <LogoCard.Container>
        <LogoCard
          name="必做事项"
          to="mustdo"
          noNewTab
          logo={<FontAwesomeIcon icon={faRocket} />}
        />
      </LogoCard.Container>
      <LogoCard.Container>
        <LogoCard
          name="PowerShell"
          to="pwsh"
          logo={<FontAwesomeIcon icon={faTerminal} />}
        />
        <LogoCard
          name="Sysinternals"
          to="sysinternals"
          logo={<FontAwesomeIcon icon={faScrewdriverWrench} />}
        />
        <LogoCard
          name="WSL"
          to="wsl/install"
          logo={<FontAwesomeIcon icon={faLinux} />}
        />
      </LogoCard.Container>
      <h3>包管理器：</h3>
      <LogoCard.Container>
        <LogoCard
          name="Scoop"
          to="pkgmgr/scoop"
          noNewTab
          logo={<FontAwesomeIcon icon={faCubes} />}
        />
        <LogoCard
          name="Chocolatey"
          to="pkgmgr/choco"
          noNewTab
          logo={<FontAwesomeIcon icon={faCubes} />}
        />
      </LogoCard.Container>
      <h3>其他推荐：</h3>
      <LogoCard.Container>
        <LogoCard
          name="摩登命令行"
          to="/docs/dev/modern-cli/index"
          logo={<FontAwesomeIcon icon={faScrewdriverWrench} />}
        />
        <LogoCard
          name="JetBrains IDE"
          to="/docs/dev/jetbrains/toolbox"
          logo={<img src={useBaseUrl('/img/icons/intellij.svg')} />}
        />
      </LogoCard.Container>
    </>
  );
}
