import styled from '@emotion/styled';
import { FC } from 'react';
import image1 from '../../../assets/img/about/rhema-kallianpur-jbJ-_hw2yag-unsplash.jpg';
import image2 from '../../../assets/img/about/chelsea-gates-0653_wY0nRc-unsplash.jpg';
import image3 from '../../../assets/img/about/eddi-aguirre-ZAVHbpOn4Jk-unsplash.jpg';

const TrustQualityGallery: FC = () => (
  <TrustQualityGalleryStyled>
    <img className='image' src={image1} alt='hotel for rest' />
    <img className='image' src={image2} alt='hotel for rest' />
    <img className='image' src={image3} alt='hotel for rest' />
  </TrustQualityGalleryStyled>
);

const TrustQualityGalleryStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${({ theme }) => theme.sizes.sm(16)}vw;

  .image {
    width: 100%;
    height: auto;
  }

  .image:last-of-type {
    grid-column: 1/-1;
  }

  ${({ theme }) => theme.media(1)} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${({ theme }) => theme.sizes.md(16)}vw;
    max-width: ${({ theme }) => theme.sizes.md(536)}vw;
  }
`;

export default TrustQualityGallery;
