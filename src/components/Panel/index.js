import React from 'react';

// Components
import Text from '../Text';

// Styles
import { StyledPanel } from './styles';


const Panel = ({ children, image }) => (
  <StyledPanel
    flex={1}
    display="flex"
    alignItems="center"
    justifyContent="center"
    height="100%"
    bgImg={image}
  >
    <Text
      display="block"
      textAlign="center"
      fontSize={{ zero: 7, large: 6 }}
      lineHeight={1}
      dangerouslySetInnerHTML={{ __html: children }}
    >
    </Text>
  </StyledPanel>
);

export default Panel;
