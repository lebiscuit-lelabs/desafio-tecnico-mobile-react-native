import React from 'react';
import { IconCart } from '../../atoms/IconCart';
import { IconBack } from '../../atoms/IconBack';
import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackProps } from '../../../routes/types';

interface HeaderProps {
  back?: boolean;
}

export const Header: React.FC<HeaderProps> = ({back}) => {

  const {goBack, navigate} = useNavigation<NativeStackNavigationProp<StackProps, 'Home'>>();



  return (
    <Container>
      {back && <IconBack onPress={goBack} />}
      <IconCart onPress={() => navigate('Cart')} />
    </Container>
  )
}
