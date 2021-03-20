import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from './../layouts/MainLayout';
import Features from './../components/Features/';
import SEO from './../components/SEO/';

const FeaturesPage = ({ data }) => {
  const { features } = data;
  
	return (
		<MainLayout pageTitle="Features">
      <SEO
        title="Features"
        description="Music videos featuring pieces created by Gina Corrieri"
        article={false}
      />
      <Features {...features} />
    </MainLayout>
	);
};

export const query = graphql`
	query {
		features : allContentfulFeature ( sort: { fields:releaseDate, order:DESC } ) {
      edges {
        node {
          text {
            raw
          }
          styledBy
          releaseDate
          url
        }
      }
    }
	}
`

export default FeaturesPage;




