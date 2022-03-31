// @flow strict

import React, { type Element } from 'react';

type Props = {
  +'data-testid'?: string,
};

export default function ArrowRightCircle(props: Props): Element<'svg'> {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3 2)"
      >
        <circle cx={8.5} cy={8.5} r={8} />
        <path d="m9.5 11.5 3-3-3-3m3 3h-8" />
      </g>
    </svg>
  );
}
