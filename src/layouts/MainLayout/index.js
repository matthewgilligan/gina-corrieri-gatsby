import React from 'react';
import styled from 'styled-components';

import './../../styles/default.scss';
import Header from './../../components/Header';
import MobileNav from './../../components/MobileNav';
import Footer from './../../components/Footer';

const Container = styled.div`

`;

const Title = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  -ms-transform: translateY(10px);
  transform: translateY(22px);
  h2 {
    position: absolute;
    top: 50%;
    margin: 0;
    padding: 0;
    color: white;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: lime;
    font-size: 50rem;
    text-align: center;
  }
  @media only screen and (max-width: 1350px) {
    h2 {font-size: 45rem}
  }
  @media only screen and (max-width: 1200px) {
    h2 {font-size: 40rem}
  }
  @media only screen and (max-width: 1200px) {
    h2 {font-size: 40rem}
  }
  @media only screen and (max-width: 1050px) {
    h2 {font-size: 35rem}
  }
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const Content = styled.div`
  width: 100%;
  height: calc(100% - 65px);
  max-width: 1450px;
  padding: 0 10px 150px 0;
  margin: 0 auto;
`;

const MainLayout = (props) => {
  const { pageTitle, children } = props;

  return (
    <Container>
      <Header />
      <MobileNav />
      <Title>
        <h2>
          {pageTitle}
        </h2>
      </Title>
      <Content>
        {children}
      </Content>
      <Footer />
    </Container>
  );
};

export default MainLayout;
