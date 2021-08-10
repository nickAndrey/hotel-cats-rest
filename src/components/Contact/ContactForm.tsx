import styled from '@emotion/styled';
import { FC, FormEvent, useReducer } from 'react';
import Button from '../../UI/Button';
import Icon from '../../UI/icons/Icon';
import { initialState, reducer } from './formReducer';

const ContactForm: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { description, subject, name, email } = state;

  const submitForm = (evt: FormEvent) => {
    evt.preventDefault();
    console.log(state);
  };

  return (
    <FormStyled onSubmit={submitForm}>
      <textarea
        value={description}
        placeholder='description'
        onInput={(evt) =>
          dispatch({
            type: 'FIELD',
            field: 'description',
            value: evt.currentTarget.value,
          })
        }
      />
      <input
        type='text'
        value={subject}
        placeholder='subject'
        onInput={(evt) =>
          dispatch({
            type: 'FIELD',
            field: 'subject',
            value: evt.currentTarget.value,
          })
        }
      />
      <input
        type='text'
        value={name}
        placeholder='name/sirname'
        onInput={(evt) =>
          dispatch({
            type: 'FIELD',
            field: 'name',
            value: evt.currentTarget.value,
          })
        }
      />
      <input
        type='text'
        value={email}
        placeholder='email'
        onInput={(evt) =>
          dispatch({
            type: 'FIELD',
            field: 'email',
            value: evt.currentTarget.value,
          })
        }
      />
      <Button
        icon={<Icon name='send' color='#ffffff' size={14} />}
        iconPos='right'
      >
        Submit
      </Button>
    </FormStyled>
  );
};

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${({ theme }) => theme.sizes.sm(16)}vw;
  margin-top: ${({ theme }) => theme.sizes.sm(50)}vw;

  ${({ theme }) => theme.media(1)} {
    grid-template-columns: 2fr 1fr;
    grid-gap: ${({ theme }) => theme.sizes.md(16)}vw;
    margin-top: ${({ theme }) => theme.sizes.md(50)}vw;
  }

  textarea {
    grid-row: 1 / 5;
    resize: none;
    background: ${({ theme }) => theme.colors.grey};
    border: 1px solid ${({ theme }) => theme.colors.grey7};
    padding: ${({ theme }) => theme.sizes.sm(20)}vw;

    ${({ theme }) => theme.media(1)} {
      padding: ${({ theme }) => theme.sizes.md(20)}vw;
    }
  }

  input {
    padding: ${({ theme }) => theme.sizes.sm(20)}vw;
    font-size: ${({ theme }) => theme.sizes.sm(13)}vw;
    line-height: ${({ theme }) => theme.sizes.sm(20)}vw;
    background: ${({ theme }) => theme.colors.grey};
    border: 1px solid ${({ theme }) => theme.colors.grey7};

    ${({ theme }) => theme.media(1)} {
      padding: ${({ theme }) => theme.sizes.md(20)}vw;
      font-size: ${({ theme }) => theme.sizes.md(13)}vw;
      line-height: ${({ theme }) => theme.sizes.md(20)}vw;
    }
  }
`;

export default ContactForm;
