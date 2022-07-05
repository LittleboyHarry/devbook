import React, { ComponentProps } from 'react';
import type WordWrapButtonType from '@theme/CodeBlock/WordWrapButton';
import WordWrapButton from '@theme-original/CodeBlock/WordWrapButton';
import { useEffect } from 'react';
import { useState } from 'react';

type Props = ComponentProps<typeof WordWrapButtonType>;

export default function WordWrapButtonWrapper(props: Props): JSX.Element {
  const [initial, setInitial] = useState(false);

  useEffect(() => {
    if (props.onClick)
      setInitial((initial) => {
        if (!initial) props.onClick(null);
        return true;
      });
  }, [props.onClick]);

  return <WordWrapButton {...props} />;
}
