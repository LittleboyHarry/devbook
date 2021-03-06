import React from 'react';
import LogoCard from '@theme/unique/LogoCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToolbox, faCode, faRocket } from '@fortawesome/free-solid-svg-icons';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function SetupMswinCatalog() {
  return (
    <>
      <LogoCard.Container>
        <LogoCard
          name="初始化"
          to="firstrun"
          noNewTab
          logo={<FontAwesomeIcon icon={faRocket} />}
        />
        <LogoCard
          name="开发环境"
          to="dev"
          noNewTab
          logo={<FontAwesomeIcon icon={faCode} />}
        />
      </LogoCard.Container>
      <h2>WinPE 系统</h2>
      <LogoCard.Container>
        <LogoCard
          name="微 PE 工具箱"
          to="https://www.wepe.com.cn/ubook/start.html"
          logo={<FontAwesomeIcon icon={faToolbox} />}
        />
        <LogoCard
          name="优启通 EasyU"
          to="https://www.upe.net/"
          logo={<FontAwesomeIcon icon={faToolbox} />}
        />
      </LogoCard.Container>
      <h2>系统下载</h2>
      <LogoCard.Container>
        <LogoCard
          name="Windows 10"
          to="https://www.microsoft.com/zh-cn/software-download/windows10"
          logo={<img src={useBaseUrl('/img/icons/windows8-original.svg')} />}
        />
        <LogoCard
          name="Windows 11"
          to="https://www.microsoft.com/zh-cn/software-download/windows11"
          logo={<img src={useBaseUrl('/img/icons/windows8-original.svg')} />}
        />
      </LogoCard.Container>
    </>
  );
}
