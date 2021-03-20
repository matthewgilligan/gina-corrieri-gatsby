import React from 'react';
import styled from 'styled-components';

import RichText from './../RichText';

const Container = styled.div`
  margin-bottom: 60px;
  iframe {
    margin-top: 30px;
  }
  @media only screen and (max-width: 900px) {
    iframe {
      width: 100%;
      height: 200px;
    }
  }
`;

const Description = styled.div`
  font-size: 2rem !important;
  line-height: 1.2;
  font-family: Texturina;
`;

const Style = styled.div`
  font-family: Texturina;
  font-size: 1.5rem;
  margin-top: 10px;
`;

const Feature = (props) => {
  const { url, text, styledBy } = props.node;
  const json = JSON.parse(text.raw)

	return (
		<Container>
      <Description>
			  <RichText {...json} />
      </Description>
      <Style>
			  <p className="styledBy">{styledBy}</p>
      </Style>
			<iframe width="600" height="350" src={url} frameborder="0" title="YouTube" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</Container>
	);
};

export default Feature;