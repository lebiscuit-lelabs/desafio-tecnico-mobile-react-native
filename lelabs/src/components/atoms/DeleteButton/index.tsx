import React from 'react';
import { IconDelete } from '../IconDelete';
import { Container } from './styles';
import {TouchableOpacityProps} from 'react-native';

interface DeleteButtonProps extends TouchableOpacityProps{}

export const DeleteButton: React.FC<DeleteButtonProps> = ({...rest}) => {
  return (
    <Container {...rest} >
      <IconDelete {...rest} />
    </Container>
  )
}
