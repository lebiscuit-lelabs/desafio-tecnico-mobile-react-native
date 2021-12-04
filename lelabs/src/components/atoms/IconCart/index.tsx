import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Icon from '../../../assets/cart.svg';
import { Badge, Number } from './styles';
import {useGlobalContext} from '../../../hooks';

export const IconCart: React.FC<TouchableOpacityProps> = ({...rest}) => {

  const {cart} = useGlobalContext();

  const badgeNumber = cart.products?.length;

  return (
    <TouchableOpacity {...rest}>
    <Icon width={40} height={40} />
    {badgeNumber > 0 && (
      <Badge>
      <Number>{cart.products.length}</Number>
    </Badge>
    )}
    </TouchableOpacity>
  )
}
