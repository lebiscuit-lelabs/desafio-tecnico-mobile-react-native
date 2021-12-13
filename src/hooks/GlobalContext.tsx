import React, {useState, createContext, useContext} from 'react';
import {Alert} from 'react-native';

import {CartProps} from '../@types/GlobalContext';
import {ItemProps} from '../@types/GlobalContext';

const CartContext = createContext<CartProps>({} as CartProps);

const CartProvider: React.FC = ({children}) => {
  const [totalValue, setTotalValue] = useState<number>(0);
  const [bag, setBag] = useState<ItemProps[]>([]);

  const addToBag = (item: ItemProps) => {
    if (bag.includes(item)) {
      Alert.alert('', ' O produto já encontra-se no carrinho');
    } else {
      setBag(oldValue => [...oldValue, item]);
      setTotalValue(oldValue => oldValue + item.price);
    }
  };

  const removeItem = (item: ItemProps) => {
    const newList = bag.filter(e => e.id !== item.id);
    setTotalValue(oldValue => oldValue - item.price);
    setBag(newList);
  };

  return (
    <CartContext.Provider value={{bag, addToBag, removeItem, totalValue}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => {
  const context = useContext(CartContext);

  return context;
};
