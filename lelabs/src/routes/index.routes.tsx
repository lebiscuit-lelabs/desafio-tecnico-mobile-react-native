import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackProps} from './types.d';
import { Home } from '../screens/Home';
import { Cart } from '../screens/Cart';

const {Navigator, Screen} = createNativeStackNavigator<StackProps>();

export const Routes: React.FC = () => {
  return (
    <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
      <Screen name="Cart" component={Cart} />
    </Navigator>
  )
}
