import React from 'react';
import LogoCard from '@theme/LogoCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTerminal,
  faPersonWalkingLuggage,
  faScrewdriverWrench,
  faLanguage,
} from '@fortawesome/free-solid-svg-icons';
import useBaseUrl from '@docusaurus/useBaseUrl';

export function TopGrid() {
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
          name={
            <span style={{ fontSize: '1.125rem' }}>deploy-my-dotfiles</span>
          }
          to="deploy-my-dotfiles"
          logo={
            <FontAwesomeIcon
              icon={faPersonWalkingLuggage}
              style={{ width: '75%' }}
            />
          }
        />
        <LogoCard
          name="摩登命令行"
          to="/docs/devenv/modern-cli/index"
          logo={<FontAwesomeIcon icon={faScrewdriverWrench} />}
        />
      </LogoCard.Container>
    </>
  );
}

export function EditorGrid() {
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

export function DevEnvGrid() {
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
