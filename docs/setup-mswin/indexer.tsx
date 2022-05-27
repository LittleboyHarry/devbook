import React from 'react';
import LogoCard from '@theme/LogoCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToolbox, faCode } from '@fortawesome/free-solid-svg-icons';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function SetupMswinIndexer() {
  return (
    <>
      <LogoCard.Container>
        <LogoCard
          name="下载 Win10"
          to="https://www.microsoft.com/zh-cn/software-download/windows10"
          logo={<img src={useBaseUrl('/img/icons/windows8-original.svg')} />}
        />
        <LogoCard
          name="下载 Win11"
          to="https://www.microsoft.com/zh-cn/software-download/windows11"
          logo={<img src={useBaseUrl('/img/icons/windows8-original.svg')} />}
        />
        <LogoCard
          name="微 PE 工具箱"
          to="https://www.wepe.com.cn/download.html"
          logo={<FontAwesomeIcon icon={faToolbox} />}
        />
      </LogoCard.Container>
      <LogoCard.Container>
        <LogoCard
          name="开发环境"
          to="setup-mswin/dev"
          noNewTab
          logo={<FontAwesomeIcon icon={faCode} />}
        />
      </LogoCard.Container>
    </>
  );
}
