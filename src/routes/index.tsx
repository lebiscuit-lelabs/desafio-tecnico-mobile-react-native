import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import ProductInternal from '../screens/ProductInternal';
import ShoppingCart from '../screens/ShoppingCart';
import Splash from '../screens/Splash';

export type RootStackParamList = {
  Home: undefined;
  ProductInternal: {productId: string};
  ShoppingCart: undefined;
  Splash: undefined;
};

export type StackNavigationProps =
  NativeStackNavigationProp<RootStackParamList>;

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  return (
    <Navigator initialRouteName="Splash">
      <Screen name="Splash" component={Splash} options={{headerShown: false}} />
      <Screen name="Home" component={Home} options={{headerShown: false}} />
      <Screen
        name="ProductInternal"
        component={ProductInternal}
        options={{headerShown: false}}
      />
      <Screen
        name="ShoppingCart"
        component={ShoppingCart}
        options={{headerShown: false}}
      />
    </Navigator>
  );
};

export default Routes;
