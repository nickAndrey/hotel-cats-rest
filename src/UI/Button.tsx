import styled from '@emotion/styled';
import { FC } from 'react';

interface IButton {
  withIcon?: boolean;
  icon?: any;
  innerText?: string;
}

const Button: FC<IButton> = ({ withIcon, icon, innerText }) => (
  <ButtonStyled>
    {withIcon && icon}
    {innerText}
  </ButtonStyled>
);

const ButtonStyled = styled.button`
  background: ${({ theme }) => theme.colors.blue};
  padding: ${({ theme }) => theme.sizes.sm(21)}vw;
  border: none;
  cursor: pointer;

  ${({ theme }) => theme.media(1)} {
    padding: ${({ theme: { sizes } }) => sizes.md(21)}vw;
  }
`;

export default Button;
