import React from 'react';
import LogoCard from '@theme/LogoCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faCodeCompare,
  faMagnifyingGlass,
  faPaintRoller,
} from '@fortawesome/free-solid-svg-icons';
import {
  faMarkdown,
  faSearchengin,
  faPython,
} from '@fortawesome/free-brands-svg-icons';

export default function CliToolsGrid() {
  return (
    <>
      <LogoCard.Container>
        <LogoCard
          name="代码彩显"
          label="bat"
          to="bat"
          logo={<FontAwesomeIcon icon={faPaintRoller} />}
        />
        <LogoCard
          name="代码比对"
          label="delta"
          to="delta"
          logo={<FontAwesomeIcon icon={faCodeCompare} />}
        />
        <LogoCard
          name="文本格式转换"
          label="pandoc"
          to="pandoc"
          logo={<FontAwesomeIcon icon={faMarkdown} />}
        />
      </LogoCard.Container>
      <LogoCard.Container>
        <LogoCard
          name="文件查找"
          label="fd"
          to="fd"
          logo={<FontAwesomeIcon icon={faMagnifyingGlass} />}
        />
        <LogoCard
          name="文本查找"
          label="rg"
          to="ripgrep"
          logo={<FontAwesomeIcon icon={faSearchengin} />}
        />
      </LogoCard.Container>
      <LogoCard.Container>
        <LogoCard
          name="隔离环境"
          label="pipx"
          to="pipx"
          logo={<FontAwesomeIcon icon={faPython} />}
        />
        <LogoCard
          name="命令速查"
          label="tldr"
          to="tldr"
          logo={<FontAwesomeIcon icon={faCircleQuestion} />}
        />
      </LogoCard.Container>
    </>
  );
}