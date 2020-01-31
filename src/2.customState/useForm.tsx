import { useState, ChangeEvent } from 'react';

export const useForm = (initialState: any) => {
  const [state, setState] = useState(initialState);
  return [
    state,
    (e: ChangeEvent<HTMLInputElement>) => {
      const { id, value } = e.target;
      setState({
        ...state,
        [id]: value
      });
    }
  ];
};
