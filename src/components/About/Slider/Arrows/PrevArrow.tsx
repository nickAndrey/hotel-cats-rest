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
  bottom: 0%;
  left: 50%;
  transform: translate(-100%, 100%);

  ${({ theme }) => theme.media(1)} {
    padding: ${({ theme }) => theme.sizes.md(25)}vw;
    left: -${({ theme }) => theme.sizes.md(100)}vw;
    transform: translate(0px, -50%);
    top: 50%;
    bottom: auto;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.grey4};
  }
`;

export default PrevArrow;
