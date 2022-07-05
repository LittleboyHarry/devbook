import React from 'react';
import st from './ClickToOpenImage.module.scss';

export default function ClickToOpenImage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={st.slot}
      onClick={({ target }) => {
        if (target instanceof HTMLImageElement) window.open(target.src);
      }}
    >
      {children}
    </div>
  );
}
