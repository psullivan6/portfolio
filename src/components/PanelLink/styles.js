import styled, { css } from 'styled-components';

// Components
// import TransitionLink from 'gatsby-plugin-transition-link';
import Text from '../Text';

const hovered = css`
  flex: 2.5;
  background-color: #ffc;
  color: #ffc;
  background-image: url(${props => props.bgImg});
  background-size: cover;
  background-position: left center;
  transition: flex 0.6s ease, background 0.6s ease;

  ${Text} {
    mix-blend-mode: difference;
    color: transparent;
    -webkit-text-stroke: 0.03em white;
  }
`;

/* export const StyledPanelLink = styled(TransitionLink)` */
export const StyledPanelLink = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-size: cover;

  :hover,
  &.clone {
    ${hovered};
  }

  ${props => props.isActive && hovered}

  /* :hover,
  &.clone {
    flex: 2.5;
    background-color: #ffc;
    color: #ffc;
    background-image: url(${props => props.bgImg});
    background-size: cover;
    background-position: left center;
    transition: flex 0.6s ease, background 0.6s ease;

    ${Text} {
      mix-blend-mode: difference;
      color: transparent;
      -webkit-text-stroke: 0.03em white;
    }
  } */
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

export const StyledText = styled(Text)`
  text-decoration: none;
`;
