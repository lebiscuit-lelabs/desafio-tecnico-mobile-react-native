import styled from 'styled-components/native';
import {RFPercentage as responsive} from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  background-color: #DC5656;
  width: ${responsive(6.5)}px;
  padding: ${responsive(0.7)}px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;