import React from 'react';
import LogoCard from '@theme/unique/LogoCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTerminal,
  faPersonWalkingLuggage,
  faScrewdriverWrench,
  faLanguage,
  faServer,
  faCubes,
} from '@fortawesome/free-solid-svg-icons';
import useBaseUrl from '@docusaurus/useBaseUrl';

export function BasicCatalog() {
  return (
    <>
      <LogoCard.Container>
        <LogoCard
          name="字体"
          to="/docs/devenv/font"
          logo={
            <FontAwesomeIcon
              icon={faLanguage}
              style={{ translate: 'scale(2)' }}
            />
          }
        />
        <LogoCard
          name="Zsh"
          to="/docs/devenv/zsh"
          logo={<FontAwesomeIcon icon={faTerminal} style={{ width: '75%' }} />}
        />
        <LogoCard
          name="Neovim"
          to="/docs/devenv/neovim"
          logo={<img src={useBaseUrl('/img/icons/neovim.svg')} width="90%" />}
          noNewTab
        />
      </LogoCard.Container>
      <LogoCard.Container>
        <LogoCard
          name="摩登命令行"
          to="/docs/devenv/modern-cli"
          logo={<FontAwesomeIcon icon={faScrewdriverWrench} />}
        />
        <LogoCard
          name="Git"
          to="/docs/devenv/git"
          logo={<img src={useBaseUrl('/img/icons/git.svg')} />}
        />
      </LogoCard.Container>
    </>
  );
}

/*
<LogoCard.Container>
        <LogoCard
          name={<span style={{ fontSize: '1.125rem' }}>deployworkenv</span>}
          to="/docs/devenv/deployworkenv"
          logo={
            <FontAwesomeIcon
              icon={faPersonWalkingLuggage}
              style={{ transform: 'scale(0.75)' }}
            />
          }
        />
      </LogoCard.Container>
*/

export function EditorCatalog() {
  return (
    <LogoCard.Container>
      <LogoCard
        name="VSCode"
        to="/docs/devenv/vscode"
        logo={<img src={useBaseUrl('/img/icons/vscode.svg')} />}
        noNewTab
      />
      <LogoCard
        name="JetBrains IDE"
        to="/docs/devenv/jetbrains"
        logo={<img src={useBaseUrl('/img/icons/intellij.svg')} />}
        noNewTab
      />
    </LogoCard.Container>
  );
}

export function DevEnvCatalog({ hidePl }: { hidePl?: boolean }) {
  return (
    <>
      <LogoCard.Container>
        <LogoCard
          name="虚拟化"
          to="/docs/devenv/virtual"
          logo={<FontAwesomeIcon icon={faServer} />}
        />
        <LogoCard
          name="容器化"
          to="/docs/devenv/container"
          logo={<FontAwesomeIcon icon={faCubes} />}
        />
        {/*
      <LogoCard
        name="Python"
        to="/docs/devenv/python"
        logo={<img src={useBaseUrl('/img/icons/python.svg')} />}
      />
      */}
      </LogoCard.Container>
      {!hidePl && (
        <LogoCard.Container>
          <LogoCard
            name="Node.js"
            to="/docs/devenv/nodejs"
            logo={<img src={useBaseUrl('/img/icons/nodejs.svg')} />}
          />
        </LogoCard.Container>
      )}
    </>
  );
}
