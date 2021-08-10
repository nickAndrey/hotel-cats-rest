import { FC } from 'react';
import FoodCard, { FoodCardType } from '../Cards/FoodCard';
import image1 from '../../assets/img/restaurant/food1.jpg';
import image2 from '../../assets/img/restaurant/food2.jpg';
import CardsGrid from '../Cards/CardsGrid';

const RestaurantGrid: FC = () => {
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
    <CardsGrid columns={2}>
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
            viewAs='row'
          />
        )
      )}
    </CardsGrid>
  );
};

export default RestaurantGrid;
