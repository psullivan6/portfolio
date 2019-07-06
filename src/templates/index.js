import React, { Fragment } from 'react'
import TransitionLink from 'gatsby-plugin-transition-link';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import Box from '../components/Box';
import PanelLink from '../components/PanelLink';

// Utilities
import useMedia from '../utilities/hooks/useMedia';


const IndexPage = ({ pageContext: { data: pageData } }) => {
  const { large: isLarge } = useMedia();
  const panels = (isLarge) ? pageData.panels.large : pageData.panels.small;
  const { projects } = pageData;

  return (
    <Fragment>
      <SEO title="Home" />
      <Box
        as="main"
        display="flex"
        height="100%"
      >
        {
          panels.map((panel, index) => (
            <PanelLink
              as={TransitionLink}
              key={`${index}-${panel}`}
              data={projects.find(item => item.letter === panel)}
              to={`/detail/${panel}`}
            >
              {panel}
            </PanelLink>
          ))
        }
      </Box>
    </Fragment>
  );
}

const WrappedPage = (props) => (
  <Layout>
    <IndexPage {...props} />
  </Layout>
)

export default WrappedPage
