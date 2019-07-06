import styled, { css } from 'styled-components';

// Components
// import TransitionLink from 'gatsby-plugin-transition-link';
import Text from '../Text';


export const StyledText = styled(Text)`
  z-index: 1;
  text-decoration: none;
`;

export const Background = styled.div`
  opacity: 0;
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center center;
`;


const hovered = css`
  flex: 2.5;
  color: #ffc;
  transition: flex 0.6s ease, background 0.6s ease;

  ${Text} {
    mix-blend-mode: difference;
    color: transparent;
    -webkit-text-stroke: 0.02em ${props => props.theme.colors.text};
  }

  ${Background} {
    opacity: 1;
    transition: opacity 0.3s ease;
  }
`;


export const StyledPanelLink = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: flex 0.9s ease, background-image 0.9s ease;

  :hover,
  &.clone {
    ${props => !props.inactive && hovered};
  }

  :active {
    ${props => !props.inactive && hovered};
    flex: 2;
    transition: flex 0.1s ease;
  }

  ${props => props.isActive && hovered}
`;





export const StyledPanel = styled.div.attrs(props => ({
  style: {
    backgroundImage: `url(${props.poster})`,
  }
}))`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-size: cover;
  color: #ffc;
  /* background-image: url(${props => props.data.poster}); */
  background-size: cover;
  background-position: left center;

  ${Text} {
    mix-blend-mode: difference;
    color: transparent;
    -webkit-text-stroke: 0.03em white;
  }
`;
