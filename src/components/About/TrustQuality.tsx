import styled from '@emotion/styled';
import { FC } from 'react';
import Button from '../../UI/Button';
import ArrowRight from '../../UI/icons/ArrowRight';

const TrastQuality: FC = () => (
  <TrastQualityStyled>
    <h2 className='title'>Trust and quality are our atuus</h2>
    <p className='medium-text'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
    <p className='regular-text'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
    <Button icon={<ArrowRight color='#ffffff' size={14} />} iconPos='right'>
      read more
    </Button>
  </TrastQualityStyled>
);

const TrastQualityStyled = styled.div`
  padding-right: 0;
  margin-bottom: ${({ theme }) => theme.sizes.sm(16)}vw;
  ${({ theme }) => theme.media(1)} {
    padding-right: ${({ theme }) => theme.sizes.md(108)}vw;
    margin-bottom: 0;
  }

  .title {
    font-weight: 800;
    font-size: ${({ theme }) => theme.sizes.sm(42)}vw;
    line-height: ${({ theme }) => theme.sizes.sm(56)}vw;
    margin-bottom: ${({ theme }) => theme.sizes.sm(10)}vw;

    ${({ theme }) => theme.media(1)} {
      font-size: ${({ theme }) => theme.sizes.md(42)}vw;
      line-height: ${({ theme }) => theme.sizes.md(56)}vw;
      margin-bottom: ${({ theme }) => theme.sizes.md(10)}vw;
    }
  }

  .medium-text {
    font-weight: 500;
    font-size: ${({ theme }) => theme.sizes.sm(16)}vw;
    line-height: ${({ theme }) => theme.sizes.sm(25)}vw;
    margin-bottom: ${({ theme }) => theme.sizes.sm(10)}vw;

    ${({ theme }) => theme.media(1)} {
      font-size: ${({ theme }) => theme.sizes.md(16)}vw;
      line-height: ${({ theme }) => theme.sizes.md(25)}vw;
      margin-bottom: ${({ theme }) => theme.sizes.md(10)}vw;
    }
  }

  .regular-text {
    font-weight: 400;
    font-size: ${({ theme }) => theme.sizes.sm(14)}vw;
    line-height: ${({ theme }) => theme.sizes.sm(21)}vw;
    margin-bottom: ${({ theme }) => theme.sizes.sm(20)}vw;

    ${({ theme }) => theme.media(1)} {
      font-size: ${({ theme }) => theme.sizes.md(14)}vw;
      line-height: ${({ theme }) => theme.sizes.md(21)}vw;
      margin-bottom: ${({ theme }) => theme.sizes.md(20)}vw;
    }
  }
`;

export default TrastQuality;
