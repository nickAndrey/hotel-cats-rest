import styled from '@emotion/styled';
import { FC } from 'react';
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
          <Button>
            <SendIcon size={14} />
          </Button>
        </div>
      </GetReservationStyled>
    </Wrapper>
  );
};

const GetReservationStyled = styled.div`
  padding: ${({ theme }) => `${theme.sizes.md(32)}vw ${theme.sizes.md(92)}vw`};
  display: flex;
  box-shadow: 0px 0px 14px 1px ${({ theme }) => theme.colors.grey3};
  background: ${({ theme }) => theme.colors.white};
  position: absolute;
  transform: translateY(100%);

  .column {
    display: flex;
    flex-direction: column;
    margin-right: ${({ theme }) => theme.sizes.md(16)}vw;

    &:last-child {
      justify-content: end;
    }

    label {
      font-size: ${({ theme }) => theme.sizes.md(13)}vw;
      line-height: ${({ theme }) => theme.sizes.md(20)}vw;
      margin-bottom: ${({ theme }) => theme.sizes.md(5)}vw;
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

const Input = styled.input`
  padding: ${({ theme }) => `${theme.sizes.md(20)}vw ${theme.sizes.md(16)}vw`};
  border: 1px solid ${({ theme }) => theme.colors.grey5};
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.blue};
  padding: ${({ theme }) => theme.sizes.md(21)}vw;
  border: none;
  cursor: pointer; 
`;

export default GetReservation;
