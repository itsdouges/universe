// @flow strict

import React, { type Element } from 'react';

type Props = {
  +'data-testid'?: string,
};

export default function Cloud(props: Props): Element<'svg'> {
  return (
    <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10.5 5.5a5 5 0 0 1 4.802 6.399A2 2 0 1 1 16.5 15.5h-11a3 3 0 1 1 .1-5.998A5.002 5.002 0 0 1 10.5 5.5z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
