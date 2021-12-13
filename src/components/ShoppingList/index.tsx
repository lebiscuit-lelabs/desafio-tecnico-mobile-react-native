import React from 'react';
import {
  Container,
  ProductImageMini,
  FavIconButton,
  ProductName,
  ProductPrice,
  LabelContainer,
} from './styles';

import Ionicons from 'react-native-vector-icons/Ionicons';

import theme from '../../global/styles/theme';

import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../routes';

import {ItemProps} from '../../@types/ShoppingList';

export const ShoppingList = ({item}: ItemProps) => {
  const {navigate} = useNavigation<RootStackParamList | any>();

  const handleProduct = () => {
    navigate('ProductInternal', {product: item});
  };

  return (
    <Container onPress={handleProduct}>
      <ProductImageMini source={item.image} resizeMode="contain" />
      <FavIconButton>
        <Ionicons name="heart-outline" size={24} color={theme.colors.icon} />
      </FavIconButton>
      <LabelContainer>
        <ProductName numberOfLines={2}>{item.name}</ProductName>
      </LabelContainer>
      <ProductPrice>R$ {item.price}</ProductPrice>
    </Container>
  );
};
