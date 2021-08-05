import styled from '@emotion/styled';
import { FC } from 'react';
import image1 from '../../assets/img/about/rhema-kallianpur-jbJ-_hw2yag-unsplash.jpg';
import image2 from '../../assets/img/about/chelsea-gates-0653_wY0nRc-unsplash.jpg';
import image3 from '../../assets/img/about/eddi-aguirre-ZAVHbpOn4Jk-unsplash.jpg';

const TrustQualityGallery: FC = () => (
  <TrustQualityGalleryStyled>
    <div className='image-wrapper'>
      <img className='image' src={image1} alt='hotel for rest' />
      <img className='image' src={image2} alt='hotel for rest' />
    </div>
    <div className='image-wrapper'>
      <img className='image' src={image3} alt='hotel for rest' />
    </div>
  </TrustQualityGalleryStyled>
);

const TrustQualityGalleryStyled = styled.div`
  .image {
    width: 100%;
    height: auto;
  }

  .image-wrapper {
    display: flex;
    flex-direction: column;

    ${({ theme }) => theme.media(1)} {
      flex-direction: row;
    }

    .image {
      margin-bottom: ${({ theme }) => theme.sizes.sm(8)}vw;
      ${({ theme }) => theme.media(1)} {
        margin-right: ${({ theme }) => theme.sizes.md(16)}vw;
        margin-bottom: ${({ theme }) => theme.sizes.md(16)}vw;
      }
    }
  }
`;

export default TrustQualityGallery;
