import styled from 'styled-components/native'
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFPercentage as responsive} from 'react-native-responsive-fontsize';
import { Platform } from 'react-native';

interface ContainerProps {
  backgroundColor: string;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  padding-top: ${Platform.OS === 'ios' && getStatusBarHeight() + responsive(1)}px;
  padding-bottom: ${Platform.OS === 'ios' && getBottomSpace()}px;
  background-color: ${({backgroundColor}) => backgroundColor};
`