import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Box from '../components/Box';
// import PanelLink from '../components/PanelLink';
import { StyledPanel, StyledText } from '../components/PanelLink/styles';

const DetailPage = ({ pageContext: { project } }) => {
  console.log('project', project);
  return (
    <Layout>
      <SEO title="Detail Page" />
      <Box
        as="main"
        display="flex"
        height="100%"
      >
        <StyledPanel
          {...project}
        >
          <StyledText
            display="block"
            textAlign="center"
            fontSize={{ zero: 7, large: 6 }}
            lineHeight={1}
            color="text"
            dangerouslySetInnerHTML={{ __html: project.letter }}
          />
        </StyledPanel>
      </Box>
    </Layout>
  );
}

export default DetailPage
