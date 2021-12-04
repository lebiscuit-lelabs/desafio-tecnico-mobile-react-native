import React from 'react';
import { Container, Description } from './styles';

interface DetailsProps {
  description: string;
}

export const Details: React.FC<DetailsProps> = ({description}) => {
  return (
    <Container>
      <Description>
        {description}
      </Description>
    </Container>
  )
}
