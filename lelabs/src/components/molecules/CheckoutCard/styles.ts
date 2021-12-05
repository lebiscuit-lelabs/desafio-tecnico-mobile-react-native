import styled from 'styled-components/native';
import {RFPercentage as responsive } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: white;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${responsive(10)}px;
  padding-horizontal: ${responsive(2)}px;
`;

export const Name = styled.Text`
  color: #989898;
  font-size: ${responsive(2)}px;
  max-width: 70%;
`;
