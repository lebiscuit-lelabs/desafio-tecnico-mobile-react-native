import React from 'react';
import { Button } from '../../atoms';
import * as C from './styles';
import {CartProps, Product} from '../../../context/types.d';
import { TouchableOpacityProps } from 'react-native';
import {useGlobalContext} from '../../../hooks';

interface CardProps extends TouchableOpacityProps {
  item: Product;
}


export const Card: React.FC<CardProps> = ({item, ...rest}) => {

  const {cart, setCart} = useGlobalContext();

  const handleButtonPress = (): void => {

    if(Object.keys(cart).length === 0){
      setCart({
        totalValue: item.price,
        products: [item]
      })
    }
    else {
      const products: Product[] = cart.products;
      const total: number = cart.totalValue;

      products.push(item);

      const newCart: CartProps = {
        totalValue: total + item.price,
        products: products
      } 
      setCart(newCart)

    }
  }

  return (
    <C.Container {...rest}>
      <C.Image source={item.image} />
      <C.Name>{item.name}</C.Name>
    </C.Container>
  );
}
