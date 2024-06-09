import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Nav>
      <Logo to="/">Tattoo Studio</Logo>
      <Menu>
        <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/gallery">Gallery</MenuItem>
        <MenuItem to="/contact">Contact</MenuItem>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  padding: 1rem 2rem;
`;

const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: white;
  text-decoration: none;
`;

const Menu = styled.div`
  display: flex;
  gap: 2rem;
`;

const MenuItem = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: white;
  text-decoration: none;
`;

export default Header;
