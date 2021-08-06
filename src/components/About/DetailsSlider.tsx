import styled from '@emotion/styled';
import { FC } from 'react';
import Slider from 'react-slick';
import Wrapper from '../../UI/Wrapper';
import backgroundSlider from '../../assets/img/about/slider-background.jpg';
import SliderItem, { SlideItem } from './SliderItem';
import NextArrow from './Arrows/NextArrow';
import PrevArrow from './Arrows/PrevArrow';

const DetailsSlider: FC = () => {
  const sliderData: SlideItem[] = [
    {
      id: 0,
      title: 'Free Wifi to stay connected',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 1,
      title: 'Free Wifi to stay connected',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 2,
      title: 'Free Wifi to stay connected',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 3,
      title: 'Free Wifi to stay connected',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 4,
      title: 'Free Wifi to stay connected',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];
  const sliderConfig = {
    className: '',
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <DetailsSliderStyled>
      <Wrapper>
        <h4 className='slider-detail__title'>
          We bring you the finest details
        </h4>
        <Slider {...sliderConfig}>
          {sliderData.map((item) => (
            <SliderItem
              key={item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </Slider>
      </Wrapper>
    </DetailsSliderStyled>
  );
};

const DetailsSliderStyled = styled.div`
  padding-top: ${({ theme }) => theme.sizes.sm(113)}vw;
  padding-bottom: ${({ theme }) => theme.sizes.sm(90)}vw;
  margin-top: ${({ theme }) => theme.sizes.sm(90)}vw;
  background: url(${backgroundSlider}) no-repeat;
  background-size: cover;
  position: relative;

  ${({ theme }) => theme.media(1)} {
    padding-top: ${({ theme }) => theme.sizes.md(113)}vw;
    padding-bottom: ${({ theme }) => theme.sizes.md(90)}vw;
    margin-top: ${({ theme }) => theme.sizes.md(90)}vw;
  }

  &:before {
    content: '';
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .slider-detail__title {
    font-size: ${({ theme }) => theme.sizes.sm(42)}vw;
    line-height: ${({ theme }) => theme.sizes.sm(56)}vw;
    margin: 0 0 ${({ theme }) => theme.sizes.sm(34)}vw 0;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 800;

    ${({ theme }) => theme.media(1)} {
      font-size: ${({ theme }) => theme.sizes.md(42)}vw;
      line-height: ${({ theme }) => theme.sizes.md(56)}vw;
      margin: 0 0 ${({ theme }) => theme.sizes.md(34)}vw 0;
    }
  }

  .details-slider {
    .slick-slide {
      // margin: 0 27px;
    }
  }
`;

export default DetailsSlider;
