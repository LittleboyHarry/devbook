import React from 'react';
import LogoCard from '@theme/unique/LogoCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faCodeCompare,
  faFilter,
  faListUl,
  faMagnifyingGlass,
  faPaintRoller,
} from '@fortawesome/free-solid-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';

function link(id: string) {
  return 'modern-cli/' + id;
}

export default function ModernCliIndexer() {
  return (
    <>
      <LogoCard.Container>
        <LogoCard
          name="bat"
          label="代码彩显"
          noNewTab
          to="#bat"
          logo={<FontAwesomeIcon icon={faPaintRoller} />}
        />
        <LogoCard
          name="delta"
          label="代码比对"
          noNewTab
          to="#delta"
          logo={<FontAwesomeIcon icon={faCodeCompare} />}
        />
      </LogoCard.Container>
      <LogoCard.Container>
        <LogoCard
          name="fuzzy finder"
          label="查找菜单"
          noNewTab
          to="#fzf"
          logo={<FontAwesomeIcon icon={faListUl} />}
        />
        <LogoCard
          name="fd"
          label="文件过滤"
          noNewTab
          to="#fd"
          logo={<FontAwesomeIcon icon={faFilter} />}
        />
        <LogoCard
          name="ripgrep"
          label="文本查找"
          noNewTab
          to="#ripgrep"
          logo={<FontAwesomeIcon icon={faMagnifyingGlass} />}
        />
      </LogoCard.Container>
      <LogoCard.Container>
        <LogoCard
          name="tldr"
          label="命令速查"
          noNewTab
          to="#tldr"
          logo={<FontAwesomeIcon icon={faCircleQuestion} />}
        />
        <LogoCard
          name="pipx"
          label="pip 环境隔离"
          noNewTab
          to="#pipx"
          logo={<FontAwesomeIcon icon={faPython} />}
        />
      </LogoCard.Container>
    </>
  );
}
