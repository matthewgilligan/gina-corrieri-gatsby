import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from './../layouts/MainLayout';
// import AboutInfo from './../../components/AboutInfo';
// import MobilePageTitle from '../../components/MobilePageTitle';

const AboutPage = (props) => {
  return (
    <MainLayout pageTitle="About">
      {/* <MetaDecorator
        title="About | Gina Corrieri"
        description="Gina Corrieri is an independent designer and reworker based in London."
      />
      <AboutInfo siteMetaData={this.state.siteMetaData} /> */}
      <h1>Wagz</h1>
    </MainLayout>
  );
};

// export const query = graphql`
// 	query {
// 		contentfulSiteMetaData ( limit: 1 ) {
//       about {
//         json
//       }
//       email
//     }
// 	}
// `

export default AboutPage;
