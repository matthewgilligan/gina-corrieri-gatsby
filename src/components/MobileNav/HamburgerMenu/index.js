import React, { useEffect, useState } from 'react';
import { useLocation } from "@reach/router";
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaRegEnvelope, FaInstagram } from "react-icons/fa";

import MenuToggle from './menuToggle.js';
import { NavMenu } from './navMenu';

const HamburgerMenuContainer = styled.div`
  display: flex;
`;

const MenuContainer = styled(motion.div)`
	min-width: 300px;
	width: 100%;
	max-width: 85%;
	height: 100%;
	background-color: lime;
	z-index: 90;
	position: fixed;
	top: 0;
	right: 0;
	transform: translateX(4em);
	user-select: none;
	padding: 1em 2.5em;
`;

const BottomContainer = styled.div`
	display: flex;
	width: 100%;
	margin-top: 15px;
`;

const SocialButton = styled(motion.button)`
	color: black;
	font-size: 2.5rem;
	transition: all 250ms ease-in-out;
	display: flex;
	cursor: pointer;
	padding: 5px .5em;
	&:focus {
		outline: none;
	}
	a{
		color: black;
	}
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1em;
`;

const menuVariants = {
	open: {
		transform: "translateX(3%)",
	},
	closed: {
		transform: "translateX(103%)",
	},
};

const menuTransition = {
	type: "spring",
	duration: 1,
	stiffness: 33,
	delay: 0.1,
};

const commonVariants = {
	show: {
		transform: "translateX(0em)",
		opacity: 1,
		transition: {
		delay: 0.3,
		duration: 0.01,
		},
	},
	hide: {
		transform: "translateX(5em)",
		opacity: 0,
	},
};

const commonTransition = { type: "spring", duration: 0.05 };

const HamburgerMenu = props => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(false);
  
	useEffect(() => {
		setActiveMenu(false);
  }, [location]);
    
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <HamburgerMenuContainer>
      <MenuToggle 
        toggle={toggleMenu} 
        isOpen={isOpen} 
      />
      <MenuContainer
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={menuTransition}
      >
        <ContentContainer>
            <NavMenu isOpen={isOpen} />
        </ContentContainer>
        <BottomContainer>
          <SocialButton
              initial={false}
              animate={isOpen ? "show" : "hide"}
              variants={commonVariants}
              transition={commonTransition}
          >
              <a 
                  href = "mailto: info@ginacorrieri.com"
                  className="email"
                  target="_blank"
                  rel="noopener noreferrer">
                      <FaRegEnvelope />
              </a>
          </SocialButton>
          <SocialButton
              initial={false}
              animate={isOpen ? "show" : "hide"}
              variants={commonVariants}
              transition={commonTransition}
          >
              <a 
                  href="https://www.instagram.com/ginacorrieri_" 
                  target="_blank" 
                  rel="noopener noreferrer">
                      <FaInstagram />
              </a>
          </SocialButton>
        </BottomContainer>
      </MenuContainer>
    </HamburgerMenuContainer>
  )
};

export default HamburgerMenu;