// @flow strict

import React, { type Element } from 'react';

type Props = {
  +'data-testid'?: string,
};

export default function Hash(props: Props): Element<'svg'> {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="m13.5 5.5-2 10m-2-10-2 10m-1-7h9m-10 4h9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
