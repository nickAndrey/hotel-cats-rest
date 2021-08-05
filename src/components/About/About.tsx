import styled from '@emotion/styled';
import { FC } from 'react';
import Wrapper from '../../UI/Wrapper';
import TrastQuality from './TrustQuality';
import TrustQualityGallery from './TrustQualityGallery';

const About: FC = () => (
  <AboutStyled>
    <Wrapper>
      <div className='trust-quality-row'>
        <TrastQuality />
        <TrustQualityGallery />
      </div>
    </Wrapper>
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
