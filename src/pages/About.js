import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutSection>
      <h1>About Our Studio</h1>
      <p>Founded by a passionate female tattoo artist, our studio specializes in creating beautiful and meaningful tattoos for women.</p>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background};
  text-align: center;
`;

export default About;
