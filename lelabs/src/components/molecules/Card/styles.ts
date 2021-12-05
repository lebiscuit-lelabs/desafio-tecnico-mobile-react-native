import styled from 'styled-components/native';
import {RFPercentage as responsive} from 'react-native-responsive-fontsize'

export const Container = styled.TouchableOpacity`
  border-radius: 10px;
  border-width: 2px;
  border-color: #c4c4c4;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  padding-vertical: ${responsive(2)}px;
`;

export const Name = styled.Text`
  color: #C4C4C4;
  max-width: 80%;
  padding: ${responsive(1)}px;
  `;

export const Price = styled.Text`
  color: #C4C4C4;
  font-size: ${responsive(3)}px;
  margin-bottom: ${responsive(2)}px;
`;

export const Image = styled.Image`
  width: ${responsive(35)}px;
  height: ${responsive(35)}px;
`