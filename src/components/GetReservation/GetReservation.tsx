import styled from '@emotion/styled';
import { FC } from 'react';
import Button from '../../UI/Button';
import { SendIcon } from '../../UI/icons/SendIcon';
import Wrapper from '../../UI/Wrapper';

const GetReservation: FC = () => {
  return (
    <Wrapper>
      <GetReservationStyled>
        <div className='column'>
          <label htmlFor='id_check_in_date'>Check In Date</label>
          <Input
            type='text'
            placeholder='check in date'
            id='id_check_in_date'
          />
        </div>
        <div className='column'>
          <label htmlFor='id_check_out_date'>Check Out Date</label>
          <Input
            type='text'
            placeholder='check out date'
            id='id_check_out_date'
          />
        </div>
        <div className='column'>
          <label htmlFor='id_rooms'>Rooms</label>
          <Input type='text' placeholder='rooms' id='id_rooms' />
        </div>
        <div className='column'>
          <Button withIcon={true} icon={<SendIcon size={14} />} />
        </div>
      </GetReservationStyled>
    </Wrapper>
  );
};

const GetReservationStyled = styled.div`
  padding: ${({ theme }) => `${theme.sizes.sm(32)}vw ${theme.sizes.sm(92)}vw`};
  box-shadow: 0px 0px 14px 1px ${({ theme }) => theme.colors.grey3};
  background: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-gap: ${({ theme }) => theme.sizes.sm(10)}vw;
  grid-template-columns: 1fr;
  justify-content: center;

  ${({ theme }) => theme.media(1)} {
    grid-template-columns: repeat(3, 1fr) auto;
    grid-gap: ${({ theme }) => theme.sizes.md(16)}vw;
    padding: ${({ theme }) =>
      `${theme.sizes.md(32)}vw ${theme.sizes.md(92)}vw`};
    
  }

  .column {
    display: flex;
    flex-direction: column;

    &:last-child {
      justify-content: end;
    }

    label {
      font-size: ${({ theme }) => theme.sizes.sm(13)}vw;
      line-height: ${({ theme }) => theme.sizes.sm(20)}vw;
      margin-bottom: ${({ theme }) => theme.sizes.sm(5)}vw;
      color: ${({ theme }) => theme.colors.blue};

      ${({ theme }) => theme.media(1)} {
        font-size: ${({ theme }) => theme.sizes.md(13)}vw;
        line-height: ${({ theme }) => theme.sizes.md(20)}vw;
        margin-bottom: ${({ theme }) => theme.sizes.md(5)}vw;
      }
    }
  }
`;

const Input = styled.input`
  padding: ${({ theme }) => `${theme.sizes.md(20)}vw ${theme.sizes.md(16)}vw`};
  border: 1px solid ${({ theme }) => theme.colors.grey5};
`;

export default GetReservation;
