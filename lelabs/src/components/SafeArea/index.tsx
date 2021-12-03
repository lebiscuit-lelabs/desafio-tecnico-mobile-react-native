import React from 'react';

import { Container } from './styles';

export const SafeArea: React.FC = ({children}) => {
  return <Container>{children}</Container>;
}
