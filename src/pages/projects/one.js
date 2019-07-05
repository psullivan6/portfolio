import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

const SecondPage = ({ transitionStatus, entry, exit }) => {
  console.log('PAGE 2', transitionStatus, entry, exit);
  return (
    <Layout>
      <SEO title="Project One" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">HOMEPAGE</Link>
    </Layout>
  );
}

export default SecondPage
