import { Theme } from '@emotion/react';

export interface OwnPalette {
  colors: { [key: string]: string };
  sizes: {
    sm(value: number): number;
    md(value: number): number;
  };
  media(value: number): string;
}

export const theme: Theme = {
  colors: {
    grey: '#F8F8F8',
    grey2: '#D1D1D1',
    grey3: 'rgba(0, 0, 0, 0.1)',
    grey4: '#EEEEEE',
    grey5: '#EBEBEB',
    grey6: '#B1B1B1',
    grey7: '#E8E8E8',
    blue: '#5863F8',
    white: '#FFFFFF',
    black: '#000000',
    black2: '#121212',
  },
  sizes: {
    // mobile devices
    sm: (px: number): number => (px / 320) * 100,
    // -----

    // desktop devices
    md: (px: number): number => (px / 1366) * 100,
    // -----
  },
  media: (bp: number = 0 | 1): string => {
    const breakpoints: number[] = [768, 1200];
    return `@media (min-width: ${breakpoints[bp]}px)`;
  },
};
