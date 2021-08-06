import styled from '@emotion/styled';
import { FC } from 'react';
import Icon from '../../../UI/icons/Icon';

const NextArrow: FC = (props) => {
  const { onClick } = props as any;
  return (
    <NextArrowStyled onClick={onClick}>
      <Icon name='arrow-right' color='#ffffff' size={10} />
    </NextArrowStyled>
  );
};

const NextArrowStyled = styled.button`
  padding: ${({ theme }) => theme.sizes.sm(25)}vw;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.5s;
  border: none;
  position: absolute;

  ${({ theme }) => theme.media(1)} {
    padding: ${({ theme }) => theme.sizes.md(25)}vw;
    right: -${({ theme }) => theme.sizes.md(100)}vw;
    transform: translate(0px, -50%);
    top: 50%;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.grey4};
  }
`;

export default NextArrow;
