import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: block;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const InnerWrap = styled.div`
  position: relative;
  display: flex;
  height: 6.5rem;
  width: 90%;
  max-width: 1325px;
  margin: 0 auto;
  padding: 0;
  justify-content: space-between;
  font-size: 2rem;
  text-transform: uppercase;
`;

const Column = styled.div`
  a {

  }
`;

const Item = styled.div`
  display: inline-block;
  margin: 0 1rem 0 0;
  list-style-type: none;

  a {
    font-size: 2rem;
    line-height: 6.5rem;
    vertical-align: middle;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      color: lime;
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <InnerWrap>

        <Column>
          <Item>
            <a 
              href = "mailto: info@ginacorrieri.com"
              className="email"
              target="_blank"
              rel="noopener noreferrer">
                Contact
            </a>
          </Item>
        </Column>

        <Column>
          <Item>
            <a 
              href="https://www.instagram.com/ginacorrieri_" 
              target="_blank" 
              rel="noopener noreferrer">
                Instagram
            </a>
          </Item>
        </Column>

      </InnerWrap>
    </Container>
  );
}

export default Footer;
