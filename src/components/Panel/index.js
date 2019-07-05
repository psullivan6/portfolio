import React from 'react';

// Components
import Box from '../Box';
import Text from '../Text';

// Styles
import { StyledPanel } from './styles';


const Panel = ({ children, image }) => (
  <StyledPanel
    flex="1"
    display="flex"
    alignItems="center"
    justifyContent="center"
    height="100%"
    bgImg={image}
  >
    <Text
      display="block"
      textAlign="center"
      fontSize={6}
    >
      {children}
    </Text>
  </StyledPanel>
);

export default Panel;
