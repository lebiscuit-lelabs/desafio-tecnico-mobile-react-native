import {ImageSourcePropType} from 'react-native';
import {Dispatch, SetStateAction} from 'react';
export interface GlobalContextProps {
  cart: CartProps;
  setCart: Dispatch<SetStateAction<CartProps>>;
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: ImageSourcePropType;
}

export interface CartProps {
  totalValue: number;
  products: Product[];
}