import React from 'react';
import styled from 'styled-components';

import Feature from './card.js';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 70px;
  transform: translateY(115px);
  -ms-transform: translateY(115px);
  @media only screen and (max-width: 900px) {
    width: 90%;
    transform: translateY(85px);
    -ms-transform: translateY(85px);
  }
`;

const Features = ({ edges }) => {
  return (
		<Container>
			{/* <MobilePageTitle title="Features"/>*/}
			{edges.map((feature, pos) => <Feature {...feature} key={pos} />)}
		</Container>
	);
}

export default Features;
