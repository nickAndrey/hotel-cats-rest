import styled from '@emotion/styled';
import { FC } from 'react';
import Wrapper from '../../UI/Wrapper';
import bannerBackground from '../../assets/img/banner-background.jpg';
import Menu from '../header/Menu';
import GetReservation from '../GetReservation/GetReservation';

interface IBanner {
  bigText: string;
  smallText: string;
}

const Banner: FC<IBanner> = ({ bigText, smallText }) => (
  <BannerStyled>
    <img
      className='image'
      src={bannerBackground}
      alt='The best hotel you will ever need'
    />
    <Wrapper>
      <Menu />
      <h1 className='visually-hidden'>hotel you ever need</h1>
      <TextWrapperStyled>
        <h2 className='big-text'>{bigText}</h2>
        <p className='small-text'>{smallText}</p>
      </TextWrapperStyled>
      <GetReservationWrapperStyled>
        <GetReservation />
      </GetReservationWrapperStyled>
    </Wrapper>
  </BannerStyled>
);

const BannerStyled = styled.div`
  position: relative;
  padding-bottom: ${({ theme }) => theme.sizes.sm(209)}vw;

  ${({ theme }) => theme.media(1)} {
    padding-bottom: ${({ theme }) => theme.sizes.md(209)}vw;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    z-index: -1;
  }
`;

const TextWrapperStyled = styled.div`
  max-width: ${({ theme }) => theme.sizes.sm(576)}vw;

  ${({ theme }) => theme.media(1)} {
    max-width: ${({ theme }) => theme.sizes.md(576)}vw;
    margin-top: ${({ theme }) => theme.sizes.md(169)}vw;
  }

  .big-text {
    font-size: ${({ theme }) => theme.sizes.sm(31)}vw;
    line-height: ${({ theme }) => theme.sizes.sm(36)}vw;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 800;
    margin: 0;

    ${({ theme }) => theme.media(1)} {
      font-size: ${({ theme }) => theme.sizes.md(62)}vw;
      line-height: ${({ theme }) => theme.sizes.md(73)}vw;
    }
  }

  .small-text {
    font-size: ${({ theme }) => theme.sizes.sm(14)}vw;
    line-height: ${({ theme }) => theme.sizes.sm(21)}vw;
    color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.media(1)} {
      font-size: ${({ theme }) => theme.sizes.md(14)}vw;
      line-height: ${({ theme }) => theme.sizes.md(21)}vw;
      margin: ${({ theme }) => theme.sizes.md(21)}vw 0 0 0;
    }
  }
`;

const GetReservationWrapperStyled = styled.div`
  position: absolute;
  transform: translateY(30%);
  left: 0;
  right: 0;

  ${({ theme }) => theme.media(1)} {
    transform: translateY(100%);
  }
`;

export default Banner;
