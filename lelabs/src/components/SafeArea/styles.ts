import styled from 'styled-components'
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  padding-top: ${getStatusBarHeight()}px;
  padding-bottom: ${getBottomSpace()}px;
`