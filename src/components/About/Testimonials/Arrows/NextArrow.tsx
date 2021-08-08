import styled from '@emotion/styled';
import { FC } from 'react';
import Icon from '../../../../UI/icons/Icon';

const NextArrow: FC = (props) => {
  const { onClick } = props as any;
  return (
    <NextArrowStyled1 onClick={onClick}>
      <Icon name='arrow-right' color='#ffffff' size={10} />
    </NextArrowStyled1>
  );
};

const NextArrowStyled1 = styled.button`
  padding: ${({ theme }) => theme.sizes.sm(25)}vw;
  background: ${({ theme }) => theme.colors.grey4};
  transition: all 0.5s;
  border: none;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;

  ${({ theme }) => theme.media(1)} {
    width: 0;
    bottom: auto;
    padding: ${({ theme }) => theme.sizes.md(25)}vw;
    left: ${({ theme }) => theme.sizes.md((1366 + 132 + 139) / 2)}vw;
    transform: translate(0%, -100%);
  }

  &:hover {
    background: ${({ theme }) => theme.colors.blue};
  }
`;

export default NextArrow;
