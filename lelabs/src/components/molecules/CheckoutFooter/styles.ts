import styled from 'styled-components/native';
import {RFPercentage as responsive} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  position: absolute;
  bottom: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: ${responsive(5)}px;
  background-color: white;
  padding-top: ${responsive(3)}px;
`;

export const Total = styled.Text`
  font-size: ${responsive(3)}px;
  color: #989898;
`;
