import React, {createContext, useState, useEffect, useCallback} from 'react';
import {GlobalContextProps, CartProps, Product} from './types.d';
import {productList} from '../mock/data';

export const GlobalContext = createContext<GlobalContextProps>({} as GlobalContextProps);

export const GlobalProvider: React.FC = ({children}) => {

  const [cart, setCart] = useState<CartProps>({} as CartProps);
  const [products, setProducts] = useState<Product[]>([] as Product[]);


  const getData = useCallback((): void => {
    if(productList) setProducts(productList);
  }, [productList]);

  useEffect(() => {
    getData();
  }, [])

  const contextValues: GlobalContextProps = {
    cart,
    setCart,
    products,
    setProducts
  }

  return(
    <GlobalContext.Provider value={contextValues}>
      {children}
    </GlobalContext.Provider>
  )
}