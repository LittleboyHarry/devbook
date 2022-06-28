import React from 'react';
import { faSquare, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PwshIcon() {
  return (
    <span
      className="fa-layers fa-fw"
      style={{ transform: 'skewX(-15deg) scaleX(0.95) translateX(5%)' }}
    >
      <FontAwesomeIcon icon={faSquare} color="#4579D3" />
      <FontAwesomeIcon
        icon={faTerminal}
        transform="shrink-8"
        style={{ color: 'white' }}
      />
    </span>
  );
}
