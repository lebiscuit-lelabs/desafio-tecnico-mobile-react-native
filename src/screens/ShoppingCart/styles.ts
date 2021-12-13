import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {TouchableOpacity} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.shape};

  padding-horizontal: 18px;
`;

export const FlatListContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
`;

export const ProductBox = styled.View`
  margin-left: 10px;
`;

export const ProductName = styled.Text`
font-size: ${RFValue(16)}px;
text-align: center;
font-weight: bold;
color: ${({theme}) => theme.colors.text_dark}

margin-vertical: 5px;

`;

export const ProductPrice = styled.Text`
font-size: ${RFValue(16)}px;

font-weight: bold;
color: ${({theme}) => theme.colors.success}

margin-vertical: 5px;

`;

export const RemoveItem = styled(TouchableOpacity).attrs({activeOpacity: 0.7})`
  padding: ${RFValue(8)}px;

  border-radius: 18px;

  position: absolute;
  right: 0;
  bottom: 15px;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PriceTitle = styled.Text`
  font-size: ${RFValue(26)}px;
  color: ${({theme}) => theme.colors.text_dark};
  font-weight: bold;
`;

export const PriceText = styled.Text`
  font-size: ${RFValue(22)}px;
  color: ${({theme}) => theme.colors.success};
  font-weight: bold;
`;

export const CheckoutButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
  background-color: ${({theme}) => theme.colors.danger};

  margin-vertical: 18px;
  padding: ${RFValue(18)}px;

  border-radius: 18px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CheckoutButtonLabel = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(16)}px;
  font-weight: bold;

  padding-horizontal: 10px;
`;
