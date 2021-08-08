import styled from '@emotion/styled';
import { FC } from 'react';
import Icon from '../../UI/icons/Icon';

export type FoodCardType = {
  id?: number;
  foodImg: string;
  foodType: string;
  foodTypeLink?: string;
  foodName: string;
  foodDescription: string;
  linkToFood: string;
};

const FoodCard: FC<FoodCardType> = ({
  foodImg,
  foodType,
  foodTypeLink,
  foodName,
  foodDescription,
  linkToFood,
}) => (
  <FoodCardStyled>
    <div className='card-image__wrapper'>
      <img src={foodImg} alt={foodName} />
    </div>
    <div className='card-content__wrapper'>
      <a className='food-type__link' href={foodTypeLink}>
        {foodType}
      </a>
      <h4 className='card-title'>{foodName}</h4>
      <p className='card-description'>{foodDescription}</p>
    </div>
    <a className='go-to-food__link' href={linkToFood}>
      <Icon name='arrow-right' color='#ffffff' size={14} />
    </a>
  </FoodCardStyled>
);

const FoodCardStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: ${({ theme }) => theme.colors.grey};
  position: relative;

  ${({ theme }) => theme.media(1)} {
    grid-template-columns: auto 1fr;
    grid-gap: ${({ theme }) => theme.sizes.md(16)}vw;
  }

  .card-image__wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-content__wrapper {
    padding: ${({ theme }) => `${theme.sizes.sm(37)}vw ${theme.sizes.sm(16)}vw`};

    ${({ theme }) => theme.media(1)} {
      padding: ${({ theme }) => `${theme.sizes.md(37)}vw 0`};
    }
  }

  .food-type__link {
    color: ${({ theme }) => theme.colors.blue};
    font-size: ${({ theme }) => theme.sizes.sm(14)}vw;
    line-height: ${({ theme }) => theme.sizes.sm(21)}vw;
    font-weight: 800;
    text-transform: uppercase;
    text-decoration: none;

    ${({ theme }) => theme.media(1)} {
      font-size: ${({ theme }) => theme.sizes.md(14)}vw;
      line-height: ${({ theme }) => theme.sizes.md(21)}vw;
    }
  }

  .card-title {
    font-size: ${({ theme }) => theme.sizes.sm(18)}vw;
    line-height: ${({ theme }) => theme.sizes.sm(27)}vw;
    font-weight: 700;
    margin: 0;

    ${({ theme }) => theme.media(1)} {
      font-size: ${({ theme }) => theme.sizes.md(18)}vw;
      line-height: ${({ theme }) => theme.sizes.md(27)}vw;
    }
  }

  .card-description {
    color: ${({ theme }) => theme.colors.grey6};
    font-size: ${({ theme }) => theme.sizes.sm(14)}vw;
    line-height: ${({ theme }) => theme.sizes.sm(21)}vw;
    font-weight: 500;

    ${({ theme }) => theme.media(1)} {
      font-size: ${({ theme }) => theme.sizes.md(14)}vw;
      line-height: ${({ theme }) => theme.sizes.md(21)}vw;
    }
  }

  .go-to-food__link {
    width: ${({ theme }) => theme.sizes.sm(60)}vw;
    height: ${({ theme }) => theme.sizes.sm(60)}vw;
    background: ${({ theme }) => theme.colors.blue};

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0;
    right: 0;

    ${({ theme }) => theme.media(1)} {
      width: ${({ theme }) => theme.sizes.md(60)}vw;
      height: ${({ theme }) => theme.sizes.md(60)}vw;
    }
  }
`;

export default FoodCard;
