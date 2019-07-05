import React from 'react'

import Layout from '../components/layout';
import SEO from '../components/seo';
import Box from '../components/Box';
import Text from '../components/Text';
import Panel from '../components/Panel';

const items = 'Patrick Sullivan'.split('').map(item => ({ letter: item, image: `https://source.unsplash.com/random?${item}` }))

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box
      as="main"
      display="flex"
      height="100%"
    >
      {
        items.map((item, index) => (
          <Panel key={`${index}-${item.letter}`} image={item.image}>
            {item.letter}
          </Panel>
        ))
      }
    </Box>
  </Layout>
)

export default IndexPage
