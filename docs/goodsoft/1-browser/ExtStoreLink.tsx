import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFirefox,
  faChrome,
  faEdge,
} from '@fortawesome/free-brands-svg-icons';
import st from './ExtStoreLink.module.scss';

export default function ExtStoreLink({
  name,
  firefox,
  chrome,
  edge,
}: {
  name:string;
  firefox: string;
  chrome: string;
  edge: string;
}) {
  return (
    <span className={st.root}>
      <span className={st.title}>获取 {name}:</span>
      {firefox && (
        <a href={firefox}>
          <FontAwesomeIcon icon={faFirefox} />
          Firefox
        </a>
      )}
      {chrome && (
        <a href={chrome}>
          <FontAwesomeIcon icon={faChrome} />
          Chromium
        </a>
      )}
      {edge && (
        <a href={edge}>
          <FontAwesomeIcon icon={faEdge} />
          Edge
        </a>
      )}
    </span>
  );
}
