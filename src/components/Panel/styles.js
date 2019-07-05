import styled from 'styled-components';

// Components
import Box from '../Box';


export const StyledPanel = styled(Box)`
  transition: flex 0.3s ease, background 0.3s ease;
  background-size: cover;

  ${props => props.active && `
    flex: 2.5
  `};

  :hover,
  &.clone {
    flex: 2.5;
    background-color: #ffc;
    color: #ffc;
    background-image: url(${props => props.bgImg});
    background-size: cover;
    background-position: left center;
    transition: flex 0.6s ease, background 0.6s ease;

    span {
      mix-blend-mode: difference;
      color: transparent;
      -webkit-text-stroke: 0.03em white;
    }
  }
`;

export default {
  StyledPanel,
}