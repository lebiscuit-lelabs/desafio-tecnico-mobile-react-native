import styled from 'styled-components/native';
import {RFPercentage as responsive} from 'react-native-responsive-fontsize'

export const Container = styled.View`
  
`;

export const Description = styled.Text`
  color: #555555;
  padding-top: ${responsive(3)}px;
  padding-horizontal: ${responsive(3)}px;
  font-size: ${responsive(2.5)}px;
`;