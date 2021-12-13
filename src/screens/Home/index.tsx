import React, {useState} from 'react';
import {FlatList} from 'react-native';

import Header from '../../components/Header';
import {ShoppingList} from '../../components/ShoppingList';

import {useNavigation} from '@react-navigation/native';

import {productList} from '../../../data';

import {
  Container,
  TopDescription,
  Title,
  Description,
  Products,
  ProductCategory,
  MoreProducts,
  TouchMoreProducts,
  CartLengthContainer,
  CartLengthLabel,
} from './styles';
import {useCart} from '../../hooks/GlobalContext';
import {RootStackParamList} from '../../routes';

const Home: React.FC = () => {
  const [cart, setCart] = useState(productList);
  const {navigate} = useNavigation<RootStackParamList | any>();

  const handleCartNavigation = () => {
    navigate('ShoppingCart');
  };

  const {bag} = useCart();

  return (
    <Container>
      <Header
        LeftIcon="menu"
        RightIcon="cart-outline"
        onPressRight={handleCartNavigation}
      />
      {bag.length > 0 ? (
        <CartLengthContainer>
          <CartLengthLabel>{bag.length}</CartLengthLabel>
        </CartLengthContainer>
      ) : null}
      <TopDescription>
        <Title>Conheça nossos produtos {'\n'}exclusivos</Title>
        <Description>
          Neste mercado, você encontrará várias {'\n'}
          opções de preço mais barato
        </Description>
      </TopDescription>

      <Products>
        <ProductCategory>Lista de Produtos</ProductCategory>

        <TouchMoreProducts>
          <MoreProducts>Ver mais</MoreProducts>
        </TouchMoreProducts>
      </Products>

      <FlatList
        data={cart}
        renderItem={({item}) => <ShoppingList item={item} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 32}}
      />
    </Container>
  );
};

export default Home;
