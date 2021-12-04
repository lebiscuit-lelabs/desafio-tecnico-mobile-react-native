import styled from 'styled-components/native';
import {RFPercentage as responsive} from 'react-native-responsive-fontsize';

export const Badge = styled.View`
  background-color: red;
  border-radius: 50px;
  width: ${responsive(3)}px;
  height: ${responsive(3)}px;
  position: absolute;
  left: 28px;
  top: -5px;
  justify-content: center;
`

export const Number = styled.Text`
  color: white;
  text-align: center;
  font-weight: 800;
`