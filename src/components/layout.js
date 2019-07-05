/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment, useState } from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from 'styled-components';

// Styles
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const Layout = ({ children }) => {
  const [themeSelection, setThemeSelection] = useState('space');

  const handleClick = () => {
    const themeChoice = (themeSelection === 'firetruck') ? 'space' : 'firetruck';
    setThemeSelection(themeChoice);
  };

  return (
    <ThemeProvider theme={theme[themeSelection]}>
      <Fragment>
        <GlobalStyle />
        <button onClick={handleClick}>CHANGE THEME</button>
        {children}
      </Fragment>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
