import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.shape};
`;

export const HeaderContainer = styled.View`
  margin-horizontal: 18px;
`;

export const ProductContainer = styled.ScrollView`
  width: 100%;
  height: 75%;
  background-color: ${({theme}) => theme.colors.shape};
  z-index: 1;
  border-radius: 30px;
`;
export const ProductImage = styled.Image`
  width: ${RFValue(250)}px;
  height: ${RFValue(250)}px;

  align-self: center;
`;

export const ProductPrice = styled.Text`
  font-size: ${RFValue(26)}px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.success};

  margin: 0 0 0 18px;
`;

export const ProductName = styled.Text`
  font-size: ${RFValue(28)}px;
  color: ${({theme}) => theme.colors.text_dark}
  font-weight: bold;

  margin: 18px 0 0 18px;
`;

export const ProductDescription = styled.Text`
  font-size: ${RFValue(16)}px;
  text-align: justify;
  color: ${({theme}) => theme.colors.description};

  margin: 18px;
`;

export const ButtonContainer = styled.View`
  background-color: blue;
  width: 100%;
  height: 20%;
  z-index: -1;
  margin-top: -25px;
  padding-horizontal: 18px;

  background-color: ${({theme}) => theme.colors.secondary};

  justify-content: center;
  align-items: center;
`;

export const AddToCartButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
  background-color: ${({theme}) => theme.colors.danger};

  margin-top: 25px;
  padding: ${RFValue(18)}px;

  border-radius: 18px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonLabel = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(16)}px;
  font-weight: bold;

  padding-horizontal: 10px;
`;
