import styled from '@emotion/styled';
import { FC } from 'react';

type ComponentTitleType = {
  text?: string;
  color?: 'white' | 'black';
  className?: string;
  mt?: number;
  maxWidth?: number;
};

const ComponentTitle: FC<ComponentTitleType> = ({
  text,
  color,
  className,
  mt,
  maxWidth,
}) => (
  <ComponentTitleStyled
    color={color}
    className={className}
    mt={mt}
    maxWidth={maxWidth}
  >
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
  ${({ theme, maxWidth }) =>
    maxWidth ? `max-width: ${theme.sizes.sm(maxWidth)}vw` : ''};
  ${({ theme, mt }) => mt && `margin-top: ${theme.sizes.sm(mt)}vw`};

  ${({ theme }) => theme.media(1)} {
    font-size: ${({ theme }) => theme.sizes.md(42)}vw;
    line-height: ${({ theme }) => theme.sizes.md(56)}vw;
    ${({ theme, maxWidth }) =>
      maxWidth ? `max-width: ${theme.sizes.md(maxWidth)}vw` : ''};
    ${({ theme, mt }) => mt && `margin-top: ${theme.sizes.md(mt)}vw`};
  }
`;

export default ComponentTitle;
