import React from 'react';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import {
  faCompactDisc,
  faFile,
  faFingerprint,
  faScroll,
} from '@fortawesome/free-solid-svg-icons';

type Props = Omit<FontAwesomeIconProps, 'icon'>;

export function FileIcon(props: Props) {
  return <FontAwesomeIcon {...props} icon={faFile} />;
}

export function ScriptIcon(props: Props) {
  return <FontAwesomeIcon {...props} icon={faScroll} />;
}

export function DiskImageIcon(props: Props) {
  return <FontAwesomeIcon {...props} icon={faCompactDisc} />;
}

export function ChecksumIcon(props: Props) {
  return <FontAwesomeIcon {...props} icon={faFingerprint} />;
}
