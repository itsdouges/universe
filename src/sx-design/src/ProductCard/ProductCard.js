// @flow

import React, { useState, type Element } from 'react';
import sx from '@adeira/sx';

import Heading from '../Heading/Heading';
import Image from '../Image/Image';
import Money from '../Money/Money';
import type { SupportedCurrencies } from '../constants';

type Props = {
  +title: Fbt,
  +priceUnitAmount: number,
  +priceUnitAmountCurrency: SupportedCurrencies,
  +imgBlurhash?: string,
  +imgSrc?: string,
  +imgAlt?: Fbt,
};

/**
 * This component display product card with product title and product price. The recommended usage
 * is as follows:
 *
 * 1. display grid of `Skeleton` components when loading the data
 * 2. display the same grid of `ProductCards` with `imgBlurhash` (https://blurha.sh/) and `imgSrc` set
 *
 * This will result in a nice loading experience where the user sees:
 *
 * 1. grid of grey squares, after that:
 * 2. grid of blurhashes instead of boring grey squares, after that:
 * 3. the actual images
 *
 * Simple CSS grid example:
 *
 * ```js
 * const styles = sx.create({
 *   productsGrid: {
 *     display: 'grid',
 *     gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
 *     gap: '1rem',
 *   },
 * });
 * ```
 */
export default function ProductCard(props: Props): Element<'div'> {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles('wrapper', 'aspectRatioBox')}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div className={styles('aspectRatioBoxInner')}>
        <div className={styles('highlightWrapper')}>
          <Heading xstyle={styles.heading}>
            <span
              className={styles(
                isHovered ? 'highlightHover' : 'highlight',
                'highlightBase',
                'highlightBaseRounded', // applies only to this highlight
              )}
            >
              {props.title}
            </span>
          </Heading>

          <span className={styles(isHovered ? 'highlightHover' : 'highlight', 'highlightBase')}>
            <Money
              priceUnitAmount={props.priceUnitAmount}
              priceUnitAmountCurrency={props.priceUnitAmountCurrency}
            />
          </span>
        </div>

        <Image src={props.imgSrc} alt={props.imgAlt} blurhash={props.imgBlurhash} />
      </div>
    </div>
  );
}

const styles = sx.create({
  aspectRatioBox: {
    position: 'relative',
    width: '100%',
    paddingBlockEnd: '100%', // = width for a 1:1 aspect ratio (https://css-tricks.com/aspect-ratio-boxes/)
  },
  aspectRatioBoxInner: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(var(--sx-accent-2))',
    position: 'relative',
    borderRadius: 'var(--sx-radius)',
  },
  highlightWrapper: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 2,
  },
  highlightBase: {
    transitionProperty: 'all',
    transitionDuration: '250ms',
    transitionTimingFunction: 'ease-in-out',
    display: 'inline-block',
    marginBlockEnd: 1,
    padding: '1rem',
  },
  highlightBaseRounded: {
    borderStartStartRadius: 'var(--sx-radius)',
  },
  highlight: {
    'color': 'rgba(var(--sx-foreground))',
    'backgroundColor': 'rgba(var(--sx-background))',
    '--sx-money-text-color': 'var(--sx-foreground)',
  },
  highlightHover: {
    'color': 'rgba(var(--sx-background))',
    'backgroundColor': 'rgba(var(--sx-foreground))',
    '--sx-money-text-color': 'var(--sx-background)',
  },
  heading: {
    margin: 0,
  },
});
