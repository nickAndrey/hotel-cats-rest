import styled from '@emotion/styled';
import { FC } from 'react';

type ButtonType = {
  icon?: any;
  iconPos?: 'left' | 'right';
};

const Button: FC<ButtonType> = ({ icon, children, iconPos }) => (
  <ButtonStyled iconPos={iconPos}>
    {icon && icon}
    <span className='text-content'>{children}</span>
  </ButtonStyled>
);

const ButtonStyled = styled.button<{ iconPos: ButtonType['iconPos'] }>`
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.sizes.sm(15)}vw;
  border: none;
  cursor: pointer;

  ${({ theme }) => theme.media(1)} {
    padding: ${({ theme: { sizes } }) => sizes.md(21)}vw;
  }

  .text-content {
    margin: 0
      ${({ iconPos }) =>
        iconPos ? (iconPos === 'left' ? '0 0 10px' : '10px 0 0') : 0};
  }

  display: flex;
  align-items: center;
  flex-direction: ${({ iconPos }) =>
    iconPos === 'left' ? 'row' : 'row-reverse'};

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
