import { FC } from 'react';
import CardsGrid from '../Cards/CardsGrid';
import FoodCard, { FoodCardType } from '../Cards/FoodCard';
import img1 from '../../assets/img/rooms/img1.jpg';
import img2 from '../../assets/img/rooms/img2.jpg';
import img3 from '../../assets/img/rooms/img3.jpg';
import img4 from '../../assets/img/rooms/img4.jpg';

const RoomsGrid: FC = () => {
  const data: FoodCardType[] = [
    {
      id: 0,
      foodImg: img1,
      foodType: 'Big',
      foodTypeLink: '',
      foodName: 'Spacious Room',
      foodDescription:
        'The most spacious room you will ever see in our hotel. Equipped with span and warm beds',
      linkToFood: '',
    },
    {
      id: 1,
      foodImg: img2,
      foodType: 'Small',
      foodTypeLink: '',
      foodName: 'Small Cheap Room',
      foodDescription:
        'Smallest and the most economic room in our hotel. Save an extra buck for your holyday',
      linkToFood: '',
    },
    {
      id: 2,
      foodImg: img3,
      foodType: 'Prremium',
      foodTypeLink: '',
      foodName: 'Big Room',
      foodDescription:
        'Biggest room in our hotel fully equipped with Wi-fi and hot coffee',
      linkToFood: '',
    },
    {
      id: 3,
      foodImg: img4,
      foodType: 'Expensive',
      foodTypeLink: '',
      foodName: 'Expensive Luxury Room',
      foodDescription:
        'The most expensive room available for milionars and very rich people',
      linkToFood: '',
    },
    {
      id: 4,
      foodImg: img1,
      foodType: 'Big',
      foodTypeLink: '',
      foodName: 'Spacious Room',
      foodDescription:
        'The most spacious room you will ever see in our hotel. Equipped with span and warm beds',
      linkToFood: '',
    },
    {
      id: 5,
      foodImg: img2,
      foodType: 'Small',
      foodTypeLink: '',
      foodName: 'Small Cheap Room',
      foodDescription:
        'Smallest and the most economic room in our hotel. Save an extra buck for your holyday',
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
          />
        )
      )}
    </CardsGrid>
  );
};

export default RoomsGrid;
