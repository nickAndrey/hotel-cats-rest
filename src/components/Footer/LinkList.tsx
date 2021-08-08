import styled from '@emotion/styled';
import { FC } from 'react';

type LinksListType = {
  listOf: 'usefulLinks' | 'privacy' | 'contactInfo';
};

const getList = (listOf: LinksListType['listOf']) => {
  switch (listOf) {
    case 'contactInfo':
      return [
        'example@yahoo.com',
        '+0 320 422 4254',
        'Main Str Chicago Ilinois',
      ];
    case 'privacy':
      return ['Career', 'About Us', 'Contact Us', 'Services'];
    case 'usefulLinks':
      return ['Blog', 'Rooms', 'Gift Card', 'Testimonials'];
    default:
      return [];
  }
};

const LinkList: FC<LinksListType> = ({ listOf }) => {
  const data = getList(listOf);
  return (
    <LinkListStyled>
      {data.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </LinkListStyled>
  );
};

const LinkListStyled = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    color: ${({ theme }) => theme.colors.blue};
    margin-bottom: ${({ theme }) => theme.sizes.sm(10)}vw;

    ${({ theme }) => theme.media(1)} {
      margin-bottom: ${({ theme }) => theme.sizes.md(10)}vw;
    }
  }
`;

export default LinkList;
