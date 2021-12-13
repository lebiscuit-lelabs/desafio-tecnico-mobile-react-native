import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

import {TouchableOpacity} from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(60)}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LeftTouch = styled(TouchableOpacity).attrs({activeOpacity: 0.7})`
  flex-direction: row;
  align-items: center;
`;

export const RightTouch = styled(TouchableOpacity).attrs({
  activeOpacity: 0.8,
})``;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text_dark};
  font-weight: bold
  font-size: ${RFValue(24)}px;
  text-align: center;
  margin-bottom: 3px

`;
