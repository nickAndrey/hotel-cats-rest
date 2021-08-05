import { FC } from 'react';

export type Icon = {
  size?: number;
  color?: string;
}

export const SendIcon: FC<Icon> = ({ size, color }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height='18.414'
    viewBox='0 0 18.414 18.414'
  >
    <g id='send' transform='translate(-1 -0.404)'>
      <line
        id='Line_2'
        data-name='Line 2'
        x1='9'
        y2='9'
        transform='translate(9 1.818)'
        fill='none'
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
      <path
        id='Path_2'
        data-name='Path 2'
        d='M17.818,2,12.282,17.818,9.118,10.7,2,7.536Z'
        fill='none'
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
    </g>
  </svg>
);
