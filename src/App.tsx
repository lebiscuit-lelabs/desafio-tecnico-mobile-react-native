import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './routes';
import {NavigationContainer} from '@react-navigation/native';

import {ThemeProvider} from 'styled-components/native';
import CartProvider from './hooks/GlobalContext';
import theme from './global/styles/theme';

const App: React.FC = () => {
  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={theme.colors.shape}
        />
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </CartProvider>
  );
};

export default App;
