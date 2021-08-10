import styled from '@emotion/styled';
import { FC } from 'react';
import TrastQuality from '../components/About/TrustQuality/TrustQuality';
import TrustQualityGallery from '../components/About/TrustQuality/TrustQualityGallery';
import PageBanner from '../components/Banner/PageBanner';
import Footer from '../components/Footer/Footer';
import GetReservation from '../components/GetReservation/GetReservation';
import Photos from '../components/Photos/Photos';
import RestaurantGrid from '../components/Restaurant/RestaurantGrid';
import ComponentTitle from '../UI/ComponentTitle';
import Wrapper from '../UI/Wrapper';

const Restaurant: FC = () => (
  <RestaurantStyled>
    <PageBanner
      bannerTitle='Restaurant'
      currentURL='/restaurant'
      pageTitle='restaurant in hotel'
    />
    <Wrapper>
      <div className='trust-quality-row'>
        <TrastQuality />
        <TrustQualityGallery />
      </div>
      <ComponentTitle
        text='Explore our menu and eat what you want'
        mt={111}
        maxWidth={498}
      />
      <RestaurantGrid />
    </Wrapper>
    <GetReservation mt={90} />
    <Photos />
    <Footer />
  </RestaurantStyled>
);

const RestaurantStyled = styled.div`
  .trust-quality-row {
    display: grid;
    padding-top: ${({ theme }) => theme.sizes.sm(164)}vw;

    ${({ theme }) => theme.media(1)} {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-flow: dense;
      padding-top: ${({ theme }) => theme.sizes.md(164)}vw;
    }

    div:first-of-type {
      grid-column: 1;
      ${({ theme }) => theme.media(1)} {
        padding-left: ${({ theme }) => theme.sizes.md(108)}vw;
        padding-right: 0;
        grid-column: 2;
      }
    }
  }
`;

export default Restaurant;