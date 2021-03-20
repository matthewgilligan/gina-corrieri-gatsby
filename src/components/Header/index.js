import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Logo from './../../assets/Site/logo.gif';

const Container = styled.div`
  display: block;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const InnerWrap = styled.div`
  position: relative;
  display: flex;
  height: 5rem;
  width: 90%;
  max-width: 1325px;
  margin: 0 auto;
  padding: 0;
  justify-content: space-between;
  font-size: 2rem;
  text-transform: uppercase;
`;

const LogoWrap = styled.div`
  width: 13rem;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin: 8px auto 0;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  transform: translateY(-50%);

  img {
    display: block;
    width: 100%;
    margin: 0;
  }
`;

const Column = styled.div`
  
`;

const NavItem = styled.div`
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

const Header = () => {
	return (
		<Container>
			<InnerWrap>

        <LogoWrap>
          <Link to="/">
            <img src={Logo} alt="Gina Corrieri Logo" />
          </Link>
        </LogoWrap>

        <Column>
          <NavItem>
            <a href="http://shop.ginacorrieri.com/">
              Shop
            </a>
          </NavItem>
          <NavItem>
            <Link to="/features">
              Features
            </Link>
          </NavItem>
        </Column>

        <Column>
          <NavItem>
            <Link to="/about">
              About
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/faq">
              FAQ
            </Link>
          </NavItem>
				</Column>

			</InnerWrap>
		</Container>
	);
};

export default Header;
