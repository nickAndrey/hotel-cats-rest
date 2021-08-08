import styled from '@emotion/styled';
import { FC } from 'react';

type SliderButtonType = {
  className?: string;
};

const SliderButton: FC<SliderButtonType> = ({ children, className }) => (
  <SliderButtonStyled className={className}>{children}</SliderButtonStyled>
);

const SliderButtonStyled = styled.button`
  padding: ${({ theme }) => theme.sizes.sm(25)}vw;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.5s;
  border: none;

  ${({ theme }) => theme.media(1)} {
    padding: ${({ theme }) => theme.sizes.md(25)}vw;
    right: -${({ theme }) => theme.sizes.md(100)}vw;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.grey4};
  }
`;

export default SliderButton;
