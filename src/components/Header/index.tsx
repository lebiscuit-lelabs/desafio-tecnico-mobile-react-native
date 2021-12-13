import React from 'react';
import {Container, LeftTouch, RightTouch, Title} from './styles';

import Ionicons from 'react-native-vector-icons/Ionicons';

import theme from '../../global/styles/theme';

interface Props {
  title?: string;
  LeftIcon?: string;
  RightIcon?: string;
  onPressLeft?: () => void;
  onPressRight?: () => void;
}

const Header = ({
  LeftIcon,
  RightIcon,
  onPressLeft,
  onPressRight,
  title,
}: Props) => {
  return (
    <Container>
      <LeftTouch onPress={onPressLeft}>
        {LeftIcon ? (
          <>
            <Ionicons name={LeftIcon} size={24} color={theme.colors.icon} />
          </>
        ) : null}
      </LeftTouch>

      <Title>{title}</Title>

      <RightTouch onPress={onPressRight}>
        {RightIcon ? (
          <Ionicons name={RightIcon} size={24} color={theme.colors.icon} />
        ) : null}
      </RightTouch>
    </Container>
  );
};

export default Header;
