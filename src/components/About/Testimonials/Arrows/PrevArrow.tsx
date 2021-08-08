import styled from '@emotion/styled';
import { FC } from 'react';
import Icon from '../../../../UI/icons/Icon';

const PrevArrow: FC = (props) => {
  const { onClick } = props as any;
  return (
    <PrevArrowStyled onClick={onClick}>
      <Icon name='arrow-left' color='#fff' size={10} />
    </PrevArrowStyled>
  );
};

const PrevArrowStyled = styled.button`
  padding: ${({ theme }) => theme.sizes.sm(25)}vw;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.5s;
  border: none;
  position: absolute;
  z-index: 1;
  bottom: 0;
  width: 50%;

  ${({ theme }) => theme.media(1)} {
    width: 0;
    padding: ${({ theme }) => theme.sizes.md(25)}vw;
    left: ${({ theme }) => theme.sizes.md((1366 + 132 + 139) / 2)}vw;
    transform: translate(-100%, 0%);
  }

  &:hover {
    background: ${({ theme }) => theme.colors.blue};
  }
`;

export default PrevArrow;
