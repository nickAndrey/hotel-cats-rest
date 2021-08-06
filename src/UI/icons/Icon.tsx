import { FC } from 'react';

export type Icons = {
  name: 'arrow-right' | 'arrow-left' | 'send' | 'building';
  color: string;
  size: number;
};

const Icon: FC<Icons> = ({ name, color, size }) => {
  switch (name) {
    case 'arrow-right':
      return (
        <svg
          width={size}
          aria-hidden='true'
          focusable='false'
          data-prefix='fas'
          data-icon='arrow-right'
          role='img'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 448 512'
        >
          <path
            fill={color}
            d='M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z'
          ></path>
        </svg>
      );
    case 'arrow-left':
      return (
        <svg
          width={size}
          aria-hidden='true'
          focusable='false'
          data-prefix='fas'
          data-icon='arrow-left'
          role='img'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 448 512'
        >
          <path
            fill={color}
            d='M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z'
          ></path>
        </svg>
      );
    case 'building':
      return (
        <svg
          id='_001-hotel-1'
          data-name='001-hotel-1'
          xmlns='http://www.w3.org/2000/svg'
          width={size}
          height={size}
          viewBox='0 0 32.733 32.733'
        >
          <g
            id='Group_15'
            data-name='Group 15'
            transform='translate(6.171 9.317)'
          >
            <g id='Group_14' data-name='Group 14'>
              <path
                id='Path_4'
                data-name='Path 4'
                d='M100.226,145.733H97.157a.639.639,0,0,0-.639.639v3.58a.639.639,0,0,0,.639.639h3.069a.639.639,0,0,0,.639-.639v-3.58A.639.639,0,0,0,100.226,145.733Zm-.639,3.58H97.8v-2.3h1.79Z'
                transform='translate(-96.518 -145.733)'
              />
            </g>
          </g>
          <g
            id='Group_17'
            data-name='Group 17'
            transform='translate(6.171 16.477)'
          >
            <g id='Group_16' data-name='Group 16'>
              <path
                id='Path_5'
                data-name='Path 5'
                d='M100.226,257.733H97.157a.639.639,0,0,0-.639.639v3.58a.639.639,0,0,0,.639.639h3.069a.639.639,0,0,0,.639-.639v-3.58A.639.639,0,0,0,100.226,257.733Zm-.639,3.58H97.8v-2.3h1.79Z'
                transform='translate(-96.518 -257.733)'
              />
            </g>
          </g>
          <g
            id='Group_19'
            data-name='Group 19'
            transform='translate(6.171 23.638)'
          >
            <g id='Group_18' data-name='Group 18'>
              <path
                id='Path_6'
                data-name='Path 6'
                d='M100.226,369.733H97.157a.639.639,0,0,0-.639.639v3.58a.639.639,0,0,0,.639.639h3.069a.639.639,0,0,0,.639-.639v-3.58A.639.639,0,0,0,100.226,369.733Zm-.639,3.58H97.8v-2.3h1.79Z'
                transform='translate(-96.518 -369.733)'
              />
            </g>
          </g>
          <g
            id='Group_21'
            data-name='Group 21'
            transform='translate(22.855 23.638)'
          >
            <g id='Group_20' data-name='Group 20'>
              <path
                id='Path_7'
                data-name='Path 7'
                d='M361.205,369.733h-3.069a.639.639,0,0,0-.639.639v3.58a.639.639,0,0,0,.639.639h3.069a.639.639,0,0,0,.639-.639v-3.58A.639.639,0,0,0,361.205,369.733Zm-.639,3.58h-1.79v-2.3h1.79Z'
                transform='translate(-357.497 -369.733)'
              />
            </g>
          </g>
          <g
            id='Group_23'
            data-name='Group 23'
            transform='translate(11.732 9.317)'
          >
            <g id='Group_22' data-name='Group 22'>
              <path
                id='Path_8'
                data-name='Path 8'
                d='M187.219,145.733H184.15a.639.639,0,0,0-.639.639v3.58a.639.639,0,0,0,.639.639h3.069a.639.639,0,0,0,.639-.639v-3.58A.639.639,0,0,0,187.219,145.733Zm-.639,3.58h-1.79v-2.3h1.79Z'
                transform='translate(-183.511 -145.733)'
              />
            </g>
          </g>
          <g
            id='Group_25'
            data-name='Group 25'
            transform='translate(17.294 9.317)'
          >
            <g id='Group_24' data-name='Group 24'>
              <path
                id='Path_9'
                data-name='Path 9'
                d='M274.211,145.733h-3.069a.639.639,0,0,0-.639.639v3.58a.639.639,0,0,0,.639.639h3.069a.639.639,0,0,0,.639-.639v-3.58A.639.639,0,0,0,274.211,145.733Zm-.639,3.58h-1.79v-2.3h1.79Z'
                transform='translate(-270.503 -145.733)'
              />
            </g>
          </g>
          <g
            id='Group_27'
            data-name='Group 27'
            transform='translate(11.732 16.477)'
          >
            <g id='Group_26' data-name='Group 26'>
              <path
                id='Path_10'
                data-name='Path 10'
                d='M187.219,257.733H184.15a.639.639,0,0,0-.639.639v3.58a.639.639,0,0,0,.639.639h3.069a.639.639,0,0,0,.639-.639v-3.58A.639.639,0,0,0,187.219,257.733Zm-.639,3.58h-1.79v-2.3h1.79Z'
                transform='translate(-183.511 -257.733)'
              />
            </g>
          </g>
          <g
            id='Group_29'
            data-name='Group 29'
            transform='translate(17.294 16.477)'
          >
            <g id='Group_28' data-name='Group 28'>
              <path
                id='Path_11'
                data-name='Path 11'
                d='M274.211,257.733h-3.069a.639.639,0,0,0-.639.639v3.58a.639.639,0,0,0,.639.639h3.069a.639.639,0,0,0,.639-.639v-3.58A.639.639,0,0,0,274.211,257.733Zm-.639,3.58h-1.79v-2.3h1.79Z'
                transform='translate(-270.503 -257.733)'
              />
            </g>
          </g>
          <g
            id='Group_31'
            data-name='Group 31'
            transform='translate(22.855 9.317)'
          >
            <g id='Group_30' data-name='Group 30'>
              <path
                id='Path_12'
                data-name='Path 12'
                d='M361.205,145.733h-3.069a.639.639,0,0,0-.639.639v3.58a.639.639,0,0,0,.639.639h3.069a.639.639,0,0,0,.639-.639v-3.58A.639.639,0,0,0,361.205,145.733Zm-.639,3.58h-1.79v-2.3h1.79Z'
                transform='translate(-357.497 -145.733)'
              />
            </g>
          </g>
          <g
            id='Group_33'
            data-name='Group 33'
            transform='translate(22.855 16.477)'
          >
            <g id='Group_32' data-name='Group 32'>
              <path
                id='Path_13'
                data-name='Path 13'
                d='M361.205,257.733h-3.069a.639.639,0,0,0-.639.639v3.58a.639.639,0,0,0,.639.639h3.069a.639.639,0,0,0,.639-.639v-3.58A.639.639,0,0,0,361.205,257.733Zm-.639,3.58h-1.79v-2.3h1.79Z'
                transform='translate(-357.497 -257.733)'
              />
            </g>
          </g>
          <g id='Group_35' data-name='Group 35'>
            <g id='Group_34' data-name='Group 34'>
              <path
                id='Path_14'
                data-name='Path 14'
                d='M32.094,31.455H29.7V6.653a.639.639,0,0,0-.639-.639H25.508V3.708a.639.639,0,0,0-.639-.639H21.353V.639A.639.639,0,0,0,20.714,0H12.019a.639.639,0,0,0-.639.639V3.069H7.865a.639.639,0,0,0-.639.639V6.014H3.677a.639.639,0,0,0-.639.639v24.8H.639a.639.639,0,1,0,0,1.279H32.094a.639.639,0,1,0,0-1.279ZM12.659,1.279h7.416v1.79H12.659Zm6.393,30.176H14.628l4.424-4.424Zm0-6.228c-.014.012-.028.024-.042.038l-5.329,5.329v-2.71l4.1-4.1h1.269Zm-5.37.848V23.783h2.292Zm14.736,5.379H20.33V23.783h.224a.639.639,0,1,0,0-1.279H12.179a.639.639,0,1,0,0,1.279H12.4v7.672H4.316V7.292h7.1a.639.639,0,1,0,0-1.279H8.5V4.347H24.229V6.014H16.464a.639.639,0,1,0,0,1.279H28.417V31.455Z'
              />
            </g>
          </g>
          <g
            id='Group_37'
            data-name='Group 37'
            transform='translate(13.267 6.013)'
          >
            <g id='Group_36' data-name='Group 36'>
              <path
                id='Path_15'
                data-name='Path 15'
                d='M208.6,94.247a.639.639,0,1,0,.187.452A.644.644,0,0,0,208.6,94.247Z'
                transform='translate(-207.51 -94.06)'
              />
            </g>
          </g>
        </svg>
      );
    case 'send':
      return (
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
  }
};

export default Icon;
