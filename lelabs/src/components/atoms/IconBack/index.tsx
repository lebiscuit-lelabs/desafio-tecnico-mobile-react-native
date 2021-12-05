import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Icon from '../../../assets/back.svg';

export const IconBack: React.FC<TouchableOpacityProps> = ({...rest}) => {

  return (
    <TouchableOpacity {...rest}>
    <Icon width={40} height={40} />
    </TouchableOpacity>
  )
}
