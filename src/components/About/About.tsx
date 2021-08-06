import styled from '@emotion/styled';
import { FC } from 'react';
import Wrapper from '../../UI/Wrapper';
import DetailsSlider from './Slider/DetailsSlider';
import TrastQuality from './TrustQuality/TrustQuality';
import TrustQualityGallery from './TrustQuality/TrustQualityGallery';

const About: FC = () => (
  <AboutStyled>
    <Wrapper>
      <div className='trust-quality-row'>
        <TrastQuality />
        <TrustQualityGallery />
      </div>
    </Wrapper>
    <DetailsSlider />
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
