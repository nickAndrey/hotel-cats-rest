import styled from '@emotion/styled';
import { FC } from 'react';
import Icon from '../../../UI/icons/Icon';

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
  background: ${({ theme }) => theme.colors.blue};
  opacity: 0.5;
  transition: all 0.5s;
  border: none;
  position: absolute;
  z-index: 1;
  bottom: 0;
  width: 50%;

  ${({ theme }) => theme.media(1)} {
    width: 0;
    padding: ${({ theme }) => theme.sizes.md(25)}vw;
    left: ${({ theme }) => theme.sizes.md(70)}vw;
    top: 50%;
    bottom: auto;
    transform: translate(0, -50%);
  }

  &:hover {
    background: ${({ theme }) => theme.colors.blue};
    opacity: 1;
  }
`;

export default PrevArrow;
