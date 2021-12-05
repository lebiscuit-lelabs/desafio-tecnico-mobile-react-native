import styled from 'styled-components/native';
import {RFPercentage as responsive} from 'react-native-responsive-fontsize'

export const Container = styled.ScrollView.attrs({
  contentContainerStyle:{
    justifyContent: 'center',
    alignItems: 'center'
  }
})``;

export const Description = styled.Text`
  color: #555555;
  padding-top: ${responsive(3)}px;
  padding-horizontal: ${responsive(3)}px;
  font-size: ${responsive(2.5)}px;
  margin-bottom: ${responsive(5)}px;
`;

export const Name = styled.Text`
  color: #C4C4C4;
  max-width: 80%;
  padding: ${responsive(1)}px;
  `;

export const Price = styled.Text`
  color: #C4C4C4;
  font-size: ${responsive(5)}px;
  margin-bottom: ${responsive(2)}px;
`;

export const Image = styled.Image`
  width: ${responsive(35)}px;
  height: ${responsive(35)}px;
`