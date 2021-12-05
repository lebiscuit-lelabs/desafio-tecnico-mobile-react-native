import React, {useCallback} from 'react';
import { CartProps, Product } from '../../../context/types';
import { Button } from '../../atoms';
import * as D from './styles';
import {useGlobalContext} from '../../../hooks';
import { TouchableOpacityProps } from 'react-native';


interface DetailsProps extends TouchableOpacityProps{
  item: Product;
}

export const Details: React.FC<DetailsProps> = ({item}) => {

  const {cart, setCart} = useGlobalContext();

  const handleButtonPress = useCallback(():void => {
    if(Object.keys(cart).length === 0){
      setCart({
        totalValue: item.price,
        products: [item]
      })
    }
    else {
      const products: Product[] = cart.products;
      const total: number = cart.totalValue;

      const validator = products.filter(product => product.id === item.id)

      if(validator.length !== 0){
        return null
      }
      else{
        products.push(item);
  
        const newCart: CartProps = {
          totalValue: total + item.price,
          products: products
        } 
        setCart(newCart)
      }

    }
  },[item]) 

   


  return (
    <D.Container>
      <D.Image source={item.image} />
      <D.Name>{item.name}</D.Name>
      <D.Price>{
        new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(item.price)
      }</D.Price>
      <D.Description>
        {item.description}
      </D.Description>
      <Button title="Adicionar ao carrinho" onPress={handleButtonPress} />
    </D.Container>
  )
}
