import styled from '@emotion/styled';
import { FC } from 'react';

const Menu: FC = () => {
  const data: { [key: string]: any }[] = [
    {
      id: 0,
      label: 'home',
      anchor: '',
    },
    {
      id: 1,
      label: 'rooms',
      anchor: '',
    },
    {
      id: 2,
      label: 'restaurant',
      anchor: '',
    },
    {
      id: 3,
      label: 'about us',
      anchor: '',
    },
    {
      id: 4,
      label: 'contact',
      anchor: '',
    },
  ];

  return (
    <MenuStyled>
      <HomeLinkItem href='/'>Cat's Rest Hotel</HomeLinkItem>
      <MenuListStyled>
        {data.map(({ id, label, anchor }) => (
          <li key={id}>
            <ListItemLink href={anchor}>{label}</ListItemLink>
          </li>
        ))}
      </MenuListStyled>
    </MenuStyled>
  );
};

const MenuStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => theme.sizes.md(20)}vw;
`;

const MenuListStyled = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;

  li:not(:last-child) {
    margin-right: ${({ theme }) => theme.sizes.sm(50)}vw;

    ${({ theme }) => theme.media(1)} {
      margin-right: ${({ theme }) => theme.sizes.md(50)}vw;
    }
  }
`;

const HomeLinkItem = styled.a`
  text-transform: capitalize;
  font-weight: bolder;
  font-size: ${({ theme }) => theme.sizes.md(14)}vw;
  line-height: ${({ theme }) => theme.sizes.md(21)}vw;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
`;

const ListItemLink = styled.a`
  font-size: ${({ theme }) => theme.sizes.md(12)}vw;
  line-height: ${({ theme }) => theme.sizes.md(8)}vw;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  text-decoration: none;
`;

export default Menu;