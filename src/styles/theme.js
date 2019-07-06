import remapValues from '../utilities/remapValues';


const fontSizes = [12, 16, 21, 24, 36, 60, 90, '15vw'];
const space = [0, 6, 12, 24, 36, 48, 120];

const breakpoints = {
  small: '20em',
  medium: '48em',
  large: '75em'
};

const queries = remapValues(breakpoints, value => `(min-width: ${value})`);

const theme = {
  firetruck: {
    text: '#ffc',
    background: '#f33',
    colors: {
      text: '#ffc',
      background: '#f33',
    },
    breakpoints,
    fontSizes,
    queries,
    space,
  },
  space: {
    colors: {
      text: '#ffc',
      textSelection: '#90f',
      background: '#1a1a1a',
    },
    breakpoints,
    fontSizes,
    queries,
    space,
  }
};

export default theme;
