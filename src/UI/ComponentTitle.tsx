import styled from '@emotion/styled';
import { FC } from 'react';

type ComponentTitleType = {
  text?: string;
  color?: 'white' | 'black';
  className?: string;
};

const ComponentTitle: FC<ComponentTitleType> = ({ text, color, className }) => (
  <ComponentTitleStyled color={color} className={className}>
    {text}
  </ComponentTitleStyled>
);

const ComponentTitleStyled = styled.h4<ComponentTitleType>`
  font-size: ${({ theme }) => theme.sizes.sm(42)}vw;
  line-height: ${({ theme }) => theme.sizes.sm(56)}vw;
  font-weight: 800;
  margin: 0;
  color: ${({ theme, color }) =>
    color === 'white' ? theme.colors.white : theme.colors.black};

  ${({ theme }) => theme.media(1)} {
    font-size: ${({ theme }) => theme.sizes.md(42)}vw;
    line-height: ${({ theme }) => theme.sizes.md(56)}vw;
  }
`;

export default ComponentTitle;
