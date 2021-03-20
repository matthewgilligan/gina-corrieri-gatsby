import React from 'react';
import { graphql } from 'gatsby';

import HomeLayout from '../layouts/HomeLayout';
import Landing from './../components/Landing';

const HomePage = ({ data }) => {
  return (
    <HomeLayout>
      <Landing {...data} />
    </HomeLayout>
  );
};

export const query = graphql`
	query {
		contentfulProject {
      images {
        title
        file {
          url
        }
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
	}
`

export default HomePage;
