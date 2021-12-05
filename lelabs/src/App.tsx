import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { Routes } from './routes/index.routes';
import { GlobalProvider } from './context';
import { SafeArea } from './components/templates/SafeArea';

export default function App() {
  return (
    <SafeArea backgroundColor="#FFFFFF">
      <NavigationContainer>
        <GlobalProvider>
          <Routes />
        </GlobalProvider>
      </NavigationContainer>
    </SafeArea>
  );
}

