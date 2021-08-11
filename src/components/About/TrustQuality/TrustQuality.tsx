import styled from '@emotion/styled';
import { FC } from 'react';
import Button from '../../../UI/Button';
import ComponentTitle from '../../../UI/ComponentTitle';
import Icon from '../../../UI/icons/Icon';

type TrastQualityType = {
  title: string;
  text1: string;
  text2: string;
};

const TrastQuality: FC<TrastQualityType> = ({ title, text1, text2 }) => (
  <TrastQualityStyled>
    <ComponentTitle text={title} />
    <p className='medium-text'>{text1}</p>
    <p className='regular-text'>{text2}</p>
    <Button
      icon={<Icon name='arrow-right' color='#ffffff' size={14} />}
      iconPos='right'
    >
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
