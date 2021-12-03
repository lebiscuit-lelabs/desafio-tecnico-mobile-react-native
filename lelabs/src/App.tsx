import React from 'react';
import { SafeArea } from './components/SafeArea';
import {NavigationContainer} from '@react-navigation/native';
import { Routes } from './routes/index.routes';
import { GlobalProvider } from './context';

export default function App() {
  return (
    <GlobalProvider>
      <SafeArea>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </SafeArea>
    </GlobalProvider>
  );
}

