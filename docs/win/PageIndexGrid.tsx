import React from 'react';
import LogoCard from '@theme/LogoCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToolbox, faCode, faCubes } from '@fortawesome/free-solid-svg-icons';

export default function Page() {
  return (
    <>
      <p>下载：</p>
      <LogoCard.Container>
        <LogoCard
          name="Win10"
          to="https://www.microsoft.com/zh-cn/software-download/windows10"
          logo={
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" />
          }
        />
        <LogoCard
          name="Win11"
          to="https://www.microsoft.com/zh-cn/software-download/windows11"
          logo={
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" />
          }
        />
        <LogoCard
          name="微 PE 工具箱"
          to="https://www.wepe.com.cn/download.html"
          logo={<FontAwesomeIcon icon={faToolbox} />}
        />
      </LogoCard.Container>
      <p>内容:</p>
      <LogoCard.Container>
        <LogoCard
          name="开发者环境"
          to="dev/scoop/install"
          logo={<FontAwesomeIcon icon={faCode} />}
        />
        <LogoCard
          name="Scoop"
          to="dev/getstarted"
          logo={<FontAwesomeIcon icon={faCubes} />}
        />
      </LogoCard.Container>
    </>
  );
}
