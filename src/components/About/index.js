import React from 'react';
import styled from 'styled-components';

import RichText from './../RichText';

const Container = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 600px) {
    -ms-transform: translateY(85px);
    transform: translateY(85px);
  }
`;

const InnerWrap = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 700px;
  padding: 30px;
  padding-right: 60px;
  background-color: rgba(255, 255, 255, 0.7);
  border: 2px solid black;
  color: black;
  font-family: Texturina, Helvetica, sans-serif;
  p {
    font-size: 2rem;
    line-height: 1.2;
    margin: 20px 0;
  }
  a {
    color: black;
    text-decoration: underline;
    &:hover {
      color: lime;
    }
  }
  @media only screen and (max-width: 700px) {
    width: 80%;
    border: none;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
    position: relative;
    transform: none;
    -ms-transform: none;
    padding: 0;
    margin: 0 auto;
  }
`;

const AboutInfo = (props) => {
  const { aboutText, email } = props.contentfulSiteMetaData;
  const json = JSON.parse(aboutText.raw)

  return (
    <Container>
      <InnerWrap>
        <RichText {...json} />
        <a href = "mailto: info@ginacorrieri.com" className="email" target="_blank" rel="noopener noreferrer">{email}</a>
      </InnerWrap> 
    </Container>
  );
}

export default AboutInfo;
