import React from 'react';
import LogoCard from '@theme/LogoCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCodeCompare,
  faMagnifyingGlass,
  faPaintRoller,
} from '@fortawesome/free-solid-svg-icons';
import {
  faMarkdown,
  faSearchengin,
  faPython,
} from '@fortawesome/free-brands-svg-icons';

export default function RecommendCli() {
  return (
    <>
      <LogoCard.Container>
        <LogoCard
          name="bat"
          label="代码彩显"
          to="/docs/dev/cli/bat"
          logo={<FontAwesomeIcon icon={faPaintRoller} />}
        />
        <LogoCard
          name="delta"
          label="代码比对"
          to="/docs/dev/cli/delta"
          logo={<FontAwesomeIcon icon={faCodeCompare} />}
        />
        <LogoCard
          name="pandoc"
          label="文本格式转换"
          to="/docs/dev/cli/pandoc"
          logo={<FontAwesomeIcon icon={faMarkdown} />}
        />
      </LogoCard.Container>
      <LogoCard.Container>
        <LogoCard
          name="fd"
          label="文件查找"
          to="/docs/dev/cli/fd"
          logo={<FontAwesomeIcon icon={faMagnifyingGlass} />}
        />
        <LogoCard
          name="rg"
          label="文本查找"
          to="/docs/dev/cli/ripgrep"
          logo={<FontAwesomeIcon icon={faSearchengin} />}
        />
      </LogoCard.Container>
      <LogoCard.Container>
        <LogoCard
          name="pipx"
          label="隔离环境"
          to="/docs/dev/cli/pipx"
          logo={<FontAwesomeIcon icon={faPython} />}
        />
      </LogoCard.Container>
    </>
  );
}
