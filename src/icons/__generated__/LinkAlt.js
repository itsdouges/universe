// @flow strict

import React, { type Element } from 'react';

type Props = {
  +'data-testid'?: string,
};

export default function LinkAlt(props: Props): Element<'svg'> {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 21 21" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.388 11.69A3.043 3.043 0 0 1 6.543 6.5h4.914A3.043 3.043 0 0 1 14.5 9.543c0 1.68-1.362 2.957-3.043 2.957H9" />
        <path d="M16.612 10.31a3.043 3.043 0 0 1-2.155 5.19H9.543A3.043 3.043 0 0 1 6.5 12.457c0-1.68 1.362-2.957 3.043-2.957H12" />
      </g>
    </svg>
  );
}
