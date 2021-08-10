export type ContactFormType = {
  description: string;
  subject: string;
  name: string;
  email: string;
};

type ActionType = {
  type: string;
  field: string;
  value: string | number;
};

export const initialState: ContactFormType = {
  description: '',
  subject: '',
  name: '',
  email: '',
};

export const reducer = (state: ContactFormType, action: ActionType) => {
  switch (action.type) {
    case 'FIELD':
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};
