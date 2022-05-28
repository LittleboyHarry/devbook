import React from 'react';
import LogoCard from '@theme/LogoCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTerminal,
  faPersonWalkingLuggage,
  faScrewdriverWrench,
  faLanguage,
  faServer,
} from '@fortawesome/free-solid-svg-icons';
import useBaseUrl from '@docusaurus/useBaseUrl';

export function TopLevelCatalog() {
  return (
    <>
      <LogoCard.Container>
        <LogoCard
          name="Zsh"
          to="zsh"
          logo={<FontAwesomeIcon icon={faTerminal} style={{ width: '75%' }} />}
        />
        <LogoCard
          name="Git"
          to="git"
          logo={<img src={useBaseUrl('/img/icons/git.svg')} />}
        />
        <LogoCard
          name="字体"
          to="font"
          logo={
            <FontAwesomeIcon
              icon={faLanguage}
              style={{ translate: 'scale(2)' }}
            />
          }
        />
      </LogoCard.Container>
      <LogoCard.Container>
        <LogoCard
          name={<span style={{ fontSize: '1.125rem' }}>deployworkenv</span>}
          to="deployworkenv"
          logo={
            <FontAwesomeIcon
              icon={faPersonWalkingLuggage}
              style={{ transform: 'scale(0.75)' }}
            />
          }
        />
        <LogoCard
          name="摩登命令行"
          to="/docs/devenv/modern-cli"
          logo={<FontAwesomeIcon icon={faScrewdriverWrench} />}
        />
        <LogoCard
          name="虚拟化"
          to="/docs/devenv/virtual"
          logo={<FontAwesomeIcon icon={faServer} />}
        />
      </LogoCard.Container>
    </>
  );
}

export function EditorCatalog() {
  return (
    <LogoCard.Container>
      <LogoCard
        name="Neovim"
        to="neovim"
        logo={<img src={useBaseUrl('/img/icons/neovim.svg')} width="90%" />}
      />
      <LogoCard
        name="VSCode"
        to="vscode/download"
        logo={<img src={useBaseUrl('/img/icons/vscode.svg')} />}
      />
      <LogoCard
        name="JetBrains IDE"
        to="jetbrains/toolbox"
        logo={<img src={useBaseUrl('/img/icons/intellij.svg')} />}
      />
    </LogoCard.Container>
  );
}

export function DevEnvCatalog() {
  return (
    <LogoCard.Container>
      <LogoCard
        name="Node.js"
        to="nodejs"
        logo={<img src={useBaseUrl('/img/icons/nodejs.svg')} />}
      />
      {/*
      <LogoCard
        name="Python"
        to="python"
        logo={<img src={useBaseUrl('/img/icons/python.svg')} />}
      />
      */}
    </LogoCard.Container>
  );
}