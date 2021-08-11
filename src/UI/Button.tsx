import styled from '@emotion/styled';
import { FC } from 'react';

type ButtonType = {
  icon?: any;
  iconPos?: 'left' | 'right';
  onClick?: any;
};

const Button: FC<ButtonType> = ({ icon, children, iconPos, onClick }) => (
  <ButtonStyled iconPos={iconPos} onClick={onClick}>
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
    font-size: ${({ theme }) => theme.sizes.md(14)}vw;
    line-height: ${({ theme }) => theme.sizes.md(21)}vw;
  }

  .text-content {
    margin: 0
      ${({ iconPos }) =>
        iconPos ? (iconPos === 'left' ? '0 0 10px' : '10px 0 0') : 0};
  }

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ iconPos }) =>
    iconPos === 'left' ? 'row' : 'row-reverse'};

  font-weight: 400;
  font-size: ${({ theme }) => theme.sizes.sm(14)}vw;
  line-height: ${({ theme }) => theme.sizes.sm(21)}vw;
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
