import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 Tattoo Studio. All rights reserved.</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 1rem;
  text-align: center;
  color: white;
`;

export default Footer;
