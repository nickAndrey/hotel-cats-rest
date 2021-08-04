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
  padding: ${({ theme }) => theme.sizes.sm(10)}vw;
  border: none;
  cursor: pointer;

  ${({ theme }) => theme.media(1)} {
    padding: ${({ theme: { sizes } }) => sizes.md(21)}vw;
  }

  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;

  &::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  &:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
`;

export default Button;
