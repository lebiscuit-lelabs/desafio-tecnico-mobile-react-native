import React from 'react';
import { Container } from './styles';

interface SafeView {
  backgroundColor: string;
}

export const SafeArea: React.FC<SafeView> = ({children, backgroundColor}) => {
  return <Container backgroundColor={backgroundColor}>{children}</Container>;
}
