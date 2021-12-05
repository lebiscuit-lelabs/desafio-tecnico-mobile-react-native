import styled from 'styled-components/native';
import {RFPercentage as responsive} from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  background-color: #70DB94;
  border-radius: 10px;
  padding-vertical: ${responsive(1)}px;
  padding-horizontal: ${responsive(1)}px;
  margin-horizontal: ${responsive(4)}px;
`;

export const Title = styled.Text`
  color: #FFFFFF;
  text-align: center;
  font-size: ${responsive(3)}px;
`