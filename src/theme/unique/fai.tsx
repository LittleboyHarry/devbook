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
  faDownload,
  faGlobe,
  faGears,
  faPuzzlePiece,
  faPlus,
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

export function DownloadIcon(props: Props) {
  return <FontAwesomeIcon {...props} icon={faDownload} />;
}

export function WebIcon(props: Props) {
  return <FontAwesomeIcon {...props} icon={faGlobe} />;
}

export function ConfigIcon(props: Props) {
  return <FontAwesomeIcon {...props} icon={faGears} />;
}

export function AddonIcon(props: Props) {
  return <FontAwesomeIcon {...props} icon={faPuzzlePiece} />;
}

export function PlusIcon(props: Props) {
  return <FontAwesomeIcon {...props} icon={faPlus} />;
}
