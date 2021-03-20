import React from 'react';
import styled from 'styled-components';

import Question from './card.js';

const Container = styled.div`
	width: 500px;
  margin: 0 auto;
  transform: translateY(115px);
  -ms-transform: translateY(115px);
	font-family: Texturina;
	@media only screen and (max-width: 900px) {
    width: 90%;
    height: 100%;
    transform: translateY(85px);
		-ms-transform: translateY(85px);
	}
`;

const FAQ = ({ edges }) => {
  return (
		<Container>
			{/* <MobilePageTitle title="FAQ"/>*/}
			{edges.map((feature, pos) => <Question {...feature} key={pos} />)}
		</Container>
	);
}

export default FAQ;
