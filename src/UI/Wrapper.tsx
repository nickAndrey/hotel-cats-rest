import styled from '@emotion/styled';
import { FC } from 'react';

const Wrapper: FC = ({ children }) => <WrapperStyled>{children}</WrapperStyled>;

const WrapperStyled = styled.div`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;

  ${({ theme }) => theme.media(1)} {
      max-width: ${({theme: {sizes}}) => sizes.md(1088)}vw;
  }
`;

export default Wrapper;
