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
        <LogoCard
          name="PowerShell"
          to="pwsh"
          logo={<FontAwesomeIcon icon={faTerminal} />}
        />
        <LogoCard
          name="Scoop 包管理"
          to="scoop/install"
          noNewTab
          logo={<FontAwesomeIcon icon={faCubes} />}
        />
      </LogoCard.Container>
      <LogoCard.Container>
        <LogoCard
          name="WSL"
          to="wsl/install"
          logo={<FontAwesomeIcon icon={faLinux} />}
        />
        <LogoCard
          name="Sysinternals"
          to="sysinternals"
          logo={<FontAwesomeIcon icon={faScrewdriverWrench} />}
        />
      </LogoCard.Container>
    </>
  );
}
