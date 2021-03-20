import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from './../layouts/MainLayout';
import FAQ from './../components/FAQ';
import SEO from './../components/SEO';

const FAQPage = ({ data }) => {
  const { faq } = data;

  return (
    <MainLayout pageTitle="FAQ">
      <SEO
        title="FAQ"
        description="Frequently Asked Questions"
        article={false}
      />
      <FAQ {...faq} />
    </MainLayout>
  );
};

export const query = graphql`
	query {
		faq : allContentfulFaq ( sort: { fields:createdDate, order:DESC } ) {
      edges {
        node {
          question
          answer {
            raw
          }
          createdDate
        }
      }
    }
	}
`

export default FAQPage;

