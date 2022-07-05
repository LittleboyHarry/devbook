import React from 'react';
import { faSquare, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ShellIcon() {
  return (
    <span className="fa-layers fa-fw" style={{ opacity: 0.66 }}>
      <FontAwesomeIcon icon={faSquare} />
      <FontAwesomeIcon
        icon={faTerminal}
        transform="shrink-8"
        style={{ color: 'var(--ifm-font-color-base-inverse)' }}
      />
    </span>
  );
}
