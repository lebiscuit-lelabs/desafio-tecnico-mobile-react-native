import {useContext} from 'react';
import { GlobalContext } from '../context';
import { GlobalContextProps } from '../context/types';

export const useGlobalContext = (): GlobalContextProps => {
  const context = useContext(GlobalContext);
  if(!context) throw new Error('você precisa estar abaixo do provider global para usar esse contexto');
  return context;
} 