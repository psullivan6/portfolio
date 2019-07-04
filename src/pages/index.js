import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Text from '../components/Text';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Text
      as="p"
      fontSize={1}
    >
      Paragraph (1)
    </Text>
    <Text
      as="p"
      fontSize={2}
    >
      Paragraph (2)
    </Text>
    <Text
      as="p"
      fontSize={3}
    >
      Paragraph (3)
    </Text>
    <Text
      as="p"
      fontSize={4}
    >
      Paragraph (4)
    </Text>
    <Text
      as="h1"
      fontSize={5}
    >
      Paragraph (5)
    </Text>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
