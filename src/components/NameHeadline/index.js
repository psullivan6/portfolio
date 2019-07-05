import React from 'react';

// Components
import Box from '../Box';
import Text from '../Text';

const NameHeadline = ({ children }) => (
  <Box
    alignItems="center"
    justifyContent="center"
  >
    <Text
      as="h1"
      margin={0}
      fontSize={7}
      textAlign="center"
      lineHeight={1}
    >
      {children}
    </Text>
  </Box>
);

export default NameHeadline;
