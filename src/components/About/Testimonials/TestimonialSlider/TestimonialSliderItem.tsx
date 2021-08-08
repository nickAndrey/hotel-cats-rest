import styled from '@emotion/styled/';
import { FC } from 'react';

export type TestimonialSliderItemData = {
  id?: number;
  name: string;
  scope: string;
  avatar: string;
  comment: string;
};

const TestimonialSliderItem: FC<TestimonialSliderItemData> = ({
  name,
  scope,
  avatar,
  comment,
}) => (
  <TestimonialSliderItemStyled>
    <div className='slider-item__header'>
      <img src={avatar} alt='user avatar' className='slider-item__avatar' />
      <div className='slider-item__data'>
        <h4 className='slider-item__name'>{name}</h4>
        <span className='slider-item__scope'>{scope}</span>
      </div>
    </div>
    <p className='slider-item__comment'>{comment}</p>
  </TestimonialSliderItemStyled>
);
const TestimonialSliderItemStyled = styled.div`
  .slider-item__header {
    display: flex;
    align-items: center;

    .slider-item__avatar {
      width: ${({ theme }) => theme.sizes.sm(57)}vw;
      height: ${({ theme }) => theme.sizes.sm(57)}vw;
      margin-right: ${({ theme }) => theme.sizes.sm(19)}vw;
      object-fit: cover;

      ${({ theme }) => theme.media(1)} {
        width: ${({ theme }) => theme.sizes.md(57)}vw;
        height: ${({ theme }) => theme.sizes.md(57)}vw;
        margin-right: ${({ theme }) => theme.sizes.md(19)}vw;
      }
    }
    .slider-item__data {
      .slider-item__name {
        font-size: ${({ theme }) => theme.sizes.sm(18)}vw;
        line-height: ${({ theme }) => theme.sizes.sm(27)}vw;
        font-weight: 500;
        margin: 0;

        ${({ theme }) => theme.media(1)} {
          font-size: ${({ theme }) => theme.sizes.md(18)}vw;
          line-height: ${({ theme }) => theme.sizes.md(27)}vw;
        }
      }
      .slider-item__scope {
        font-size: ${({ theme }) => theme.sizes.sm(12)}vw;
        line-height: ${({ theme }) => theme.sizes.sm(18)}vw;
        color: ${({ theme }) => theme.colors.grey2};
        font-weight: 500;

        ${({ theme }) => theme.media(1)} {
          font-size: ${({ theme }) => theme.sizes.md(12)}vw;
          line-height: ${({ theme }) => theme.sizes.md(18)}vw;
        }
      }
    }
  }
  .slider-item__comment {
    font-size: ${({ theme }) => theme.sizes.sm(14)}vw;
    line-height: ${({ theme }) => theme.sizes.sm(21)}vw;

    ${({ theme }) => theme.media(1)} {
      font-size: ${({ theme }) => theme.sizes.md(14)}vw;
      line-height: ${({ theme }) => theme.sizes.md(21)}vw;
    }
  }
`;

export default TestimonialSliderItem;
