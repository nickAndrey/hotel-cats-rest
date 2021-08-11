import styled from '@emotion/styled';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button';
import Icon from '../../UI/icons/Icon';
import { MenuComponentData } from './MenuDesktop';

const MenuMobile: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Header>
      <HomeLinkItem to='/'>Cat's Rest Hotel</HomeLinkItem>
      <Button
        onClick={() => setOpen(!open)}
        icon={<Icon name='bars' color='#ffffff' size={14} />}
      />
      {open && (
        <NavMenu>
          {MenuComponentData.map((link) => (
            <MenuListItemLink key={link.id} to={link.anchor}>
              {link.label}
            </MenuListItemLink>
          ))}
        </NavMenu>
      )}
    </Header>
  );
};

const Header = styled.header`
  position: relative;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.sizes.md(30)}vw;
`;

const HomeLinkItem = styled(Link)`
  text-transform: capitalize;
  font-weight: bolder;
  font-size: ${({ theme }) => theme.sizes.sm(14)}vw;
  line-height: ${({ theme }) => theme.sizes.sm(21)}vw;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
`;

const NavMenu = styled.nav`
  list-style-type: none;
  position: absolute;
  margin: 0;
  padding: 0;
  left: 0;
  right: 0;
  transform: translate(0%, 25%);
`;

const MenuListItemLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.blue};
  padding: ${({ theme }) => theme.sizes.sm(10)}vw;
  background: ${({ theme }) => theme.colors.grey};
  transition: all 0.5s;
  display: block;

  &:hover {
    background: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default MenuMobile;
