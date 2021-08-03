import styled from '@emotion/styled';
import { FC } from 'react';
import Wrapper from '../../UI/Wrapper';

const About: FC = () => (
  <AboutStyled>
    <Wrapper></Wrapper>
  </AboutStyled>
);

const AboutStyled = styled.section`
  padding-top: ${({ theme }) => theme.sizes.sm(164)}vw;

  ${({ theme }) => theme.media(1)} {
    padding-top: ${({ theme }) => theme.sizes.md(164)}vw;
  }
`;

export default About;
