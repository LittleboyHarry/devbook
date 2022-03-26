import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
declare module '@fortawesome/react-fontawesome' {
  export function FontAwesomeIcon(
    props: FontAwesomeIconProps | { icon: string }
  ): JSX.Element;
}
