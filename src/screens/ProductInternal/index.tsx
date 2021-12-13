import React from 'react';

import {useNavigation} from '@react-navigation/native';

import Header from '../../components/Header';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  Container,
  HeaderContainer,
  ProductContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductDescription,
  ButtonContainer,
  AddToCartButton,
  ButtonLabel,
} from './styles';

import theme from '../../global/styles/theme';
import {useCart} from '../../hooks/GlobalContext';

const ProductInternal: React.FC = ({route}: any) => {
  const {addToBag} = useCart();
  const navigation = useNavigation();

  const {product} = route.params;

  const handleScreenReturn = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <ProductContainer>
        <HeaderContainer>
          <Header
            LeftIcon="chevron-back"
            RightIcon="heart-outline"
            onPressLeft={handleScreenReturn}
          />
        </HeaderContainer>
        <ProductImage source={product.image} />
        <ProductPrice>R$ {product.price}</ProductPrice>
        <ProductName>{product.name}</ProductName>
        <ProductDescription>{product.description}</ProductDescription>
      </ProductContainer>
      <ButtonContainer>
        <AddToCartButton onPress={() => addToBag(product)}>
          <Ionicons name="cart-outline" size={24} color={theme.colors.shape} />
          <ButtonLabel>Adicionar ao Carrinho</ButtonLabel>
        </AddToCartButton>
      </ButtonContainer>
    </Container>
  );
};

export default ProductInternal;
