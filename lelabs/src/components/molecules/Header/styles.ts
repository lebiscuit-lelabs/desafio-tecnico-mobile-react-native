import styled from 'styled-components/native';
import {RFPercentage as responsive} from 'react-native-responsive-fontsize'

export const Container = styled.View`
  width: 100%;
  background-color: white;
  height: ${responsive(10)}px;
  padding-horizontal: ${responsive(3)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;