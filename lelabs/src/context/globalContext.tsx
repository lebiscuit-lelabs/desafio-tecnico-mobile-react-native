import React, {createContext, useState} from 'react';
import {GlobalContextProps} from './types.d';

export const GlobalContext = createContext<GlobalContextProps>({} as GlobalContextProps);

export const GlobalProvider: React.FC = ({children}) => {
  return(
    <GlobalContext.Provider value={{}}>
      {children}
    </GlobalContext.Provider>
  )
}