import React from 'react';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function RegistryIcon() {
  return (
    <FontAwesomeIcon
      icon={faGears}
      color="var(--ifm-color-success)"
      transform="shrink-5"
    />
  );
}
