import styled from '@emotion/styled';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export type LinkType = {
  id: number;
  label: string;
  anchor: string;
};

export const MenuComponentData: LinkType[] = [
  {
    id: 0,
    label: 'home',
    anchor: '/',
  },
  {
    id: 1,
    label: 'rooms',
    anchor: '/rooms',
  },
  {
    id: 2,
    label: 'restaurant',
    anchor: '/restaurant',
  },
  {
    id: 3,
    label: 'about us',
    anchor: '/about',
  },
  {
    id: 4,
    label: 'contact',
    anchor: '/contact',
  },
];

const MenuDesktop: FC = () => (
  <Header>
    <HomeLinkItem to='/'>Cat's Rest Hotel</HomeLinkItem>
    <MenuList>
      {MenuComponentData.map((link) => (
        <MenuListItem key={link.id}>
          <MenuListItemLink to={link.anchor}>{link.label}</MenuListItemLink>
        </MenuListItem>
      ))}
    </MenuList>
  </Header>
);

const Header = styled.header`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.sizes.md(30)}vw;
`;

const MenuList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const MenuListItem = styled.li`
  &:not(:nth-last-of-type(1)) {
    margin-right: ${({ theme }) => theme.sizes.md(50)}vw;
  }
`;

const MenuListItemLink = styled(Link)`
  font-weight: 700;
  font-size: ${({ theme }) => theme.sizes.md(12)}vw;
  line-height: ${({ theme }) => theme.sizes.md(18)}vw;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  text-transform: uppercase;
`;

const HomeLinkItem = styled(Link)`
  text-transform: capitalize;
  font-weight: bolder;
  font-size: ${({ theme }) => theme.sizes.md(14)}vw;
  line-height: ${({ theme }) => theme.sizes.md(21)}vw;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
`;

export default MenuDesktop;
