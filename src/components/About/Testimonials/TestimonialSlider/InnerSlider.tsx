import styled from '@emotion/styled';
import { FC } from 'react';
import Slider from 'react-slick';
import TestimonialSliderItem, {
  TestimonialSliderItemData,
} from './TestimonialSliderItem';

type InnerSliderType = {
  data: TestimonialSliderItemData[];
};

const InnerSlider: FC<InnerSliderType> = ({ data }) => {
  const sliderConfig = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    dots: true,
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
    <SliderStyled>
      <Slider {...sliderConfig}>
        {data.map(({ id, name, scope, avatar, comment }) => (
          <TestimonialSliderItem
            key={id}
            name={name}
            scope={scope}
            avatar={avatar}
            comment={comment}
          />
        ))}
      </Slider>
    </SliderStyled>
  );
};

const SliderStyled = styled.div`
  .slick-slider {
    max-width: ${({ theme }) => theme.sizes.sm(320)}vw;
    margin-top: ${({ theme }) => theme.sizes.sm(30)}vw;

    ${({ theme }) => theme.media(1)} {
      max-width: ${({ theme }) => theme.sizes.md((1366 - 132 - 139) / 2)}vw;
      margin-top: ${({ theme }) => theme.sizes.md(30)}vw;
    }
  }
`;

export default InnerSlider;
