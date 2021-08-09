import styled from '@emotion/styled';
import { FC } from 'react';

type CardsGridType = {
  columns?: number;
};

const CardsGrid: FC<CardsGridType> = ({ children, columns }) => (
  <CardsGridStyled columns={columns}>{children}</CardsGridStyled>
);

const CardsGridStyled = styled.div<CardsGridType>`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${({ theme }) => theme.sizes.sm(16)}vw;
  margin-top: ${({ theme }) => theme.sizes.sm(50)}vw;

  ${({ theme }) => theme.media(1)} {
    grid-template-columns: repeat(
      ${({ columns }) => (columns ? columns : '3')},
      1fr
    );
    grid-gap: ${({ theme }) => theme.sizes.md(16)}vw;
    margin-top: ${({ theme }) => theme.sizes.md(50)}vw;
  }
`;

export default CardsGrid;
