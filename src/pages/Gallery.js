import React from 'react';
import styled from 'styled-components';
import tattoo1 from '../assets/images/tattoo1.JPG';

const Gallery = () => {
  return (
    <GallerySection>
      <h1>Our Work</h1>
      <GalleryGrid>
        <img src={tattoo1} alt="Tattoo 1" />
        {/* Add more images here */}
      </GalleryGrid>
    </GallerySection>
  );
};

const GallerySection = styled.section`
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background};
  text-align: center;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;

export default Gallery;
