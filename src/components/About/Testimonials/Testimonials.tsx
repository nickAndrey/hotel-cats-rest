import { FC } from 'react';
import Slider from 'react-slick';
import { TestimonialSliderItemData } from './TestimonialSlider/TestimonialSliderItem';
import userAvatar from '../../../assets/img/about/testimonials/user.png';
import background from '../../../assets/img/about/testimonials/background.jpg';
import styled from '@emotion/styled';
import InnerSlider from './TestimonialSlider/InnerSlider';
import ComponentTitle from '../../../UI/ComponentTitle';
import NextArrow from './Arrows/NextArrow';
import PrevArrow from './Arrows/PrevArrow';

type TestimonialsData = {
  id?: number;
  title: string;
  roomImage: string;
  innerSlider: TestimonialSliderItemData[];
};

const Testimonials: FC = () => {
  const data: TestimonialsData[] = [
    {
      id: 0,
      title: 'We trust our customers and they trust us too',
      roomImage: background,
      innerSlider: [
        {
          id: 0,
          name: 'John Doe',
          scope: 'IT Engineer',
          avatar: userAvatar,
          comment:
            "I'm very glad I had the opportunity to visit this hotel. The stuff is very friendly and I will definetly visit the hotel again next year.",
        },
        {
          id: 1,
          name: 'John Doe',
          scope: 'IT Engineer',
          avatar: userAvatar,
          comment:
            "I'm very glad I had the opportunity to visit this hotel. The stuff is very friendly and I will definetly visit the hotel again next year.",
        },
        {
          id: 2,
          name: 'John Doe',
          scope: 'IT Engineer',
          avatar: userAvatar,
          comment:
            "I'm very glad I had the opportunity to visit this hotel. The stuff is very friendly and I will definetly visit the hotel again next year.",
        },
        {
          id: 3,
          name: 'John Doe',
          scope: 'IT Engineer',
          avatar: userAvatar,
          comment:
            "I'm very glad I had the opportunity to visit this hotel. The stuff is very friendly and I will definetly visit the hotel again next year.",
        },
      ],
    },
    {
      id: 1,
      title: 'We trust our customers and they trust us too',
      roomImage: background,
      innerSlider: [
        {
          id: 0,
          name: 'John Doe',
          scope: 'IT Engineer',
          avatar: userAvatar,
          comment:
            "I'm very glad I had the opportunity to visit this hotel. The stuff is very friendly and I will definetly visit the hotel again next year.",
        },
        {
          id: 1,
          name: 'John Doe',
          scope: 'IT Engineer',
          avatar: userAvatar,
          comment:
            "I'm very glad I had the opportunity to visit this hotel. The stuff is very friendly and I will definetly visit the hotel again next year.",
        },
        {
          id: 2,
          name: 'John Doe',
          scope: 'IT Engineer',
          avatar: userAvatar,
          comment:
            "I'm very glad I had the opportunity to visit this hotel. The stuff is very friendly and I will definetly visit the hotel again next year.",
        },
        {
          id: 3,
          name: 'John Doe',
          scope: 'IT Engineer',
          avatar: userAvatar,
          comment:
            "I'm very glad I had the opportunity to visit this hotel. The stuff is very friendly and I will definetly visit the hotel again next year.",
        },
      ],
    },
  ];

  const sliderConfig = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    draggable: false,
    swipe: false,
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
    <Slider {...sliderConfig}>
      {data.map((item) => (
        <SlideStyled key={item.id}>
          <div className='container'>
            <div className='container-content'>
              <ComponentTitle text={item.title} />
              <InnerSlider data={item.innerSlider} />
            </div>
            <div className='image-wrapper'>
              <img src={item.roomImage} alt="hotel's room" />
            </div>
          </div>
        </SlideStyled>
      ))}
    </Slider>
  );
};

const SlideStyled = styled.div`
  background: ${({ theme }) => theme.colors.grey};

  .container {
    display: grid;
    grid-template-columns: 1fr;

    ${({ theme }) => theme.media(1)} {
      grid-template-columns: repeat(2, 1fr);
    }

    .container-content {
      padding-top: ${({ theme }) => theme.sizes.sm(97)}vw;
      padding-bottom: ${({ theme }) => theme.sizes.sm(50)}vw;
      max-width: 80%;
      margin: 0 auto;

      ${({ theme }) => theme.media(1)} {
        padding: ${({ theme: { sizes } }) =>
          `${sizes.md(97)}vw ${sizes.md(132)}vw 0 ${sizes.md(139)}vw`};
      }
    }

    .image-wrapper {
      img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
  }
`;

export default Testimonials;
