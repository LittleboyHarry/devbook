import React, { ReactNode } from 'react';
import cs from 'clsx';
import st from './Popper.module.scss';

export default function Popper({
  children,
  warning,
  hover,
  width,
}: {
  children: ReactNode;
  warning?: boolean;
  hover?: ReactNode;
  width?: number;
}) {
  return (
    <div className="dropdown dropdown--hoverable">
      <span className={cs(st.icon)}>{children}</span>
      <div
        className={cs(
          'dropdown__menu',
          st.dropdown,
          warning && ['alert alert--warning', st.warning]
        )}
        style={{
          width: width || 'fit-content',
        }}
      >
        {hover}
      </div>
    </div>
  );
}
