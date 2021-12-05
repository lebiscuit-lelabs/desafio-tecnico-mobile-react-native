import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Product } from '../../../context/types';
import { DeleteButton } from '../../atoms';
import { Container, Name } from './styles';

interface CheckoutCardProps extends TouchableOpacityProps {
  item: Product
}

export const CheckoutCard: React.FC<CheckoutCardProps> = ({item, ...rest}) => {

  return (
    <Container>
      <Name>{item.name}</Name>
      <DeleteButton {...rest} />
    </Container>
  )
}
