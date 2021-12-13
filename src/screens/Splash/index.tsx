import React, {useEffect} from 'react';

import {Container, Loading} from './styles';

import theme from '../../global/styles/theme';

import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../routes';

const Splash: React.FC = () => {
  const {navigate} = useNavigation<RootStackParamList | any>();

  useEffect(() => {
    setTimeout(() => {
      navigate('Home');
    }, 2000);
  }, []);

  return (
    <Container>
      <Loading size="large" color={theme.colors.danger} />
    </Container>
  );
};

export default Splash;
