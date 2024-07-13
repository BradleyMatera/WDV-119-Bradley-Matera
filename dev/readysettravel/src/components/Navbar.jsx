import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components for Navbar
const Nav = styled.nav`
  background-color: #0f4c5c; // Color from the provided palette
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fb8b24; // Color from the provided palette
  text-decoration: none;
  &:hover {
    color: #e36414; // Color from the provided palette
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MenuItem = styled(Link)`
  font-size: 1rem;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s;
  &:hover {
    color: #fb8b24; // Color from the provided palette
  }
`;

const BookButton = styled(Link)`
  background-color: #e36414; // Color from the provided palette
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s;
  &:hover {
    background-color: #9a031e; // Color from the provided palette
  }
`;

function Navbar() {
  return (
    <Nav aria-label="Primary navigation">
      <Container>
        <Logo to="/">ReadySetTravel</Logo>
        <Menu>
          <MenuItem to="/about">About</MenuItem>
          <MenuItem to="/destinations">Destinations</MenuItem>
          <MenuItem to="/tours">Tours</MenuItem>
          <MenuItem to="/blog">Blog</MenuItem>
          <BookButton to="/book">Book a Trip</BookButton>
        </Menu>
      </Container>
    </Nav>
  );
}

export default Navbar;
