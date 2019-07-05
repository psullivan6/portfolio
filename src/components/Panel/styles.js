import styled from 'styled-components';

// Components
import Box from '../Box';


export const StyledPanel = styled(Box)`
  transition: flex 0.3s ease, background 0.3s ease;
  background-size: cover;

  :hover {
    flex: 2;
    background-color: #ffc;
    color: #ffc;
    background-image: url(${props => props.bgImg});
    transition: flex 0.6s ease, background 0.6s ease;
  }
`;

export default {
  StyledPanel,
}