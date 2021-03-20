import React from 'react';
import styled from 'styled-components';

import RichText from '../RichText';

const Container = styled.div`
  margin-bottom: 35px;
  h3 {
    font-size: 2.3rem;
    margin-bottom: 10px;
    text-decoration: underline;
  }
  p {
    font-size: 2rem;
    padding-bottom: 10px;
    a {
      color: black;
      text-decoration: underline;
      &:hover {
        color: lime;
      }
    }
  }
  @media only screen and (max-width: 900px) {
    margin-bottom: 25px;
  }
`;

const Question = (props) => {
  const { question, answer } = props.node;
  const json = JSON.parse(answer.raw)

	return (
		<Container>
      <h3>{question}</h3>
      <RichText {...json} />
    </Container>
	);
};

export default Question;