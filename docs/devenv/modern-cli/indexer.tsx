import React from 'react';
import LogoCard from '@theme/LogoCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faCodeCompare,
  faFilter,
  faMagnifyingGlass,
  faPaintRoller,
} from '@fortawesome/free-solid-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';

export default function ModernCliIndexer() {
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
      </LogoCard.Container>
      <LogoCard.Container>
        <LogoCard
          name="文件过滤"
          label="fd"
          to="fd"
          logo={<FontAwesomeIcon icon={faFilter} />}
        />
        <LogoCard
          name="文本查找"
          label="rg"
          to="ripgrep"
          logo={<FontAwesomeIcon icon={faMagnifyingGlass} />}
        />
      </LogoCard.Container>
      <LogoCard.Container>
        <LogoCard
          name="命令速查"
          label="tldr"
          to="tldr"
          logo={<FontAwesomeIcon icon={faCircleQuestion} />}
        />
        <LogoCard
          name="pip 隔离"
          label="pipx"
          to="pipx"
          logo={<FontAwesomeIcon icon={faPython} />}
        />
      </LogoCard.Container>
    </>
  );
}
