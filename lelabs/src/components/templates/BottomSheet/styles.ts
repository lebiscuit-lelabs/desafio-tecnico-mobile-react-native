import styled from 'styled-components/native';
import { RFPercentage as responsive } from 'react-native-responsive-fontsize';
import { Animated } from 'react-native';

export const Container = styled(Animated.View)`
  flex: 1;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  `

export const Content = styled(Animated.View)`
  elevation: 7;
  background-color: white;
  width: 100%;
  position :absolute;
  bottom: ${responsive(0)}px;
  align-self: center;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: ${responsive(1)}px;
  align-items: center;
  justify-content: center;
`

export const BarView = styled(Animated.View)`
  width: 95%;
  height: ${responsive(3)}px;
  align-items: center;
  justify-content: center;
`

export const Bar = styled.View`
  width: 10%;
  align-self: center;
  height: ${responsive(0.5)}px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
`