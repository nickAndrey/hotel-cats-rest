import { FC } from 'react';
import ComponentTitle from '../../UI/ComponentTitle';
import Wrapper from '../../UI/Wrapper';
import FoodCard, { FoodCardType } from '../Cards/FoodCard';
import img1 from '../../assets/img/blog/blog-image-1.jpg';
import img2 from '../../assets/img/blog/blog-image-2.jpg';
import img3 from '../../assets/img/blog/blog-image-3.jpg';
import styled from '@emotion/styled';

const Blog: FC = () => {
  const data: FoodCardType[] = [
    {
      id: 0,
      foodImg: img1,
      foodType: 'Food and life',
      foodTypeLink: '',
      foodName: 'Succed in hotel business',
      foodDescription:
        'Fresh food directly from our restaurant ready coocked for you and you familly',
    },
    {
      id: 1,
      foodImg: img2,
      foodType: 'Cooking',
      foodTypeLink: '',
      foodName: 'Cooking delicious food',
      foodDescription:
        'Fresh food directly from our restaurant ready coocked for you and you familly',
    },
    {
      id: 2,
      foodImg: img3,
      foodType: 'Fruits',
      foodTypeLink: '',
      foodName: 'Getting fresh fruits',
      foodDescription:
        'Fresh food directly from our restaurant ready coocked for you and you familly',
    },
    {
      id: 3,
      foodImg: img3,
      foodType: 'Fruits',
      foodTypeLink: '',
      foodName: 'Getting fresh fruits',
      foodDescription:
        'Fresh food directly from our restaurant ready coocked for you and you familly',
    },
    {
      id: 4,
      foodImg: img2,
      foodType: 'Cooking',
      foodTypeLink: '',
      foodName: 'Cooking delicious food',
      foodDescription:
        'Fresh food directly from our restaurant ready coocked for you and you familly',
    },
    {
      id: 5,
      foodImg: img1,
      foodType: 'Food and life',
      foodTypeLink: '',
      foodName: 'Succed in hotel business',
      foodDescription:
        'Fresh food directly from our restaurant ready coocked for you and you familly',
    },
  ];

  return (
    <Wrapper>
      <ComponentTitle
        text='Read our newest blog post right away'
        maxWidth={465}
        mt={110}
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
          }) => (
            <FoodCard
              key={id}
              foodImg={foodImg}
              foodType={foodType}
              foodTypeLink={foodTypeLink}
              foodName={foodName}
              foodDescription={foodDescription}
              noLink={true}
              viewAs='column'
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
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${({ theme }) => theme.sizes.md(16)}vw;
    margin-top: ${({ theme }) => theme.sizes.md(50)}vw;
  }
`;

export default Blog;
