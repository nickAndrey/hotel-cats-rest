import '@emotion/react';
import { OwnPalette } from './theme';

declare module '@emotion/react' {
  export interface Theme extends OwnPalette {}
}
