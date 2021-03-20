import React from 'react';
import styled from 'styled-components';

import './../../styles/default.scss';
import Header from './../../components/Header';
import MobileNav from './../../components/MobileNav';
import Footer from './../../components/Footer';

const Container = styled.div`
  height: 100%;
`;

const HomeLayout = (props) => {
  const { children } = props;

  return (
    <Container>
      <Header />
      <MobileNav />
      {children}
      <Footer />
    </Container>
  );
};

export default HomeLayout;
