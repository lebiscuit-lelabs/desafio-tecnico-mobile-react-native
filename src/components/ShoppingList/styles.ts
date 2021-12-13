import {RFValue} from 'react-native-responsive-fontsize';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ProductImageMini = styled.Image`
  width: ${RFValue(150)}px;
  height: ${RFValue(150)}px;
`;

export const FavIconButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  position: absolute;
  right: 0;
  top: 0;
`;

export const ProductName = styled.Text`
font-size: ${RFValue(15)}px;
text-align: center;
color: ${({theme}) => theme.colors.icon}

margin-vertical: 5px;

`;

export const ProductPrice = styled.Text`
font-size: ${RFValue(16)}px;
text-align: center;
font-weight: bold;
color: ${({theme}) => theme.colors.text_dark}

margin-vertical: 5px;

`;

export const LabelContainer = styled.View`
  width: 75%;
`;
