import { FC } from 'react';
import Slider from 'react-slick';
import ComponentTitle from '../../UI/ComponentTitle';
import Wrapper from '../../UI/Wrapper';
import img1 from '../../assets/img/photos/photo1.jpg';
import img2 from '../../assets/img/photos/photo2.jpg';
import img3 from '../../assets/img/photos/photo3.jpg';
import img4 from '../../assets/img/photos/photo4.jpg';
import styled from '@emotion/styled';
import NextArrow from './Arrows/NextArrow';
import PrevArrow from './Arrows/PrevArrow';

const Photos: FC = () => {
  const sliderConfig = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
    <>
      <Wrapper>
        <ComponentTitle
          text='See our latest photos from restaurant and hotel'
          mt={110}
          maxWidth={566}
        />
      </Wrapper>
      <SliderWrapper>
        <Slider {...sliderConfig}>
          <img src={img1} alt='rest hotel' />
          <img src={img2} alt='rest hotel' />
          <img src={img3} alt='rest hotel' />
          <img src={img4} alt='rest hotel' />
          <img src={img1} alt='rest hotel' />
          <img src={img2} alt='rest hotel' />
          <img src={img3} alt='rest hotel' />
          <img src={img4} alt='rest hotel' />
        </Slider>
      </SliderWrapper>
    </>
  );
};

const SliderWrapper = styled.div`
  margin-top: ${({ theme }) => theme.sizes.sm(50)}vw;

  ${({ theme }) => theme.media(1)} {
    margin-top: ${({ theme }) => theme.sizes.md(50)}vw;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .slick-slide > div {
    height: ${({ theme }) => theme.sizes.sm(300)}vw;

    ${({ theme }) => theme.media(1)} {
      height: ${({ theme }) => theme.sizes.md(340)}vw;
    }
  }
`;

export default Photos;
