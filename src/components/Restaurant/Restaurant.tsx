import { FC } from 'react';
import ComponentTitle from '../../UI/ComponentTitle';
import Wrapper from '../../UI/Wrapper';
import FoodCard, { FoodCardType } from '../Cards/FoodCard';
import image1 from '../../assets/img/restaurant/food1.jpg';
import image2 from '../../assets/img/restaurant/food2.jpg';
import styled from '@emotion/styled';

const Restaurant: FC = () => {
  const data: FoodCardType[] = [
    {
      id: 0,
      foodImg: image1,
      foodType: 'Food',
      foodTypeLink: '',
      foodName: 'Fresh fish and onions',
      foodDescription:
        'Fresh food directly from our restaurant ready coocked for you and you familly',
      linkToFood: '',
    },
    {
      id: 1,
      foodImg: image2,
      foodType: 'Desert',
      foodTypeLink: '',
      foodName: 'Chocolate cupcakes',
      foodDescription:
        'Fresh food directly from our restaurant ready coocked for you and you familly',
      linkToFood: '',
    },
    {
      id: 2,
      foodImg: image2,
      foodType: 'Desert',
      foodTypeLink: '',
      foodName: 'Chocolate cupcakes',
      foodDescription:
        'Fresh food directly from our restaurant ready coocked for you and you familly',
      linkToFood: '',
    },
    {
      id: 3,
      foodImg: image1,
      foodType: 'Food',
      foodTypeLink: '',
      foodName: 'Fresh fish and onions',
      foodDescription:
        'Fresh food directly from our restaurant ready coocked for you and you familly',
      linkToFood: '',
    },
  ];

  return (
    <Wrapper>
      <ComponentTitle
        text='Explore our menu and eat what you want'
        mt={111}
        maxWidth={498}
      />
      <CardsGridStyled>
        {data.map(
          ({
            id,
            foodImg,
            foodType,
            foodTypeLink,
            foodName,
            foodDescription,
            linkToFood,
          }) => (
            <FoodCard
              key={id}
              foodImg={foodImg}
              foodType={foodType}
              foodTypeLink={foodTypeLink}
              foodName={foodName}
              foodDescription={foodDescription}
              linkToFood={linkToFood}
            />
          )
        )}
      </CardsGridStyled>
    </Wrapper>
  );
};

const CardsGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${({ theme }) => theme.sizes.sm(16)}vw;
  margin-top: ${({ theme }) => theme.sizes.sm(50)}vw;

  ${({ theme }) => theme.media(1)} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${({ theme }) => theme.sizes.md(16)}vw;
    margin-top: ${({ theme }) => theme.sizes.md(50)}vw;
  }
`;

export default Restaurant;
