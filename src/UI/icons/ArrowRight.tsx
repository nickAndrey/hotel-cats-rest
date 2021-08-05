import { FC } from 'react';
import { Icon } from './SendIcon';

const ArrowRight: FC<Icon> = ({ color, size }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 12.405 13.639'
  >
    <g
      id='arrow-right_1_'
      data-name='arrow-right (1)'
      transform='translate(-4.405 -3.586)'
    >
      <line
        id='Line_3'
        data-name='Line 3'
        x2='10'
        transform='translate(5.405 10.405)'
        fill={color}
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
      <path
        id='Path_3'
        data-name='Path 3'
        d='M12,5l5.405,5.405L12,15.811'
        transform='translate(-1.595)'
        fill='none'
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
    </g>
  </svg>
);

export default ArrowRight;
