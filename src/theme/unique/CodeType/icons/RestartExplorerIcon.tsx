import React from 'react';
import {
  faFolderClosed,
  faRotateLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function RestartExplorerIcon() {
  return (
    <span
      className="fa-layers fa-fw"
      style={{ color: 'var(--ifm-color-danger-darkest)' }}
    >
      <FontAwesomeIcon icon={faFolderClosed} />
      <FontAwesomeIcon
        icon={faRotateLeft}
        transform="shrink-10 down-2"
        style={{ color: 'var(--ifm-font-color-base-inverse)' }}
      />
    </span>
  );
}
