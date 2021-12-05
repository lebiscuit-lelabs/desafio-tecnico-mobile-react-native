import React from 'react';
import { CheckoutCard } from '../../components/molecules/CheckoutCard';
import { Header } from '../../components/molecules';
import { CheckoutFooter } from '../../components/molecules/CheckoutFooter';
import {useGlobalContext} from '../../hooks';
import { Container } from './styles';
import { Product } from '../../context/types';
import { FlatList, ListRenderItemInfo } from 'react-native';

export const Cart: React.FC = () => {

  const {cart, setCart} = useGlobalContext();

  const amount = cart?.totalValue || 0;

  const handleDeletePress = (id: number, price: number) => {
    setCart({totalValue: cart.totalValue - price , products: cart.products.filter(item => item.id !== id)});
  }


  return (
    <Container>
      <Header back />
      {cart.products && (
        <FlatList 
        data={cart.products}
        renderItem={({item}:ListRenderItemInfo<Product>) => <CheckoutCard item={item} onPress={() => handleDeletePress(item.id, item.price)} />}
        keyExtractor={(item) => item.id.toString()}
        bounces={false}
      />
      )}
      
      <CheckoutFooter total={amount} onPress={() => console.log(cart)}  />
    </Container>
  );
}
