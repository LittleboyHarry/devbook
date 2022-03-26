import React from 'react';
import LogoCard from '@theme/LogoCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTerminal,
  faPersonWalkingLuggage,
} from '@fortawesome/free-solid-svg-icons';

export function TopGrid() {
  return (
    <LogoCard.Container>
      <LogoCard
        name="Zsh"
        to="zsh"
        logo={<FontAwesomeIcon icon={faTerminal} style={{ width: '75%' }} />}
      />
      <LogoCard
        name="Git"
        to="git"
        logo={
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
        }
      />
      <LogoCard
        name={<span style={{ fontSize: '1.125rem' }}>deploy-my-dotfiles</span>}
        to="deploy-my-dotfiles"
        logo={
          <FontAwesomeIcon
            icon={faPersonWalkingLuggage}
            style={{ width: '75%' }}
          />
        }
      />
    </LogoCard.Container>
  );
}

export function EditorGrid() {
  return (
    <LogoCard.Container>
      <LogoCard
        name="Neovim"
        to="neovim"
        logo={
          <img
            src="https://cdn.jsdelivr.net/gh/neovim/neovim@master/packaging/logo.svg"
            width="90%"
          />
        }
      />
      <LogoCard
        name="VSCode"
        to="vscode/install"
        logo={
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
        }
      />
      <LogoCard
        name="JetBrains IDE"
        to="jetbrains/toolbox"
        logo={
          <img src="https://cdn.jsdelivr.net/gh/JetBrains/intellij-community@master/platform/icons/src/idea_CE.ico" />
        }
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
        logo={
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
        }
      />
      <LogoCard
        name="Python"
        to="python"
        logo={
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
        }
      />
    </LogoCard.Container>
  );
}
