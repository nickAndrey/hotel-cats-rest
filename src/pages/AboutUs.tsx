import styled from '@emotion/styled';
import { FC } from 'react';
import About from '../components/About/About';
import PageBanner from '../components/Banner/PageBanner';
import Footer from '../components/Footer/Footer';
import Photos from '../components/Photos/Photos';

const AboutUs: FC = () => (
  <AboutUsStyled>
    <PageBanner
      bannerTitle='About Us'
      pageTitle='About Us'
      currentURL='/about'
    />
    <About />
    <Photos />
    <Footer />
  </AboutUsStyled>
);

const AboutUsStyled = styled.div``;

export default AboutUs;
