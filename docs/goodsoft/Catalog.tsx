import React from 'react';
import LogoCard from '@theme/unique/LogoCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCodeCompare,
  faEnvelopeOpenText,
  faHourglass,
} from '@fortawesome/free-solid-svg-icons';
import useBaseUrl from '@docusaurus/useBaseUrl';

export function BrowserSelector() {
  return (
    <LogoCard.Container>
      <LogoCard
        name="Firefox"
        to={t('firefox/config')}
        logo={<img src={useBaseUrl('/img/icons/firefox.svg')} alt="icon" />}
      />
      <LogoCard
        name="Chromium"
        to={t('chromium')}
        logo={<img src={useBaseUrl('/img/icons/chromium.svg')} alt="icon" />}
      />
    </LogoCard.Container>
  );
}

export default function Catalog() {
  return (
    <>
      <BrowserSelector />
      <LogoCard.Container>
        <LogoCard
          name="邮箱客户端"
          to="email"
          noNewTab
          logo={<FontAwesomeIcon icon={faEnvelopeOpenText} />}
        />
        <LogoCard
          name="休息提醒"
          to="rsi"
          noNewTab
          logo={<FontAwesomeIcon icon={faHourglass} />}
        />
        <LogoCard
          name="pandoc"
          to="cli/pandoc"
          noNewTab
          logo={<FontAwesomeIcon icon={faCodeCompare} />}
        />
      </LogoCard.Container>
    </>
  );
}

function t(path: string): string {
  return '/docs/goodsoft/' + path;
}
