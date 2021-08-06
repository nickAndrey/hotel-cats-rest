import styled from '@emotion/styled';
import { FC } from 'react';
import Icon from '../../UI/icons/Icon';

export type SlideItem = {
  id?: number;
  title: string;
  description: string;
};

const SliderItem: FC<SlideItem> = ({ title, description }) => (
  <SliderItemStyled>
    <span className='slide-icon__wrapper'>
      <Icon name='building' size={32} color='white' />
    </span>
    <h4 className='slide-title'>{title}</h4>
    <p className='slide-description line-clamp'>{description}</p>
  </SliderItemStyled>
);

const SliderItemStyled = styled.div`
  width: ${({ theme }) => theme.sizes.sm(260)}vw;
  padding: ${({ theme }) => `${theme.sizes.sm(27)}vw ${theme.sizes.sm(20)}`}vw;
  background: ${({ theme }) => theme.colors.white};
  text-align: center;
  box-sizing: border-box;

  ${({ theme }) => theme.media(1)} {
    width: ${({ theme }) => theme.sizes.md(260)}vw;
    padding: ${({ theme }) =>
      `${theme.sizes.md(27)}vw ${theme.sizes.md(20)}`}vw;
  }

  .slide-icon__wrapper {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    padding: ${({ theme }) => theme.sizes.sm(13)}vw;
    background: ${({ theme }) => theme.colors.blue};

    ${({ theme }) => theme.media(1)} {
      padding: ${({ theme }) => theme.sizes.md(13)}vw;
    }
  }

  .slide-title {
    font-size: ${({ theme }) => theme.sizes.sm(18)}vw;
    line-height: ${({ theme }) => theme.sizes.sm(27)}vw;
    font-weight: 400;

    ${({ theme }) => theme.media(1)} {
      font-size: ${({ theme }) => theme.sizes.md(18)}vw;
      line-height: ${({ theme }) => theme.sizes.md(27)}vw;
    }
  }

  .slide-description {
    color: ${({ theme }) => theme.colors.grey6};
    font-size: ${({ theme }) => theme.sizes.sm(14)}vw;
    line-height: ${({ theme }) => theme.sizes.sm(21)}vw;

    ${({ theme }) => theme.media(1)} {
      font-size: ${({ theme }) => theme.sizes.md(14)}vw;
      line-height: ${({ theme }) => theme.sizes.md(21)}vw;
    }
  }

  .line-clamp {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export default SliderItem;
