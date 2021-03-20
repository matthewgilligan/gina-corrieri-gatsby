import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Gallery from './gallery.js';

import PhenomenaVideo from './../../assets/Phenomena/phenomena.mp4';
import PhenomenaLogo from './../../assets/Phenomena/phenomena.png';
import Image1 from './../../assets/Phenomena/kiara.jpg'
import Cord from './../../assets/Phenomena/cord.png';
import Necklace from './../../assets/Phenomena/accessories.png';

const Container = styled.div`
  height: 100%;
  margin: 0 auto;
  z-index: -2;
`;

const Hero = styled.div`
  position: relative;
  height: 720px;
  width: 100%;
  -webkit-transform: translateY(120px);
  transform: translateY(120px);
  @media only screen and (max-width: 980px) {
    height: 85vh;
    -webkit-transform: translateY(55px);
    transform: translateY(55px);
    video {
      display: none !important;
    }
  }
`;

const videoStyle = {
  display: "block",
  maxWidth: "1000px",
  width: "1000px",
  margin: "0 auto",
  width: "90%",
};

const mobileStyle = {
  display: "none",
};

const logoStyle = {
  display: "inline-block",
  position: "absolute",
  left: "50%",
  bottom: "0",
  transform: "translateX(-50%)",
  width: "40%",
  marginTop: "150px",
};

const Copy = styled.div`
  position: relative;
  margin: 120px auto 150px auto;
  width: 100%;
  @media only screen and (max-width: 980px) {
    padding-bottom: 50px;
  }
`;

const Text = styled.div`
  margin: 0 auto;
  max-width: 600px;
  text-align: center;
  p {
    margin-bottom: 20px;
    font-size: 2.1rem;
    font-family: Texturina;
    line-height: 1.2;
  }
  @media only screen and (max-width: 980px) {
    width: 90%;
    margin: 0 auto;
  }
`;

const Textures = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 0;
  width: 100%;
  img {
    height: 600px;
    &:first-of-type {
      height: 800px;
    }
  }
  @media only screen and (max-width: 980px) {
    display: none;
  }
`;

const Landing = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Container>
      <Hero>
        <video style={videoStyle} autoPlay loop muted>
          <source src={PhenomenaVideo} type='video/mp4' />
        </video>
        <img src={Image1} alt="Phenomena" className="mobileBanner"/>
        <img src={PhenomenaLogo} alt="Phenomena Logo" className="phenomenaLogo"/>
      </Hero>

      <Copy data-aos="fade-up">
        <Text>
          <p>Clothing has the power to manifest your mind and values.</p>
          <p>In the 1960s my maternal grandparents left San Fernando, Trinidad to come to <span style={{color: "red"}}>London</span>, also the city where my Italian paternal grandfather lived with my Northern English grandmother.</p>
          <p>In the 1980s my parents met at university, my dad was a Punk and my mum loved Disco.</p>
          <p>Mixtures and fusions feel natural to me, often melding with a sense of uncertainty.</p>
          <p>I have grown up wondering where my place in the world is.</p>
          <p><em>Phenomena</em> is my world without boundaries. A surreal, incandescent place inspired by the late 1970s Reggae scene and its influence on Punk in London; both were rooted in the city experience and bonded people through music and a shared resistance to the system.</p>
          <p>I use heat as a metaphor for defiance.</p>
          <p>The fabric is unique to each piece, and cannot be replicated.</p>
        </Text>

        <Textures>
          <img src={Cord} alt="Phenomena Cord" />
          <img src={Necklace} alt="Phenomena Necklace" />
        </Textures>
      </Copy>
      <Gallery {...props} />
    </Container>
  );
};

export default Landing;