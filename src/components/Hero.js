import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import heroImage from '../assets/images/hero.jpg';
import katieProfile from '../assets/images/profile.JPG';

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroText
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>Welcome to Tattoo Studio</h1>
          <p>Specializing in tattoos for women by women.</p>
        </HeroText>
        <ProfileImage
          as={motion.img}
          src={katieProfile}
          alt="Katie Profile"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </HeroContent>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  background: url(${heroImage}) no-repeat center center/cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 10px;
  color: white;
  text-align: center;
`;

const HeroText = styled.div`
  margin-right: 2rem;
`;

const ProfileImage = styled(motion.img)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid white;
`;

export default Hero;
