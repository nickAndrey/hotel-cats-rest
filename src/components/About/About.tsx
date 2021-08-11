import styled from '@emotion/styled';
import { FC } from 'react';
import Wrapper from '../../UI/Wrapper';
import DetailsSlider from './Slider/DetailsSlider';
import Testimonials from './Testimonials/Testimonials';
import TrastQuality from './TrustQuality/TrustQuality';
import TrustQualityGallery from './TrustQuality/TrustQualityGallery';

const About: FC = () => (
  <AboutStyled>
    <Wrapper>
      <div className='trust-quality-row'>
        <TrastQuality
          title='Trust and quality are our atuus'
          text1='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          text2='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />
        <TrustQualityGallery />
      </div>
    </Wrapper>
    <DetailsSlider />
    <Testimonials />
  </AboutStyled>
);

const AboutStyled = styled.section`
  .trust-quality-row {
    display: grid;
    padding-top: ${({ theme }) => theme.sizes.sm(164)}vw;

    ${({ theme }) => theme.media(1)} {
      grid-template-columns: repeat(2, 1fr);
      padding-top: ${({ theme }) => theme.sizes.md(164)}vw;
    }
  }
`;

export default About;
