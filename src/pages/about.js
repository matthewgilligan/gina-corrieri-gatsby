import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from './../layouts/MainLayout';
import About from './../components/About';
// import MobilePageTitle from '../../components/MobilePageTitle';

const AboutPage = ({ data }) => {
  return (
    <MainLayout pageTitle="About">
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
