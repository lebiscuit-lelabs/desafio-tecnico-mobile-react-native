import React, {useState, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useCart} from '../../hooks/GlobalContext';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Header from '../../components/Header';
import {
  Container,
  FlatListContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductBox,
  RemoveItem,
  CheckoutButton,
  CheckoutButtonLabel,
  PriceContainer,
  PriceTitle,
  PriceText,
} from './styles';
import theme from '../../global/styles/theme';

import {ItemProps} from '../../@types/ShoppingList';

const ShoppingCart: React.FC = () => {
  const [total, setTotal] = useState<number>(0);
  const {goBack} = useNavigation();
  const {bag, removeItem, totalValue} = useCart();

  useEffect(() => {
    setTotal(totalValue);
  }, [totalValue]);

  const handleScreenReturn = () => {
    goBack();
  };

  const handleCheckout = () => {
    const cart = {
      totalValue: totalValue.toFixed(2),
      products: bag,
    };

    console.log(cart);
  };

  const renderItem = ({item}: ItemProps) => {
    return (
      <FlatListContainer>
        <ProductImage source={item.image} resizeMode="contain" />
        <ProductBox>
          <ProductName>
            {item.name.split(' ').splice(0, 3).join().replace(/,/g, ' ')}
          </ProductName>
          <ProductPrice>R$ {item.price}</ProductPrice>
        </ProductBox>
        <RemoveItem
          onPress={() => {
            removeItem(item);
          }}>
          <Feather name="trash" size={24} color={theme.colors.danger} />
        </RemoveItem>
      </FlatListContainer>
    );
  };

  return (
    <Container>
      <Header
        LeftIcon="chevron-back"
        title="Sua lista de compras"
        onPressLeft={handleScreenReturn}
      />

      <FlatList
        data={bag}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
      />

      <PriceContainer>
        <PriceTitle> Valor Total:</PriceTitle>
        <PriceText>R$ {totalValue.toFixed(2)} </PriceText>
      </PriceContainer>

      <CheckoutButton disabled={bag.length === 0} onPress={handleCheckout}>
        <CheckoutButtonLabel>Concluir</CheckoutButtonLabel>
        <FontAwesome5 name="check" size={24} color={theme.colors.shape} />
      </CheckoutButton>
    </Container>
  );
};

export default ShoppingCart;
