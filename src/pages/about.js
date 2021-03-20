import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from './../layouts/MainLayout';
import About from './../components/About';
import SEO from './../components/SEO';

const AboutPage = ({ data }) => {
  return (
    <MainLayout pageTitle="About">
      <SEO
        title="About"
        article={false}
      />
      <About {...data} />
    </MainLayout>
  );
};

export const query = graphql`
	query {
		contentfulSiteMetaData {
      aboutText {
        raw
      }
      email
    }
	}
`

export default AboutPage;
