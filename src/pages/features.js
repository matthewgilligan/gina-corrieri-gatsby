import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from './../layouts/MainLayout';
import Features from './../components/Features/';

const FeaturesPage = ({ data }) => {
  const { features } = data;
  
	return (
		<MainLayout pageTitle="Features">
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




