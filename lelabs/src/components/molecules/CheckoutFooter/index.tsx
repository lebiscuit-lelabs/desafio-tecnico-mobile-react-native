import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Button } from '../../atoms';
import { Container, Total } from './styles';

interface CheckoutFooterProps extends TouchableOpacityProps {
  total: number;
}

export const CheckoutFooter: React.FC<CheckoutFooterProps> = ({total, ...rest}) => {
  return (
    <Container>
      <Total >{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(total)}</Total>
      <Button title="Checkout" {...rest} />
    </Container>
  )
}
