import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {TouchableOpacity} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.shape};

  padding-horizontal: 18px;
`;

export const TopDescription = styled.View``;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text_dark};
  font-weight: bold
  font-size: ${RFValue(26)}px;

  margin-vertical: 10px;
`;

export const Description = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(18)}px;
  margin-vertical: 10px;
`;

export const Products = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-vertical: 10px;
`;

export const ProductCategory = styled.Text`
  color: ${({theme}) => theme.colors.text_dark};
  font-weight: bold
  font-size: ${RFValue(18)}px;
`;

export const TouchMoreProducts = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})``;

export const MoreProducts = styled.Text`
  color: ${({theme}) => theme.colors.blue};
  font-size: ${RFValue(14)}px;
`;

export const CartLengthContainer = styled.View`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;

  position: absolute;
  right: 10px;
  top: 4px;

  border-radius: 10px;

  background-color: ${({theme}) => theme.colors.danger};
`;

export const CartLengthLabel = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  text-align: center;
`;
