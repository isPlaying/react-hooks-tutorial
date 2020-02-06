import { createContext } from 'react';

export const MyContext = createContext<IContextValue>({
  state: 0
});
